function showSearch(){
    var searchBox = document.getElementById("searchBox");
    var search = document.getElementById("search");
    search.style.width = "300px"
    searchBox.style.display = "block";
}

function hideSearch(){
    var searchBox = document.getElementById("searchBox");
    var search = document.getElementById("search");
    search.style.width = "100px"
    searchBox.style.display = "none";
}

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
        //console.log(brightness);
    }, (Math.random()*101)+1);

}

window.onload = flicker();


$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "" && this.hash !="#action" && this.hash !="#comedy" && this.hash !="#thriller" && this.hash !="#drama") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 600, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

