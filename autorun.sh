### NODE GnomeToolKit + GnomeDevelopmentKit for developer mode ### 

### Warning before installation ### 

echo "Warning: You are running in Development mode. THIS MAY TAKE MORE THAN FIVE MINUTES: Installing GTK and depenencies..."
echo " "
echo " "
sleep 3s

### Install & make required packages

npm install electron
npm install path
npm install url
npm install x11
npm install fs

### After installing NPM packages (for Debian).
## apt-get install libwebkit2gtk-4.0

## sudo mkdir ~/.config/openbox/
## sudo mv autostart ~/.config/openbox
## cd openbox && sudo mv openbox.desktop /usr/share/xsessions

### Post installation

echo "Successfully installed! You can now use Park Embedded 8.92.0! "
sleep 2s
## gnome-session-quit
