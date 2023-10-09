// compile everything within the "system" folder. 
const {BrowserWindow, app} = require('electron');
const path = require('path');
const url = require('url');
const x11 = require('x11');
const { shell } = require('electron')

let win = null // Create WindowManager

var Exposure = x11.eventMask.Exposure;
var PointerMotion = x11.eventMask.PointerMotion;


x11.createClient(function(err, display) {
  if (!err) {
    X = display.client;
    var root = display.screen[0].root;
    var wid = X.AllocID();
    X.CreateWindow(
      wid,
      root, // new window id, parent
      0,
      0,
      1920,
      1080, // x, y, w, h
      0,
      0,
      0,
      0, // border, depth, class, visual
      { eventMask: Exposure | PointerMotion } // other parameters
    );

  }
});
    function createWindowManagerEnvironment() {
      win = new BrowserWindow({
        fullscreen: true,
        kiosk: true,
        maxWidth: 1920, //maximum width and height sizing
        maxHeight: 1080,
        minHeight: 400,
        minWidth: 400,
        title: "Park Embedded (running in DEV mode)",
        icon: "system/electron/defaultQuestbook.png",
        frame: false,
        x: 0,
        y: 0,
        webPreferences: { 
          experimentalFeatures: false, 
          sandbox: false,
        }
      })

      win.setPosition(0, 0);
      win.center();
    

      win.loadURL(url.format({
        pathname: path.join(__dirname, 'system/desktop/main-frame.html'),
        protocol: 'file:',
        slashes: true
      }));
      console.log("Environment started, please wait...");
  

    }
    app.on('ready', createWindowManagerEnvironment);