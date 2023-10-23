// grabbibg startOrStopImg elements and audio elements and loop through them
var startOrStopImgs = document.querySelectorAll(".startOrStopImg");
var audios = document.querySelectorAll("audio");
for (var i = 0; i < startOrStopImgs.length; i++) {
  addAudioPlayPauseEvent(startOrStopImgs[i], audios[i]);
}

// function that takes startOrStopImg elements with corresponding audio elements and add the onclick event handler with the abilty to play and pause the audio and when another is clicked, the first one will stop and the second one will play and so on
function addAudioPlayPauseEvent(startOrStopImg, audio) {
  startOrStopImg.onclick = function () {
    if (audio.paused) {
      audio.play();
      for (var i = 0; i < audios.length; i++) {
        if (audios[i] != audio) audios[i].pause();
      }
    } else audio.pause();
    // audio starts playing at 22 seconds
    audio.currentTime = 22;
    audio.play();
  };
}

// allows the user to know which audio is playing
// when startOrStopImg is clicked add border 2px solid #D81E5B and when click on another one remove the border from the first one and add it to the second one and so on

startOrStopImgs.forEach((startOrStopImg) => {
  startOrStopImg.addEventListener("click", () => {
    startOrStopImgs.forEach((startOrStopImg) => {
      startOrStopImg.style.border = "none";
      startOrStopImg.style.paddingBottom = "0";
    });
    startOrStopImg.style.border = "5px solid #D81E5B";
  });
});

// remove the border when the audio is paused and add it when the audio is playing

audios.forEach((audio) => {
  audio.addEventListener("play", () => {
    audio.previousElementSibling.style.border = "5px solid #D81E5B";
  });
  audio.addEventListener("pause", () => {
    audio.previousElementSibling.style.border = "none";
  });
});
