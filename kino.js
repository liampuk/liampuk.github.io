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

var op1 = 0;
var op2 = 1;

function myFunction() {
    myVar = setTimeout(function(){ 
        document.getElementById("hero").style.opacity = op1.toString();
        document.getElementById("hero2").style.opacity = op2.toString();
        if(op1 == 0){
            op1 = 1;
            op2 = 0;
        }else{
            op1 = 0;
            op2 = 1;
        }
        myFunction();
    }, 5000);
}

window.onload = myFunction();



//  #####  jQuery  #####

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
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