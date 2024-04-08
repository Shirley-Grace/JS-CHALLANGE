const redColor = document.querySelector(".red");
const redColor1 = document.querySelector(".red1");
const redColor2 = document.querySelector(".red2");

const blackColor = document.querySelector(".black");
const blackColor1 = document.querySelector(".black1");
const blackColor2 = document.querySelector(".black2");

const grayColor = document.getElementsByClassName("gray");
const grayColor1 = document.getElementsByClassName("gray1");
const grayColor2 = document.getElementsByClassName("gray2");

const imageCard = document.querySelector(".product-image");
const imageCard1 = document.querySelector(".product-image1");
const imageCard2 = document.querySelector(".product-image2");

const feedbackBtn = document.querySelector(".feedback");
const feedbackBtn1 = document.querySelector(".feedback1");
const feedbackBtn2 = document.querySelector(".feedback2");

const cartButton = document.getElementById("button");
const cartButton1 = document.getElementById("button1");
const cartButton2 = document.getElementById("button2");

const itemTag = document.getElementsByTagName("h3")[0];
const itemTag1 = document.getElementsByTagName("h3")[1];
const itemTag2 = document.getElementsByTagName("h3")[2];

const logo = document.getElementById("logo");
const logo1 = document.getElementById("logo1");
const logo2 = document.getElementById("logo2");

redColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = 'url("pics/red-benz.jpg")';
    logo.style.display = "none";

});
redColor1.addEventListener("click", function () {
    cartButton1.style.backgroundColor = "red";
    itemTag1.style.backgroundColor = "red";
    imageCard1.style.backgroundImage = 'url("pics/beetlered.jpg")';
    logo1.style.display = "none";


});
redColor2.addEventListener("click", function () {
    cartButton2.style.backgroundColor = "red";
    itemTag2.style.backgroundColor = "red";
    imageCard2.style.backgroundImage = 'url("pics/red q3.jpg")';
    logo2.style.display = "none";


});

grayColor[0].addEventListener("click", function () {
    cartButton.style.backgroundColor = "gray";
    itemTag.style.backgroundColor = "gray";
    imageCard.style.backgroundImage = 'url("pics/grey-benz.jpg")';
    logo.style.display = "none";

});
grayColor1[0].addEventListener("click", function () {
    cartButton1.style.backgroundColor = "gray";
    itemTag1.style.backgroundColor = "gray";
    imageCard1.style.backgroundImage = 'url("pics/greyvw.jpg")';
    logo1.style.display = "none";

});
grayColor2[0].addEventListener("click", function () {
    cartButton2.style.backgroundColor = "gray";
    itemTag2.style.backgroundColor = "gray";
    imageCard2.style.backgroundImage = 'url("pics/audi q3.jpg")';
    logo2.style.display = "none";

});

blackColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "black";
    itemTag.style.backgroundColor = "black";
    imageCard.style.backgroundImage = 'url("pics/black-benz.jpg")';
    logo.style.display = "none";

});
blackColor1.addEventListener("click", function () {
    cartButton1.style.backgroundColor = "black";
    itemTag1.style.backgroundColor = "black";
    imageCard1.style.backgroundImage = 'url("pics/beetleblack.jpg")';
    logo1.style.display = "none";

});
blackColor2.addEventListener("click", function () {
    cartButton2.style.backgroundColor = "black";
    itemTag2.style.backgroundColor = "black";
    imageCard2.style.backgroundImage = 'url("pics/blackq3.jpg")';
    logo2.style.display = "none";

});


const cart = () => {
    cartButton.style.display = "none";
    feedbackBtn.style.display = "block";
};
cartButton.addEventListener("click", cart);


const feedback = () => {
    cartButton.style.display = "block";
    feedbackBtn.style.display = "none";
};
feedbackBtn.addEventListener("click", feedback);


const cart1 = () => {
    cartButton1.style.display = "none";
    feedbackBtn1.style.display = "block";
};
cartButton1.addEventListener("click", cart);


const feedback1 = () => {
    cartButton1.style.display = "block";
    feedbackBtn1.style.display = "none";
};
feedbackBtn1.addEventListener("click", feedback);


const cart2 = () => {
    cartButton2.style.display = "none";
    feedbackBtn2.style.display = "block";
};
cartButton2.addEventListener("click", cart);


const feedback2 = () => {
    cartButton2.style.display = "block";
    feedbackBtn2.style.display = "none";
};
feedbackBtn2.addEventListener("click", feedback);



