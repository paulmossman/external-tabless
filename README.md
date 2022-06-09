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
