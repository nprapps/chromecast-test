var cast_api;
var cast_activity;

function initializeApi() {
    cast_api = new cast.Api();
    
    //could not get a receiver to popup in the receiverList using my APP ID to using "YouTube" works just fine
    cast_api.addReceiverListener("YouTube", onReceiverList);
};

function onReceiverList(list) {
    if(list.length > 0) {
        doLaunch(list[0]);
    }
}

function doLaunch(receiver) {
    var request = new cast.LaunchRequest("YOUR APP ID HERE", receiver);
    cast_api.launch(request, onLaunch);
};

function onLaunch(activity) {
    if (activity.status == "running") {
        console.log("running");
        cast_activity = activity;
    } else if (activity.status == "error") {
        cast_activity = null;
        console.log("error");
    }
};

function keyup(event) {
    var keycode = (event.keycode ? event.keyCode : event.which);  
    cast_api.sendMessage(cast_activity.activityId, "Test", { "type": "keyup", "keycode":keycode })
}

$(function() {
    // Wait for API to post a message to us
    window.addEventListener("message", function(event) {
        if (event.source == window && event.data && 
            event.data.source == "CastApi" &&
            event.data.event == "Hello")
            
            initializeApi();

            $(document).on('keyup', keyup);
    });

});
