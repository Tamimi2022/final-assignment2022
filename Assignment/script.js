function toggleNav() {
    const getSidebarUl = document.querySelector(".nav-sidebar ul");

    if (getSidebarUl.style.visibility === "visible") {
        getSidebarUl.style.visibility = "hidden";
    } else {
        getSidebarUl.style.visibility = "visible";
    }
}

// All box .
document.querySelector("#box1").addEventListener("click", function () {
    document.body.style.backgroundColor = "#b4afaf";
    toggleNav();
});

document.querySelector("#box2").addEventListener("click", function () {
    document.body.style.backgroundColor = "red";
    toggleNav();
});

document.querySelector("#box3").addEventListener("click", function () {
    document.body.style.backgroundColor = "orange";
    toggleNav();
});

document.querySelector("#box4").addEventListener("click", function () {
    document.body.style.backgroundColor = "purple";
    toggleNav();
});

document.querySelector("#box5").addEventListener("click", function () {
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