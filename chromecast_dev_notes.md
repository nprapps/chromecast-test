Chromecast dev notes
====================

* Receiver loading is triggered by JS, not by extension (though you do need to have the extension installed)
* Need to account for safe area on TVs. The browser is trimmed by a dozen pixels on every side on my display.
* Default body background color is black, not white as in most browsers. If you're not careful, your standard CSS might make it appear as though you have a blank screen, when you just have black text on a black background.
* Receiver takes some time to load (1-5 secs)
* Refreshing page doesn't always cause receiver to reload (sometimes have to explicitly cancel cast and restart).
* There is notable delay on message passing. It's not horrible, but would be a problem for anything twitchy.
* Devtools are available at `$DEVICE_IP:9222`.
* Application ID's are restricted to a single receiver URL, which can be on any domain except `localhost`. I have the dev domain set to `10.0.1.5:8000`.  That name must be public on the local network, so you can't use `hosts`. 
* The build of Chrome running on the device supports the webkit fullscreen request API, but they can't be activated because their is no UI for the to accept the request.
* Applications can accept URL parameters (the Sender API documentation shows how to send them, but the whitelisting and Receiver API docs don't talk about it at all.) YouTube receives URL parameters using `"app_name":"YouTube","url":"https:\/\/www.youtube.com\/tv?${POST_DATA}"` and PlayMovies does so using `"PlayMovies","url":"https:\/\/play.google.com\/video\/avi\/eureka?${URL_ENCODED_POST_DATA}"`. It seems you have to register your app's URL with these included from the outset.
* HTML5 Audio and Video playback are both supported. (Tested with .mp4's)
* One workaround for the above limitation (if you registered a bare URL as your app) is to use the `onLaunch` listener in your sender to send a message as soon as your receiver has been activated.
