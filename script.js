const name = localStorage.getItem("valName") || "my love";
const textEl = document.getElementById("letterText");

const letter = `
to you, ♡
happy valentine’s day.
i just want you to know
that loving you feels soft,
warm, and safe.
thank you for being here,
for staying, for choosing me.
stay with me, always 💗

— Sean Iseryn
`;

let i = 0;
function typeText() {
  if (i < letter.length) {
    textEl.innerHTML += letter.charAt(i);
    i++;
    setTimeout(typeText, 45);
  }
}
typeText();

/* 🎀 RIBBONS */
const box = document.querySelector(".ribbons");

setInterval(() => {
  const r = document.createElement("span");
  r.className = "ribbon";
  r.textContent = ["🎀", "💗", "🌸"][Math.floor(Math.random() * 3)];
  r.style.left = Math.random() * 100 + "vw";
  r.style.animationDuration = Math.random() * 4 + 6 + "s";
  box.appendChild(r);
  setTimeout(() => r.remove(), 10000);
}, 600);