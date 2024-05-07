// function VatAdder(Actualprice, vat) {
//   let productVat = (Actualprice / 100) * vat;
//   let PriceWithVat = Actualprice + productVat;
//   return PriceWithVat;
// }

// function DiscountAdder(PriceWithVat, Discount) {
//   let DiscountAmount = (PriceWithVat * Discount) / 100;
//   let FinalPrice = PriceWithVat - DiscountAmount;
//   return FinalPrice;
// }

// function Memo(Actualprice, VatPrice, FinalPrice) {
//   console.log(
//     `
//     Actual Price : ${Actualprice}
//     ------------------------------
//     Vat Price : ${VatPrice}
//     ------------------------------
//     Final Price : ${FinalPrice}
//     ------------------------------

//     `
//   );
// }

// let Actualprice = +prompt("Enter the Price :");
// let DiscountCut = +prompt("Enter the Discount % :");
// if (!Actualprice || !DiscountCut) {
//   alert("Giving wrong info");
// } else {
//   let vatInfo = VatAdder(Actualprice, 10);
//   let DiscountInfo = DiscountAdder(vatInfo, 5);
//   Memo(Actualprice, vatInfo, DiscountInfo);
// }

// let arr2 = [
//   "pronoy",
//   "mearn",
//   123,
//   "opp",
//   true,
//   "pronoy",
//   "mearn",
//   123,
//   "opp",
//   true,
//   "pronoy",
//   "mearn",
//   123,
//   "opp",
// ];

// console.log(arr2);
// let arr3 = ["bd", "aus", "eng", "sri"];
// arr3.copyWithin(1, 3);

// console.log(arr3);

// let newarr2 = ["pronoy", "mern2307", "abir", "naim", "bangladesh", "python"];

// newarr2.copyWithin(2, 3, 5);

// console.log(newarr2);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits.slice(1, 3));

// const jog = (num1, num2) => {
//   return num1 + num2;
// };

// const subtraction = (num1, num2) => {
//   return num1 - num2;
// };

// const multiply = (num1, num2) => {
//   return num1 * num2;
// };

// const division = (num1, num2) => {
//   return num1 / num2;
// };

// const expo = (num1, num2) => {
//   return num1 ** num2;
// };

// const modulus = (num1, num2) => {
//   return num1 % num2;
// };

// const allfunction = [jog, subtraction, multiply, division, expo, modulus];

// let input1 = +prompt("Enter the first");

// let input2 = +prompt("Enter the second");

// for (i = 0; i < allfunction.length; i++) {
//   let result = allfunction[i](input1, input2);
//   console.log(result);
// }
//================= picture part===============================
const logodiv = document.createElement("div");
const picture = document.createElement("picture");
const img = document.createElement("img");

img.setAttribute("src", "./images/Finsweet white logo 1.png");
picture.appendChild(img);

logodiv.setAttribute("class", "logo");
logodiv.appendChild(picture);

logodiv.style.padding = "32px 0px";

//================= picture part===============================

//================= list part===============================

const menudiv = document.createElement("div");

const ul = document.createElement("ul");
const firstli = document.createElement("li");
const secondli = document.createElement("li");
const thirdli = document.createElement("li");
const fourthli = document.createElement("li");
const fifthli = document.createElement("li");
const sixthli = document.createElement("li");
const firsta = document.createElement("a");
const seconda = document.createElement("a");
const thirda = document.createElement("a");
const fourtha = document.createElement("a");
const fiftha = document.createElement("a");
const sixtha = document.createElement("a");

firsta.innerText = "Home";
seconda.innerText = "About us";
thirda.innerText = "Features";
fourtha.innerText = "Pricing";
fiftha.innerText = "FAQ";
sixtha.innerText = "Blog";

