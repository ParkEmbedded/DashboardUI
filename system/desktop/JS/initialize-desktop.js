// core applications will be loaded here.

function loadOperatingEnvironment() {
    
    $( "#runner-in-con" ).load( "./desktop-main.html", function() {
    });

    $( "#runner-in-status" ).load( "./com.loaddesktop.manager/status/embedded-status.html", function() {
    });


    $( "#runner-in-taskbar" ).load( "./com.loaddesktop.manager/taskbar/taskbar-frame.html", function() {
    });

    console.log( "Operating Environment has been loaded, you can now use your system!" );
}
