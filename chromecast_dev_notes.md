Chromecast dev notes
====================

* Receiver loading is triggered by JS, not by extension (though you do need to have the extension installed)
* Need to account for safe area on TVs. The browser is trimmed by a dozen pixels on every side on my display.
* Receiver takes some time to load (1-5 secs)
* Refreshing page doesn't always cause receiver to reload (sometimes have to explicitly cancel cast and restart).
* There is notable delay on message passing. It's not horrible, but would be a problem for anything twitchy.
* Devtools are available at `$DEVICE_IP:9222`.
* Application ID's are restricted to a single receiver URL, which can be on any domain except `localhost`. I have the dev domain set to `10.0.1.5:8000`.  That name must be public on the local network, so you can't use `hosts`. 
