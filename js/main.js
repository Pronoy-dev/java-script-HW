const body = document.body;
const colorBtn = document.querySelector(".colorBtn");
const output = document.querySelector(".output");
const copyIcon = document.querySelector(".copyIcon");
const copyDone = document.querySelector(".copyDone");
const heading = document.querySelector(".heading");

colorBtn.addEventListener("click", () => {
  heading.innerHTML = "Generate color code";
  copyDone.style.display = "none";
  copyIcon.style.display = "block";

  const colorCode = GenerateColor();
  body.style.background = colorCode;
  output.value = colorCode;

  copyIcon.addEventListener("click", () => {
    copyColorCode(colorCode);
  });
});

// === color code generate
function GenerateColor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
}

// ====== copy function

function copyColorCode(colorCode) {
  navigator.clipboard.writeText(colorCode);
  copyIcon.style.display = "none";
  copyDone.style.display = "block";
  heading.innerHTML = `Copy done ${colorCode}`;
}

// color work done
