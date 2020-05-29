
var animations = [
    'map',
    'spin'
]

var animation;

function pickAnim(){
    animation = animations[1]
    if(animation == 'map'){
        mapAnimation();
    }else if(animation == 'spin'){
        spinAnimation();
    }
}

function main() {
    pickAnim();
    if (window.location.hash) {
        var hash = window.location.hash.substring(1);
        if (hash == "projects") {
            updateScreen(1);
        } else if (hash == "cv") {
            updateScreen(2);
        } else if (hash == "contact") {
            updateScreen(3);
        }
    }
}

function updateScreen(change) {
    var about = document.getElementById("aboutText");
    var projects = document.getElementById("projectsText");
    var cv = document.getElementById("cvText");
    var contact = document.getElementById("contactText");
    if (change == 0) {
        projects.classList.add("hidden");
        cv.classList.add("hidden");
        contact.classList.add("hidden");
        about.classList.remove("hidden");
    } else if (change == 1) {
        about.classList.add("hidden");
        cv.classList.add("hidden");
        contact.classList.add("hidden");
        projects.classList.remove("hidden");
    } else if (change == 2) {
        about.classList.add("hidden");
        projects.classList.add("hidden");
        contact.classList.add("hidden");
        cv.classList.remove("hidden");
    } else if (change == 3) {
        about.classList.add("hidden");
        projects.classList.add("hidden");
        cv.classList.add("hidden");
        contact.classList.remove("hidden");
    }
    var light = false;
    if (change == 1 || change == 3) {
        light = true;
        var side = document.getElementById("side");
        side.style.backgroundColor = "rgb(247, 244, 240)";
        side.style.color = "black";
        document.body.style.backgroundColor = "rgb(247, 244, 240)";
    } else {
        light = false;
        var side = document.getElementById("side");
        side.style.backgroundColor = "black";
        side.style.color = "rgb(247, 244, 240)";
        document.body.style.backgroundColor = "black";
    }
    animScreenChangeHandler(light)
}

function animScreenChangeHandler(light){
    if(animation == 'map'){
        rndColours();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }else if(animation == 'spin'){
        spinp5.bg(light);
    }
}