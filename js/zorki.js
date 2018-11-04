var maxScroll = 0;

function init() {
    var heroImg = document.getElementById("hero-img");
    var heroShadow = document.getElementById("hero-shadow");
    var header = document.getElementsByTagName("header")[0];
    var name = document.getElementById("hero-name");
    var tagline = document.getElementById("hero-tagline");
    var headerName = document.getElementById("header-name");
    heroImg.style.marginTop = "30vh";
    heroImg.style.opacity = "1";
    heroShadow.style.opacity = ".7";
    setTimeout(function () {
        header.style.opacity = "1";
        name.style.opacity = "1";
        name.style.letterSpacing = ".8em";
        tagline.style.opacity = "1";
        tagline.style.top = "180px";
        document.body.style.overflowY = "visible";
    }, 2000);
}

window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    if (scroll > maxScroll) {
        maxScroll = scroll;
        if (scroll > window.innerHeight / 1.2) {
            displayBGIs();
            moveLens();
            setTimeout(function () {
                openLens();
            }, 1000);
        }
    }
});

function displayBGIs() {
    var mountBody = document.getElementById("mount-body");
    var lensClosed = document.getElementById("lens-closed");
    var lensOpen = document.getElementById("lens-open");

    mountBody.style.opacity = "1";
    lensClosed.style.opacity = "1";
    lensOpen.style.opacity = "1";

}

function moveLens() {
    var lens = document.getElementById("mount-lens");
    lens.style.opacity = "1";
    lens.style.marginLeft = "10vw";
}

function openLens() {
    var lensOpen = document.getElementById("lens-open");
    lensOpen.style.transition = "all 2s ease";
    lensOpen.style.height = "0vh";
    lensOpen.style.marginTop = "0vh";
    lensOpen.style.marginRight = "0vh";

    var h21 = document.getElementsByClassName("info")[0];
    var h22 = document.getElementsByClassName("info")[1];
    var h23 = document.getElementsByClassName("info")[2];

    var mI1 = document.getElementsByClassName("main-info")[0];
    var mI2 = document.getElementsByClassName("main-info")[1];

    mI1.style.opacity = "1";
    mI1.style.marginTop = "0px";

    mI2.style.opacity = "1";
    mI2.style.marginTop = "0px";

    setTimeout(function () {
        h21.style.marginLeft = "55px";
        h21.style.opacity = "1";
        h22.style.marginLeft = "55px";
        h22.style.opacity = "1";
        h23.style.marginLeft = "55px";
        h23.style.opacity = "1";
    }, 1000);


}