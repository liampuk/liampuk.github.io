var brightness = 0.3;

function flicker(){

    setTimeout(function(){ 
        if(brightness > 0){
            brightness = 0;
        }else{
            brightness = Math.random()*0.5;
        }
        var fli = document.getElementById("hero2");
        fli.style.backgroundColor = "rgba(0, 0, 0, "+ brightness +")";
        flicker();
        console.log(brightness);
    }, (Math.random()*101)+1);

}

window.onload = flicker();



/*


    setTimeout(function(){ 
        flicker;
    }, (Math.random()*301)+1);




*/