# What is DashboardUI?

DashboardUI is a Electron based operating environment for embedded devices (such as RPI, Arduino and more), it functions like a normal desktop environment. However, it is designed to run web applications on top of the environment for Kiosks, POS Systems or Registers.

## Requirements to run the Desktop Environment:
- Debian / Ubuntu based distro
- At least 2GB of free system memory (if running on XFCE / Window Manger).

If you are a developer / tester and want to try it out, building "PDE" is simple, in your terminal; type ```sudo chmod +x ./autorun.sh && ./autorun.sh``` to start the installation, this will also install NODE & NPM as well as other depenencies.

Once the installer is done, type ``npm start .`` and you should see ```Environment started, please wait...``` and that is it! You have sucessfully ran the DE! If you have feedback to give me, please let me know.
