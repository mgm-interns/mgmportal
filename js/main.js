var webrtc = new SimpleWebRTC({
  // the id/element dom element that will hold "our" video
  localVideoEl: 'localVideo',
  // the id/element dom element that will hold remote videos
  remoteVideosEl: '',
  // immediately ask for camera access
  autoRequestMedia: true,


  // =================== REMOVE THIS IF YOU WANT TO USE THE DEFAULT SANDBOX SIGNALING SERVER ===================
  // signaling server
  socketio: {
    path: "/socket.io",
    host: "172.31.240.19",
    port:"8888",
    hosetname: "signal-master",
    url: "https://172.31.240.19:8888"
  },
  url: "https://172.31.240.19:8888"

  // ==========================================================================================================

});
var stateOpen = false;

// we have to wait until it's ready
webrtc.on('readyToCall', function () {
  // you can name it anything
  webrtc.joinRoom('123');
  webrtc.mute();
});


// a peer video has been added
webrtc.on('videoAdded', function (video, peer) {
  console.log('video added', peer);
  var remotes = document.getElementById('remotes');
  if (remotes) {
    if(remotes.getElementsByClassName("videoContainer").length < 1){
      var container = document.createElement('div');
      container.className = 'videoContainer';
      //container.id = 'container_' + webrtc.getDomId(peer);
      container.id = 'container_' + webrtc.getDomId(peer);
      container.appendChild(video);

      // suppress contextmenu
      video.oncontextmenu = function () { return false; };

      remotes.appendChild(container);
    } else {

      console.log("room full");

      // shoudl save video in an array and allow to swicht between views


    }
  }

  // a peer video was removed
  webrtc.on('videoRemoved', function (video, peer) {
      console.log('video removed ', peer);
      var remotes = document.getElementById('remotes');
      var el = document.getElementById(peer ? 'container_' + webrtc.getDomId(peer) : 'localScreenContainer');
      if (remotes && el) {
          remotes.removeChild(el);
      }
  });
});




function connect(){
  if(!stateOpen){
    playOpenAudio();
    stateOpen = true;
    document.getElementById("mutedIcon").style.visibility = "hidden";
    document.getElementById("enterP").style.color = "#a6a6a6";
    webrtc.unmute();
    console.log("Window is open! What's up?");
  }
}

function disconnect(){
  if(stateOpen){
    playCloseAudio();
    stateOpen = false;
    document.getElementById("mutedIcon").style.visibility = "visible";
    document.getElementById("enterP").style.color = "#1972b5";
    webrtc.mute();
    console.log("Window is closed! I cannot here you.");
  }
}

// listen for mute and unmute events
webrtc.on('mute', function (data) { // show muted symbol
    if(stateOpen){
      disconnect();
    }
});
webrtc.on('unmute', function (data) { // hide muted symbol
    if(!stateOpen){
      connect();
    }
});

var activeListener = true;
document.addEventListener('keyup', function(event) {
    if(event.keyCode == 13) {
      if(activeListener){

          activeListener = false;
          if(stateOpen){
            disconnect();
          } else {
            connect();
          }

          setTimeout(()=> {
            activeListener= true;
          }, 1100)
      }
    }
});


function playOpenAudio(){
  var openAudio = document.getElementById("openAudio");
  console.log("playing open audio");
  openAudio.play();
}

function playCloseAudio(){
  var closeAudio = document.getElementById("closeAudio");
  console.log("playing close audio");
  closeAudio.play();
}
