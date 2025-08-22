const dialogues = [
  "Welcome to Fatima's portfolio.",
  "Here you will learn about her work, experience and her personality.",
  "We hope you enjoy your stay."
];
window.addEventListener("load", function () {
      setTimeout(() => {
        document.body.classList.add("loaded");
      }, 500); // Show wheel for 0.5s after load
    });
let dialogueIndex = 0;

function nextDialogue() {
  dialogueIndex++;

  if (dialogueIndex < dialogues.length) {
    document.getElementById("dialogue").innerHTML =
      `${dialogues[dialogueIndex]}<div class='signature'>- Sir Krabby</div>`;
  } else {
    document.querySelector(".dialogue-box").classList.add("fade-out");
    
  }
}

