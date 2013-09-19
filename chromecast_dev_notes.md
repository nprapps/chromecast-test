Chromecast dev notes
====================

* Receiver loading is triggered by JS, not by extension (though you do need to have the extension installed)
* Need to account for safe area on TVs. The browser is trimmed by a dozen pixels on every side on my display.
* Receiver takes some time to load (1-5 secs)
* Refreshing page doesn't always cause receiver to reload (sometimes have to explicitly cancel cast and restart).
* There is notable delay on message passing. It's not horrible, but would be a problem for anything twitchy.