# What it is #

*Quiet Slashdot Reader* is nothing but an experiment with Google Chrome's Extensions API. Fell free to use it if you find it useful but don't expect any updates ;)

# What it does # 

*Quiet Slashdot Reader* remove the menu bars and the ads from the Slashdot home page, allowing a quieter reading experience.

# How to install #

In Chrome:
- go to the Extensions page
- tick "developer mode"
- click "Load unpacked extension...'
- navigate to the directory in which you downloaded/checkout *Quiet Slashdot Reader*

# How it does it #

The extension runs in the background. When it detects the slashdot page has finished loading, it injects some jQuery code that will remove the unwanted parts from the page.

# Where to #

It would be interresting to switch to *Event pages*, instead of *Background pages*. See https://developer.chrome.com/extensions/event_pages
