'use strict';

// Extension functionality

var detachTab = function(tab) {
  if (tab.index === 0 || tab.pinned) {
    return;
  }

  chrome.windows.get(tab.windowId, function(oldWindow) {
    chrome.windows.create({tabId: tab.id, incognito: tab.incognito, state: oldWindow.state});
  });
};

var detachAllTabs = function() {
  chrome.tabs.query({}, function(tabs) {
    tabs.forEach(detachTab);
  });
};

var startTabless = function() {
  chrome.storage.local.set({tabless: true});
  chrome.tabs.onCreated.addListener(detachTab);
  detachAllTabs();
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

var stopTabless = function() {
  chrome.storage.local.set({tabless: false});
  chrome.tabs.onCreated.removeListener(detachTab);
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

var toggleTabless = function() {
  chrome.storage.local.get(['tabless'], function(result) {
    if(result.tabless) {
      stopTabless();
    } else {
      startTabless();
    }
  });
};

chrome.action.onClicked.addListener(toggleTabless);

chrome.runtime.onInstalled.addListener(stopTabless);

chrome.runtime.onStartup.addListener(function() {
  chrome.storage.local.get(['tabless'], function(result) {
    if(result.tabless) {
      startTabless();
    } else {
      stopTabless();
    }
  });
});

chrome.storage.local.get(['tabless'], function(result) {
  if(result.tabless) {
    startTabless();
  } else {
    stopTabless();
  }
});

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
