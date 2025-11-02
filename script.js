// Tüm düğmeleri dinle
document.querySelectorAll(".drum").forEach((button) => {
  button.addEventListener("click", function () {
    let key = this.getAttribute("data-key");
    playSound(key);
    buttonAnimation(key);
  });
});

// Klavye ile çalma
document.addEventListener("keydown", function (event) {
  playSound(event.key);
  buttonAnimation(event.key);
});

// Sesleri çalma fonksiyonu
function playSound(key) {
  let sound;

  switch (key) {
    case "w":
      sound = new Audio("sounds/boom.wav");
      break;
    case "a":
      sound = new Audio("sounds/clap.wav");
      break;
    case "s":
      sound = new Audio("sounds/hihat.wav");
      break;
    case "d":
      sound = new Audio("sounds/kick.wav");
      break;
    case "j":
      sound = new Audio("sounds/openhat.wav");
      break;
    case "k":
      sound = new Audio("sounds/ride.wav");
      break;
    case "k":
      sound = new Audio("sounds/tink.wav");
      break;
    case "k":
      sound = new Audio("sounds/tom.wav");
      break;
    case "l":
      sound = new Audio("sounds/snare.wav");
      break;
    default:
      return;
  }

  sound.play();
}

// Görsel animasyon
function buttonAnimation(currentKey) {
  let activeButton = document.querySelector(`.drum[data-key="${currentKey}"]`);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(() => activeButton.classList.remove("pressed"), 100);
  }
}
