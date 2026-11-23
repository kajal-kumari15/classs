let count = 0;
const greeting = document.getElementById("greeting");
const counter = document.getElementById("counter");

document.getElementById("msgBtn").addEventListener("click", () => {
  greeting.textContent =
    greeting.textContent === "Namaste!"
      ? "Swagat Hai!"
      : "Namaste!";
});

document.getElementById("countBtn").addEventListener("click", () => {
  count += 1;
  counter.textContent = `Clicks: ${count}`;
});

document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
