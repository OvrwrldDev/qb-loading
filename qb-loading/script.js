let progress = 0;
let tipIndex = 0;
const tips = [
  "Remember to follow server rules for the best RP experience.",
  "Use /help if you need assistance from staff.",
  "Stay in character at all times to enhance immersion.",
  "Check out our Discord for updates and events!"
];

const progressEl = document.getElementById("progress");
const pctEl = document.getElementById("pct");
const tipEl = document.getElementById("tip");
const audioEl = document.getElementById("bg-music");
const muteBtn = document.getElementById("muteBtn");
const volumeSlider = document.getElementById("volume");

function updateProgress() {
  if (progress < 100) {
    progress++;
    progressEl.style.width = progress + "%";
    pctEl.textContent = progress + "%";
  }
}
setInterval(updateProgress, 50);

function updateTip() {
  tipIndex = (tipIndex + 1) % tips.length;
  tipEl.textContent = tips[tipIndex];
}
setInterval(updateTip, 5000);
updateTip();

volumeSlider.addEventListener("input", () => {
  audioEl.volume = volumeSlider.value;
});

muteBtn.addEventListener("click", () => {
  audioEl.muted = !audioEl.muted;
  muteBtn.textContent = audioEl.muted ? "🔇" : "🔊";
});

document.addEventListener("click", () => {
  if (audioEl.paused) audioEl.play().catch(() => {});
}, { once: true });
