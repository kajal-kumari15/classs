let count = 0;
const greeting = document.getElementById("greeting");
const counter = document.getElementById("counter");
const msgBtn = document.getElementById("msgBtn");
const countBtn = document.getElementById("countBtn");
const themeBtn = document.getElementById("themeBtn");

if (msgBtn && greeting) {
  msgBtn.addEventListener("click", () => {
    greeting.textContent =
      greeting.textContent === "Namaste!"
        ? "Swagat Hai!"
        : "Namaste!";
  });
}

if (countBtn && counter) {
  countBtn.addEventListener("click", () => {
    count += 1;
    counter.textContent = `Clicks: ${count}`;
  });
}

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}
