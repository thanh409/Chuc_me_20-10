const envelope = document.querySelector("#envelope");
const envelopeScene = document.querySelector(".envelope-scene");
const openButton = document.querySelector("#openButton");

function launchConfetti() {
  if (typeof window.confetti !== "function") {
    return;
  }

  window.confetti({
    particleCount: 150,
    spread: 105,
    startVelocity: 35,
    origin: { y: 0.62 },
    colors: ["#d95d87", "#f5b5ca", "#ffd166", "#9f315b", "#ffffff"]
  });

  if (typeof window.confetti.shapeFromText === "function") {
    const flowerShape = window.confetti.shapeFromText({
      text: "🌸",
      scalar: 1.8
    });

    window.confetti({
      particleCount: 24,
      spread: 120,
      startVelocity: 26,
      scalar: 1.15,
      shapes: [flowerShape],
      origin: { y: 0.58 }
    });
  }
}

function openLetter() {
  if (envelope.classList.contains("is-open")) {
    return;
  }

  envelope.classList.add("is-open");
  envelopeScene.classList.add("is-open");
  document.body.classList.add("is-letter-open");
  openButton.setAttribute("aria-expanded", "true");
  window.setTimeout(launchConfetti, 760);
}

openButton.addEventListener("click", openLetter);