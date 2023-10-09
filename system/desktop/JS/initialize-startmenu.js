function loadStartMenuHeaders() {
    $( "#in-menu-on-deesktop" ).load( "./start-menu-frame.html", function() {
    });
    console.log( "Desktop Environment has been loaded, you can now use your system!" );
}