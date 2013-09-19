var receiver = new cast.receiver.Receiver(
    'YOUR APP ID HERE',
    ['Test'],
    "",
    5
);

function onMessage(event) {	
    var e = jQuery.Event("keyup");		
    e.which = event.message.keycode;

    $(document).trigger(e);
}

var channel_handler = new cast.receiver.ChannelHandler('Test');

channelHandler.addChannelFactory(receiver.createChannelFactory('Test'));

receiver.start();

//listen for messages from chromecast-sender
channelHandler.addEventListener(cast.receiver.Channel.EventType.MESSAGE, onMessage.bind(this));   	

$("#test-input").focus();
