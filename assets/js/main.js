const burger = document.getElementById("hamburger")
const closeBurger = document.getElementById("close")

const text1 = document.getElementById("text1")
const img1 = document.getElementById("img1")

const text2 = document.getElementById("text2")
const img2 = document.getElementById("img2")

const text3 = document.getElementById("text3")
const img3 = document.getElementById("img3")

const text4 = document.getElementById("text4")
const img4 = document.getElementById("img4")

const text5 = document.getElementById("text5")
const img5= document.getElementById("img5")

const text6 = document.getElementById("text6")
const img6 = document.getElementById("img6")
burger.addEventListener("click", () => {
    overlay.style.right = "0%"
})
closeBurger.addEventListener("click", () => {
    overlay.style.right = "-100%"
})
if (text1) {
    text1.addEventListener("mouseover",  show1)
    text1.addEventListener("mouseout", hide1)
}

if (text2) {
    text2.addEventListener("mouseover",  show2)
    text2.addEventListener("mouseout", hide2)
}

if (text3) {
    text3.addEventListener("mouseover",  show3)
    text3.addEventListener("mouseout", hide3)
}
if (text4) {
    text4.addEventListener("mouseover",  show4)
    text4.addEventListener("mouseout", hide4)
}

if (text5) {
    text5.addEventListener("mouseover",  show5)
    text5.addEventListener("mouseout", hide5)
}

if (text6) {
    text6.addEventListener("mouseover",  show6)
    text6.addEventListener("mouseout", hide6)
}


function show1() {
    img1.style.display= "block"
}
function hide1() {
    img1.style.display ="none"
}


function show2() {
    img2.style.display= "block"
}
function hide2() {
    img2.style.display ="none"
}


function show3() {
    img3.style.display= "block"
}
function hide3() {
    img3.style.display ="none"
}


function show4() {
    img4.style.display= "block"
}
function hide4() {
    img4.style.display ="none"
}


function show5() {
    img5.style.display= "block"
}
function hide5() {
    img5.style.display ="none"
}


function show6() {
    img6.style.display= "block"
}
function hide6() {
    img6.style.display ="none"
}




