var receiver = new cast.receiver.Receiver(
    APP_CONFIG.CHROMECAST_APP_ID,
    ['Test'],
    "",
    5
);

var is_fullscreen = false;

function onMessage(event) {	
    var input = $("#test-input");
    
    var char = String.fromCharCode(event.message.keycode);

    console.log('Received:', char);

    input.val(input.val() + char);
}

function toggleFullScreen() {
    // NOT USABLE ON CHROMECAST
    if (is_fullscreen) {
        document.webkitCancelFullScreen();
    } else {
        console.log($("video")[0]);
        $("video")[0].webkitRequestFullScreen();
    }

    is_fullscreen = !is_fullscreen;
}

var channelHandler = new cast.receiver.ChannelHandler('Test');

channelHandler.addChannelFactory(receiver.createChannelFactory('Test'));

receiver.start();

//listen for messages from chromecast-sender
channelHandler.addEventListener(cast.receiver.Channel.EventType.MESSAGE, onMessage.bind(this));   	

$(function() {
    $("video")[0].play();
    //toggleFullScreen();
});