firsta.setAttribute("href", "#");
firstli.appendChild(firsta);
seconda.setAttribute("href", "#");
secondli.appendChild(seconda);
thirda.setAttribute("href", "#");
thirdli.appendChild(thirda);
fourtha.setAttribute("href", "#");
fourthli.appendChild(fourtha);
fiftha.setAttribute("href", "#");
fifthli.appendChild(fiftha);
sixtha.setAttribute("href", "#");
sixthli.appendChild(sixtha);

firsta.style.color = "white";
firsta.style.fontSize = "16px";
firsta.style.fontWeight = "500";
firsta.style.fontFamily = "'Poppins', sans-serif";
firsta.style.textDecoration = "none";

seconda.style.color = "white";
seconda.style.fontSize = "16px";
seconda.style.fontWeight = "500";
seconda.style.fontFamily = "'Poppins', sans-serif";
seconda.style.textDecoration = "none";

thirda.style.color = "white";
thirda.style.fontSize = "16px";
thirda.style.fontWeight = "500";
thirda.style.fontFamily = "'Poppins', sans-serif";
thirda.style.textDecoration = "none";

fourtha.style.color = "white";
fourtha.style.fontSize = "16px";
fourtha.style.fontWeight = "500";
fourtha.style.fontFamily = "'Poppins', sans-serif";
fourtha.style.textDecoration = "none";

fiftha.style.color = "white";
fiftha.style.fontSize = "16px";
fiftha.style.fontWeight = "500";
fiftha.style.fontFamily = "'Poppins', sans-serif";
fiftha.style.textDecoration = "none";

sixtha.style.color = "white";
sixtha.style.fontSize = "16px";
sixtha.style.fontWeight = "500";
sixtha.style.fontFamily = "'Poppins', sans-serif";
sixtha.style.textDecoration = "none";

ul.appendChild(firstli);
ul.appendChild(secondli);
ul.appendChild(thirdli);
ul.appendChild(fourthli);
ul.appendChild(fifthli);
ul.appendChild(sixthli);

ul.style.display = "flex";
ul.style.columnGap = "32px";
ul.style.padding = "32px 0px";
ul.style.listStyle = "none";

menudiv.setAttribute("class", "menu_item");

menudiv.appendChild(ul);

//================= list part===============================

//================= btn part===============================

const btndiv = document.createElement("div");
const btn = document.createElement("button");

btndiv.setAttribute("class", "btn");
btn.innerText = "Contact us";

btndiv.appendChild(btn);

btndiv.style.padding = "32px 0px";
btn.style.border = "none";
btn.style.color = "#ffff";
btn.style.width = "185px";
btn.style.height = "60px";
btn.style.borderRadius = "41px";
btn.style.border = " 2px solid rgba(244, 246, 252, 0.20)";
btn.style.background = "transparent";
btn.style.fontFamily = "'Poppins', sans-serif";

//================= btn part===============================

//================= mainMenu part===============================

const mainMenudiv = document.createElement("div");

mainMenudiv.setAttribute("class", "mainMenu");

mainMenudiv.appendChild(logodiv);

mainMenudiv.appendChild(menudiv);

mainMenudiv.appendChild(btndiv);

mainMenudiv.style.display = "flex";
mainMenudiv.style.justifyContent = "space-between";
mainMenudiv.style.alignItems = "space-center";

//================= mainMenu part===============================

//================= container part===============================

const containerDiv = document.createElement("div");

containerDiv.setAttribute("class", "container");

containerDiv.style.width = "1285px";
containerDiv.style.margin = "auto";

containerDiv.appendChild(mainMenudiv);

//================= container part===============================

//================= nav part===============================
const nav = document.createElement("nav");
nav.setAttribute("id", "navbar_start");

nav.appendChild(containerDiv);

nav.style.backgroundColor = "#1C1E53";

//================= nav part===============================

//================= body part===============================

const body = document.querySelector("body");

body.appendChild(nav);

console.log(nav);

//================= body part===============================

// let containerStyle = document.querySelector("container");

// containerStyle.forEach(element => {

// });
