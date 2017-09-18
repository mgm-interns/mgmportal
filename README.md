![logo](images/logo.png)
# README #

### Description ###
The **mgm Portal** is an office-to-office video gate that connectes two browser peers using webrtc technology.

### Motivation ###
Even though we now have two offices in Da Nang, we would still like to be able to have an informal communication channel between both locations.

### Structure ###
![structure](docu/images/communicationDiagram.png)

### Software used ###
* HTML, CSS and JS for frontend
* Python and JS for scripts and simple servers
* SimpleWebrtc | [more info](https://simplewebrtc.com/)
* Signalmaster signaling server | [more info](https://github.com/andyet/signalmaster)
*


### Hardware used ##
* 2x Intel Nuc
* 2x Logitech webcam
* 2x 50" TV

### How do I get set up? ###
1 - Generate ssl Certificates
[run script]

2 - Install chromedriver v.2.31 | [link](https://chromedriver.storage.googleapis.com/index.html?path=2.31/)
    Observation: newer versions of Chrome will not work without changes because SSL encryption requirements are stricter.

3 - Install python dependencies

4 - Node.js and modules should be installed

5 - Setup startup scripts to run on startup of the machine
    Office 1: should run [startupPortal.py](https://bitbucket.org/mgmportal/mgm-portal/src/16a4c9304311d2815b4b9b2e331c235f9001f0fe/startupScripts/startupPortal.py?at=master) and [startupServers.bat](https://bitbucket.org/mgmportal/mgm-portal/src/16a4c9304311d2815b4b9b2e331c235f9001f0fe/startupScripts/startupServers.bat?at=master)
    Office 2: should only run [startupPortal.py]()https://bitbucket.org/mgmportal/mgm-portal/src/16a4c9304311d2815b4b9b2e331c235f9001f0fe/startupScripts/startupPortal.py?at=master 


### How to customise the look? ###
mgm Portal is a browser app and can be customised modifying the [style](https://bitbucket.org/mgmportal/mgm-portal/src/007fb67ef03d4589b914d3f953db351c3b464932/css/style.css?at=master), [JS](https://bitbucket.org/mgmportal/mgm-portal/src/007fb67ef03d4589b914d3f953db351c3b464932/js/main.js?at=master) and [HTML](https://bitbucket.org/mgmportal/mgm-portal/src/007fb67ef03d4589b914d3f953db351c3b464932/index.html?at=master&fileviewer=file-view-default)
files.

### Links to learn more about WebRTC ###
* [Real-time communication with WebRTC: Google I/O 2013](https://www.youtube.com/watch?v=p2HzZkd2A40)
* [WebRTC in the real world: STUN, TURN and signaling](https://www.html5rocks.com/en/tutorials/webrtc/infrastructure/)

### Practical things we have learnt ###
* The portal should be located such that nobody is continuously being watched
*


### Who do I talk to? ###
Marcello Schreiber (mgm Da Nang intern 28.08.2017 - 22.09.2017)
