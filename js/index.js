var page;
asp = 1.25;

function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
    if (h > w * asp) {
        page.style.width = "85vw";
        page.style.height = "106.25vw";
    } else {
        page.style.width = "68vh";
        page.style.height = "85vh";
    }
}

window.onload = function () {
    page = document.getElementById("page");
    resize();
}

window.onresize = function (event) {
    resize();
};
