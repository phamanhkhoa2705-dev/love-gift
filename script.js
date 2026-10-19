
const openButton = document.getElementById("openButton");
const letter = document.getElementById("letter");
const stars = document.getElementById("stars");

// Mở lá thư khi bấm nút
openButton.addEventListener("click", () => {
  letter.hidden = false;
  openButton.textContent = "❤️ Món quà dành cho bạn";
  openButton.disabled = true;
});

// Tạo các trái tim bay lên
function createHeart() {
  const heart = document.createElement("span");

  heart.className = "sparkle";
  heart.textContent = Math.random() > 0.5 ? "♥" : "♡";

  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = (12 + Math.random() * 22) + "px";
  heart.style.animationDuration = (5 + Math.random() * 5) + "s";

  stars.appendChild(heart);

  heart.addEventListener("animationend", () => {
    heart.remove();
  });
}

setInterval(createHeart, 450);

// Đếm số ngày kể từ ngày bắt đầu quen nhau.
// Đổi ngày bên dưới theo ngày của bạn.
const anniversary = new Date(2026, 7, 28);
const today = new Date();

anniversary.setHours(0, 0, 0, 0);
today.setHours(0, 0, 0, 0);

const difference = Math.floor(
  (today.getTime() - anniversary.getTime()) /
  (1000 * 60 * 60 * 24)
);

document.getElementById("days").textContent =
  difference >= 0 ? difference.toLocaleString("vi-VN") : "0";
