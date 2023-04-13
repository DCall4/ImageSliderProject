import './style.css';

const pics = document.querySelectorAll(".pic");
const dots = document.querySelectorAll(".dot");
let slideShow;

function getCurrentPicNumber() {
    for (let i = 1; i <= 4; i++) {
        let pic = document.getElementById("pic" + i);
        let leftCssString = getComputedStyle(pic).getPropertyValue("left");
        if (leftCssString == "0px") {
            return i;
        }
    }
};

function displayPic(newNum) {
    if (newNum < 1 || newNum > 4) return;
    const distance = newNum - getCurrentPicNumber();
    for (let i = 1; i <= 4; i++) {
        let pic = document.getElementById("pic" + i);
        let leftCssString = getComputedStyle(pic).getPropertyValue("left");
        let leftCssNum = Number(leftCssString.slice(0, leftCssString.length - 2));
        pic.style.left = leftCssNum - distance * 1000 + "px";
    }
    document.getElementById("dot" + newNum).checked = true;
};

function moveLeft() {
    const currentPicNumber = getCurrentPicNumber();
    if (currentPicNumber > 1) {
        displayPic(currentPicNumber - 1);
    } else {
        displayPic(4);
    }
};

function moveRight() {
    const currentPicNumber = getCurrentPicNumber();
    if (currentPicNumber < 4) {
        displayPic(currentPicNumber + 1);
    } else {
        displayPic(1);
    }
};

function startShow() {
    slideShow = setInterval(() => {
        moveRight();
    }, 5000);
};

function stopShow() {
    clearInterval(slideShow);
};

document.querySelector("#leftArrow").addEventListener("click", () => {
    moveLeft();
});

document.querySelector("#rightArrow").addEventListener("click", () => {
    moveRight();
});

document.querySelector("#dot1").addEventListener("click", () => {
    displayPic(1);
});

document.querySelector("#dot2").addEventListener("click", () => {
    displayPic(2);
});

document.querySelector("#dot3").addEventListener("click", () => {
    displayPic(3);
});

document.querySelector("#dot4").addEventListener("click", () => {
    displayPic(4);
});

document.querySelector("#start").addEventListener("click", () => {
    startShow();
});

document.querySelector("#stop").addEventListener("click", () => {
    stopShow();
});

startShow();