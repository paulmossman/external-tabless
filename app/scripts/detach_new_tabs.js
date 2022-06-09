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
  chrome.browserAction.setBadgeText({text: 'WIN'});
  chrome.browserAction.setBadgeBackgroundColor({color: '#808080'});
};

var stopTabless = function() {
  chrome.storage.local.set({tabless: false});
  chrome.tabs.onCreated.removeListener(detachTab);
  chrome.browserAction.setBadgeText({text: 'TAB'});
  chrome.browserAction.setBadgeBackgroundColor({color: '#ffffff'});
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

chrome.browserAction.onClicked.addListener(toggleTabless);

chrome.runtime.onInstalled.addListener(startTabless);

chrome.runtime.onStartup.addListener(function() {
  chrome.storage.local.get(['tabless'], function(result) {
    if(result.tabless) {
      startTabless();
    }
  });
});

//chrome.runtime.onStartup.addListener(detachAllTabs);
//chrome.tabs.onCreated.addListener(detachTab);
