var arrN = [0,0,0,0,0,0,0,0];
var canGo = true;
var stillGo = true;

function animateNameGate(){
    if(canGo){
        stillGo = true;
        animateName(0);
        canGo = false;
    }
}

function animateNameStop(){
    resetName();
    stillGo = false;
    canGo = true;
}

function resetName(){
    for(var i=0; i<=7; i++){
    document.querySelectorAll("footer i")[i].style.top = "0";
    }
}

function animateName(n){
    if(n <= 3){
        arrN.pop();
        arrN.unshift(1);
        n = n+1;
    }else{
        arrN.pop(); 
        arrN.unshift(0);
        n= n+1;
        if(n > 6){
            n = 0;
        }
    }
    for(var i=0; i<=7; i++){
        if(arrN[i] == 1){
            document.querySelectorAll("footer i")[i].style.top = ".3vh";
        }else{
            document.querySelectorAll("footer i")[i].style.top = "0";
        }
    }
    setTimeout(function () {
        if(stillGo){
            animateName(n);
        }
    }, 100);
}