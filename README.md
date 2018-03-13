![logo](images/logo.png)
# README #

### Description ###
The **mgm Portal** is an office-to-office video gate that connectes two browser peers using webrtc technology.

![portal](docu/images/portal.jpg)

### Motivation ###
Even though we now have two offices in Da Nang, we would still like to be able to have an informal communication channel between both locations.
Basically we were inspired by the [office-to-office portal of Atlassian](https://www.atlassian.com/blog/archives/developer-lives-saved-with-portal-device).

### User Interaction ###
The user can press the enter button to mute/unmute the portal on both sides. If one side is muted/unmuted, the other side will also mute/unmute. In the future the enter button should be substituted by a single big button.

### Structure ###
![structure](docu/images/communicationDiagram.png)

### Software used ###
* HTML, CSS and JS for frontend
* Python and JS for scripts and simple servers
* SimpleWebrtc | [more info](https://simplewebrtc.com/)
* Signalmaster signaling server | [more info](https://github.com/andyet/signalmaster)


### Hardware used ##
* 2x Intel Nuc
* 2x Logitech webcam
* 2x 50" TV
* 2x Rode Videomicro microphone

### How do I get set up? ###

Requirements: NodeJS, Python

1 - Download files and place them in C:/startup/

2 - Install chromedriver v.2.31 | [link](https://chromedriver.storage.googleapis.com/index.html?path=2.31/)
    Observation: newer versions of Chrome will not work without changes because SSL encryption requirements are stricter.

3 - Install python and NodeJS dependencies

4 - Setup startup scripts to run on startup of the machine
    On Windows: press "windows key + r" and enter "shell:startup". Place the respective startup scripts in that folder:

* Office 1: should run [startupPortal.bat](https://bitbucket.org/mgmportal/mgm-portal/src/f11adc529ed5587c883fef9fdd83018c8a69c695/startupScripts/startupPortal.bat?at=master), [startupSignalingServer.bat](https://bitbucket.org/mgmportal/mgm-portal/src/f11adc529ed5587c883fef9fdd83018c8a69c695/startupScripts/startupSignalingServer.bat?at=master) and [startupStaticHttServer.bat](https://bitbucket.org/mgmportal/mgm-portal/src/f11adc529ed5587c883fef9fdd83018c8a69c695/startupScripts/startupStaticHttServer.bat?at=master)

* Office 2: should only run [startupPortal.bat](https://bitbucket.org/mgmportal/mgm-portal/src/f11adc529ed5587c883fef9fdd83018c8a69c695/startupScripts/startupPortal.bat?at=master)

After everything is setup the portal should be working automatically after the startup of the machiness.

### Configuration ###
It might be needed to configure:

* microphone
check the windows settings to get the best volume and check if the pc is using the right microphone and not the webcam mic
* webcam
can be adjusted by bending the metal support on the frame

### How to customise the look? ###
mgm Portal is a browser app and can be customised modifying the [CSS](https://bitbucket.org/mgmportal/mgm-portal/src/007fb67ef03d4589b914d3f953db351c3b464932/css/style.css?at=master), [JS](https://bitbucket.org/mgmportal/mgm-portal/src/007fb67ef03d4589b914d3f953db351c3b464932/js/main.js?at=master) and [HTML](https://bitbucket.org/mgmportal/mgm-portal/src/007fb67ef03d4589b914d3f953db351c3b464932/index.html?at=master&fileviewer=file-view-default)
files.


### Static IP Addresses ###
Each portal has a static IP Address assigned to it

* Office Pasteur: 172.31.249.19
* Office mgm2: 172.31.249.18

### The Frame ###
![Frame 1](docu/images/frame1.jpg)

These where the dimensions used to obtain the first frame
![Frame dimensions](docu/images/frame-dimensions.png)

These are the recommendations for the second frame (based on previous experience). Camera and microphone should be hidden inside the frame.
![Frame dimensions 2](docu/images/frame-dimensions2.png)

### Practical things we have learnt ###
* The portal should be located such that nobody is continuously being watched
* People do not automatically stay in the right position, so it's a good idea to mark where one should stand.
* The environment tends to be very noisy so we decided to use a directional microphone to eliminate some sound coming from the surroundings.

### What could be done to improve the system? ###
The portal is still not a real "plug and play" and needs some configuration.
Some things that could improve the portal:

* Put the servers into a docker container
* Resolve all issues regarding the SSL encryption. (Maybe get a trusted/not self-signed certificate?)
* Experiment with different hardware (e.g. higher resolution webcams)
* Be creative and experiment with new features (e.g. face recognition)

### Links to learn more about WebRTC ###
* [Real-time communication with WebRTC: Google I/O 2013](https://www.youtube.com/watch?v=p2HzZkd2A40)
* [WebRTC in the real world: STUN, TURN and signaling](https://www.html5rocks.com/en/tutorials/webrtc/infrastructure/)

### Who do I talk to? ###

* Lê Hồng Phước ( | mgm Da Nang )
* Marcello Schreiber (marcello.schreiber@hotmail.com | mgm Da Nang intern 28.08.2017 - 22.09.2017)
