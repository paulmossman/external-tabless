# External Tabless

This extension forces all URLs opened from outside Chrome to launch in a new
window.

It's a fork of [ei14/tab-less-togglable](https://github.com/ei14/tab-less-togglable).

## Installation

### Chrome Web Store

Pending.

### Building from source

1. [Install Node.js and
npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
2. Install Grunt: `npm install -g grunt-cli`
  * On a Mac: `brew install grunt-cli`
3. Clone the repository: `git clone https://github.com/paulmossman/external-tabless.git`
4. Enter the repository folder: `cd external-tabless`
5. Install the dependencies: `npm install`
6. Build the extension: `grunt`
7. In Chrome, go to `chrome://extensions` and enable *Developer mode* in the
upper right corner
8. Install the extension. There are two different ways to do this; choose one:
    1. Load unpacked. Useful for testing and quick installation.
        * Click *Load unpacked*
        * Navigate to `external-tabless/dist` and open
    2. Pack and install. Produces a `.crx` file that enables you to easily
    install the extension on multiple browsers.
        * Click *Pack extension > Browse*
        * Navigate to `external-tabless/dist` and open
        * Click *Pack extension*. This will produce a file called `dist.crx`
        which can be used to install the extension on any Chrome-like browser.
        Feel free to rename this file to something more descriptive, such as
        `external-tabless.crx`.
        * Run Chrome with the file.
            * From the command line this looks like `chrome
            tab-less-togglable.crx`
            * On a GUI, you may be able to simply double-click the `.crx` file

## Configuration

There is nothing to configure, the extension is active upon installation.

To disable it use [Chrome's Manage Extensions](chrome://extensions) to turn it "Off".

## Why?

Examples of opening a URL from outside Chrome:
- From an IDE, such as [Visual Studio Code](https://code.visualstudio.com/).
- From command line:
    - Mac: `open https://github.com`
    - Windows: `start https://github.com`
- An application launching a web login, such as:
    - [Bitwarden desktop](https://bitwarden.com/download/#downloads-desktop)
    - MS Azure CLI's [`az login`](https://learn.microsoft.com/en-us/cli/azure/authenticate-azure-cli-interactively).

When you aren't using Chrome but open a URL that takes you to Chrome, it's
unlikely that URL is related to any of tabs you already have open in other
Chrome windows.  So in general it's nice if the new URL opens in a fresh
new Chrome window.

This is the equivalent of Firefox's [`browser.link.open_external=2`](https://kb.mozillazine.org/Browser.link.open_external).

**Mac multiple desktops (aka Spaces)**: When you're using multiple desktops on
a Mac and open a URL from outside Chrome, if you don't already have a Chrome
window on the current desktop then you're switched to some other desktop that
does have a Chrome window.  (Sometimes it happens even when you do already have
a Chrome window on your current desktop!)  You then need to navigate yourself
back to the desktop that you were working in, and bring the Chrome tab with the
new URL with you.  This extension fixes that problem, the URL is always opened
in a new window on the current desktop.

### From other Chrome extensions
URLs opened from other Chrome extensions are unfortunately considered to be
from outside Chrome.

## Contributing

All the code for this extension is open-sourced and can be found online at
https://github.com/paulmossman/external-tabless. I'd be happy to receive any
feedback, hear about any bugs or accept any pull-requests for new code at that
address.
