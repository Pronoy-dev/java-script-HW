const allImg = [...document.querySelectorAll(".image")];
const popUp = document.querySelector(".popUp");
const closeBtn = document.querySelector(".close-btn");
const bigImg = document.querySelector(".big_img");

allImg.map((singleImg) => {
  singleImg.addEventListener("click", (event) => {
    imgChanger(event.target.src);
    popUp.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  popUp.classList.remove("active");
});

function imgChanger(ImgUrl) {
  bigImgUrl = ImgUrl.split("/").splice(9).join("/");
  bigImg.src = bigImgUrl;
}
