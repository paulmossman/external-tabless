Tab-less
========

This extension allows you to disable tabbed browsing. When windowed mode is
set, your browser will open windows wherever possible rather than use tabs.

This repository is a fork of
[iainbeeston/tab-less](https://github.com/iainbeeston/tab-less). Unlike the
original, this version allows you to toggle between windowed and tabbed mode by
clicking the icon or by using a keyboard shortcut. It lacks some features of
the original:

* Clicking the icon does not close all unfocused windows. Rather, it toggles between windowed and tabbed mode.
* The icon badge does not display the number of open windows. Rather, it indicates the current setting: [WIN]dowed or [TAB]bed.

Installation
-----

### Chrome Web Store

This extension will be released on the Chrome Web Store soon.

### Building from source

1. [Install Node.js and
npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
2. Install Grunt: `npm install -g grunt-cli`
3. Clone the repository: `git clone https://github.com/ei14/tab-less-togglable.git`
4. Enter the repository folder: `cd tab-less-togglable`
5. Install the dependencies: `npm install`
6. Build the extension: `grunt`
7. In Chrome, go to `chrome://extensions` and enable *Developer mode* in the
upper right corner
8. Install the extension. There are two different ways to do this; choose one:
    1. Load unpacked. Useful for testing and quick installation.
        * Click *Load unpacked*
        * Navigate to `tab-less-togglable/dist` and open
    2. Pack and install. Produces a `.crx` file that enables you to easily
    install the extension on multiple browsers.
        * Click *Pack extension > Browse*
        * Navigate to `tab-less-togglable/dist` and open
        * Click *Pack extension*. This will produce a file called `dist.crx`
        which can be used to install the extension on any Chrome-like browser.
        Feel free to rename this file to something more descriptive, such as
        `tab-less-togglable.crx`.
        * Run Chrome with the file.
            * From the command line this looks like `chrome
            tab-less-togglable.crx`
            * On a GUI, you may be able to simply double-click the `.crx` file

Configuration
-------------

There is not much to configure, but you can set a keyboard shortcut that
switches between tabbed and windowed mode.

In Chrome, go to `chrome://extensions/shortcuts` and scroll to Tab-less
Togglable. Click the pencil icon and type your desired shortcut.

FAQs
----

* Why would you want to disable tabs?

Because I sometimes find it difficult to find the tab I'm looking for. Tabs can
sometimes obscure the browsing experience, and I sometimes find it easier to
browse the web when I can see all of my windows at once. Most modern operating
systems can arrange windows elegantly and efficiently, making tabs defunct in
many cases.

* If you don't like tabs, then just don't use them! You don't need an extension for that

Increasingly, browsers force tabs on you by default. It does not provide an
option to default to using windows rather than tabs. This extension lets you
override that behaviour to open windows instead, to make it seamless for users
like myself.

* Why should I use Tab-less-togglable rather than New Tab, New Window?

1. Tab-less-togglable does not require any access to your browsing history at all (most extensions require access to your browsing history or the current page you're viewing).
2. It's designed to be as light-weight and simplistic as possible.
3. There's no magic, it just moves tabs to a new window, whenever they're opened, whenever windowed mode is on (using the default settings for a new window).

* Why is this a fork of [iainbeeston/tab-less](https://github.com/iainbeeston/tab-less) instead of a pull request?

1. [iainbeeston/tab-less](https://github.com/iainbeeston/tab-less) contains
features that this extension removed for the sake of convenient toggling.
2. [iainbeeston/tab-less](https://github.com/iainbeeston/tab-less) is more
minimalistic and does not rely on browser storage like this fork does.
3. [iainbeeston](https://github.com/iainbeeston) is a much more competent
JavaScript developer than I.
[iainbeeston/tab-less](https://github.com/iainbeeston/tab-less) is well
optimized and comes with unit testing, whereas this fork has room for
improvement.

Contributing
------------

All the code for this extension is open-sourced and can be found online at
https://github.com/ei14/tab-less-togglable. I'd be happy to receive any
feedback, hear about any bugs or accept any pull-requests for new code at that
address.

I will merge all relevant changes from the upstream repository, so if your
contributions apply to both this extension and
[iainbeeston/tab-less](https://github.com/iainbeeston/tab-less), consider
pushing to [iainbeeston/tab-less](https://github.com/iainbeeston/tab-less)
first.
