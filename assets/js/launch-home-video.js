const player = new Plyr("#player", {
  autoplay: true,
  //hide controls
  controls: [],
  //dont allow user to pause
  disableContextMenu: true,
  clickToPlay: false,
  tooltips: {
    controls: false,
  },
  //loop
  loop: {
    active: true,
  },
});

player.on("ready", () => {
  player.play();
  //add ready class to element
});

setTimeout(() => {
  document.querySelector(".main-video").classList.add("main-video--ready");
}, 4500);

setTimeout(() => {
  document.querySelector(".main-video").classList.add("main-video--loaded");
}, 1500);
