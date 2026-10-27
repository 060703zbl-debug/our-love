// 恋爱开始日期：2026年7月3日
const startDate = new Date(2026, 6, 3);

function updateLoveDays() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const start = new Date(startDate);
  start.setHours(0, 0, 0, 0);

  const days = Math.floor((today - start) / (1000 * 60 * 60 * 24)) + 1;

  const counter = document.getElementById("daysTogether");
  if (counter) {
    counter.textContent = days > 0 ? days : 0;
  }

  const dateLabel = document.getElementById("startDateLabel");
  if (dateLabel) {
    dateLabel.textContent = "2026.07.03";
  }
}

updateLoveDays();
// 情书打开和收起
document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById("openLetter");
  const closeBtn = document.getElementById("closeLetter");
  const message = document.getElementById("letterMessage");
  const envelope = document.getElementById("envelope");

  if (openBtn && message) {
    openBtn.addEventListener("click", function () {
      message.hidden = false;
      if (envelope) envelope.classList.add("opened");
    });
  }

  if (closeBtn && message) {
    closeBtn.addEventListener("click", function () {
      message.hidden = true;
      if (envelope) envelope.classList.remove("opened");
    });
  }
});
