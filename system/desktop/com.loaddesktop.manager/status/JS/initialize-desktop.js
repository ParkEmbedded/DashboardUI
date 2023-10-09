function loadDesktopEnvironment() {
    
    $( "#runner-in-con" ).load( "./desktop-main.html", function() {
    });
    $( "#runner-in-taskbar" ).load( "./com.loaddesktop.manager/taskbar/taskbar-frame.html", function() {
    });
    $( "#runner-in-menu" ).load( "./com.loaddesktop.manager/startscreen/start-menu-frame.html", function() {
         
    });
    console.log( "Desktop Environment has been loaded, you can now use your system!" );
}