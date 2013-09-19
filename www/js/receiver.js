var receiver = new cast.receiver.Receiver(
    'YOUR APP ID HERE',
    ['Test'],
    "",
    5
);

function onMessage(event) {	
    var e = jQuery.Event("keypress");		
    e.which = event.message.keycode;

    $("#test-input").trigger(e);
}

var channel_handler = new cast.receiver.ChannelHandler('Test');

channelHandler.addChannelFactory(receiver.createChannelFactory('Test'));

receiver.start();

//listen for messages from chromecast-sender
channelHandler.addEventListener(cast.receiver.Channel.EventType.MESSAGE, onMessage.bind(this));   	
