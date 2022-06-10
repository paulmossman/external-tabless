'use strict';

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
      16: '../images/tabless-16.png',
      19: '../images/tabless-19.png',
      32: '../images/tabless-32.png',
      38: '../images/tabless-38.png',
      64: '../images/tabless-64.png',
    }
  });
};

var stopTabless = function() {
  chrome.storage.local.set({tabless: false});
  chrome.tabs.onCreated.removeListener(detachTab);
  chrome.action.setIcon({
    path: {
      16: '../images/tabbed-16.png',
      19: '../images/tabbed-19.png',
      32: '../images/tabbed-32.png',
      38: '../images/tabbed-38.png',
      64: '../images/tabbed-64.png',
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
