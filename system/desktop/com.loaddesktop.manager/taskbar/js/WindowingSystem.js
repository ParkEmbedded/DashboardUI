
function OpenTerminalWindow() {
  new WinBox({
    // url: "com.systemapplicationsmenu.manager/ROOT/", // load the terminal page
    resize: false,    
    fullscreen: true,
    close: true,
    html: "<p> Sorry, your Linux terminal can not be loaded...</p>",
    minimize: true,
    maximize: true,
    modal: false,
    max: true,
    min: true,
    hidden: false,
    x: 0,
    y: 0,

    // dimension:
    minwidth: 800,
    minheight: 800,
    maxheight: 1920,
    maxwidth: 1080,
    autosize: false,
});
}
//END OF CORE SYSTEM APPLICATIONS