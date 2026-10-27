```javascript
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

// 情书打开和收起
function setupLetter() {
  const openBtn = document.getElementById("openLetter");
  const closeBtn = document.getElementById("closeLetter");
  const message = document.getElementById("letterMessage");
  const envelope = document.getElementById("envelope");

  if (openBtn && message && !openBtn.dataset.bound) {
    openBtn.dataset.bound = "true";
    openBtn.addEventListener("click", function () {
      message.hidden = false;
      if (envelope) envelope.classList.add("opened");
    });
  }

  if (closeBtn && message && !closeBtn.dataset.bound) {
    closeBtn.dataset.bound = "true";
    closeBtn.addEventListener("click", function () {
      message.hidden = true;
      if (envelope) envelope.classList.remove("opened");
    });
  }
}

function initPage() {
  updateLoveDays();
  setupLetter();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPage);
} else {
  initPage();
}
```
