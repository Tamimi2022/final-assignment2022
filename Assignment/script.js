// Different Concept ..
const btnToggleNav = document.querySelector(".btn-toggle-nav");
btnToggleNav.addEventListener("click", () => {
    toggleNav();
})


// My answer 
function toggleNav() {
    const getSidebarUl = document.querySelector(".nav-sidebar ul");

    if (getSidebarUl.style.visibility === "visible") {
        getSidebarUl.style.visibility = "hidden";
    } else {
        getSidebarUl.style.visibility = "visible";
    }
}

// All box .
// Box1 different concept ..
document.querySelector("#box1").addEventListener("click", function () {
    document.body.style.backgroundColor = "#b4afaf";
    toggleNav();
});

// Box2 Box3 Box4 Box5 different concept ..
const box2 = document.querySelector("#box2")
box2.addEventListener("click", function () {
    document.body.style.backgroundColor = "red";
    toggleNav();
});

const box3 = document.querySelector("#box3")
box3.addEventListener("click", function () {
    document.body.style.backgroundColor = "orange";
    toggleNav();
});

const box4 = document.querySelector("#box4")
box4.addEventListener("click", function () {
    document.body.style.backgroundColor = "purple";
    toggleNav();
});

const box5 = document.querySelector("#box5")
box5.addEventListener("click", function () {
    document.body.style.backgroundColor = "green";
    toggleNav();
});

// Color change .

document.querySelector("#box1").addEventListener("mouseover", function (mouseover) {
    mouseover.target.style.backgroundColor = "#b4afaf";
});

document.querySelector("#box2").addEventListener("mouseover", function (mouseover) {
    mouseover.target.style.backgroundColor = "red";
});

document.querySelector("#box3").addEventListener("mouseover", function (mouseover) {
    mouseover.target.style.backgroundColor = "orange";
});

document.querySelector("#box4").addEventListener("mouseover", function (mouseover) {
    mouseover.target.style.backgroundColor = "purple";
});

document.querySelector("#box5").addEventListener("mouseover", function (mouseover) {
    mouseover.target.style.backgroundColor = "green";
});
