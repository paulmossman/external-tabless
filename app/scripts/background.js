'use strict';

function waitForOneUrl(tab) {
  return new Promise((resolve, reject) => {
    // If the tab already has a URL, return it now.
    if (tab.pendingUrl !== undefined || tab.url !== undefined) {
      resolve(tab);
      return;
    }

    const startTime = Date.now();
    const timeout = 1.5 * 1000; // Timeout

    function checkUrls() {
      // Refresh tab data
      chrome.tabs.get(tab.id, (updatedTab) => {
        if (updatedTab.pendingUrl !== undefined || updatedTab.url !== undefined) {
          resolve(updatedTab); // At least one URL is defined
          return;
        }

        if (Date.now() - startTime > timeout) {
          reject(new Error('Timeout: Neither URL was defined.'));
          return;
        }

        setTimeout(checkUrls, 50); // Check again after a small delay
      });
    }

    checkUrls(); // Start checking
  });
}

var detachTab = function(tab) {
  detachTabAsync(tab).then();
};

var detachTabAsync = async function(tab) {

  if (tab.openerTabId != undefined) {
    // Definately opened just now from inside Chrome,
    // so do *not* open in a new window.
    return;
  }

  if( tab.index == 0 ) {
    // Already a new window (first tab), so do *not* open in a new window.
    return;
  }

  var tabWithUrl = undefined;
  try {
    tabWithUrl = await waitForOneUrl(tab);
  } catch (e) {
    // No URL, so do *not* open in a new window
    return;
  }

  if(tabWithUrl.pendingUrl == undefined) {
    // Already opened.  i.e. When the Extension loads.
    // So do *not* open in a new window.
    return;
  }

  // Otheriwse, open a new window!
  chrome.windows.get(tab.windowId, function(oldWindow) {

    chrome.windows.create(
      { tabId: tab.id, incognito: tab.incognito, state: oldWindow.state },
      function (newWindow) {
        // Draw attention to it.  (Sometimes focus moves to the window in
        // another desktop.)
        chrome.windows.update(newWindow.id, { drawAttention: true });
      }
    );
  });
};

var startTabless = function() {
  chrome.tabs.onCreated.addListener(detachTab);
  chrome.action.setIcon({
    path: {
      16: '../images/external-tabless-16.png',
      19: '../images/external-tabless-19.png',
      32: '../images/external-tabless-32.png',
      38: '../images/external-tabless-38.png',
      64: '../images/external-tabless-64.png',
    }
  });
};

startTabless();

// Keep alive
// Created by wOxxOm
// Taken from https://stackoverflow.com/questions/66618136

let lifeline;

keepAlive();

chrome.runtime.onConnect.addListener(port => {
  if (port.name === 'keepAlive') {
    lifeline = port;
    setTimeout(keepAliveForced, 295e3); // 5 minutes minus 5 seconds
    port.onDisconnect.addListener(keepAliveForced);
  }
});

function keepAliveForced() {
  if(lifeline !== null && lifeline !== undefined) lifeline.disconnect();
  lifeline = null;
  keepAlive();
}

async function keepAlive() {
  if (lifeline) return;
  for (const tab of await chrome.tabs.query({ url: '*://*/*' })) {
    try {
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => chrome.runtime.connect({ name: 'keepAlive' }),
      });
      chrome.tabs.onUpdated.removeListener(retryOnTabUpdate);
      return;
    } catch (e) {
      // Do nothing
    }
  }
  chrome.tabs.onUpdated.addListener(retryOnTabUpdate);
}

async function retryOnTabUpdate(tabId, info) {  
  if (info.url && /^(file|https?):/.test(info.url)) {
    keepAlive();
  }
}
