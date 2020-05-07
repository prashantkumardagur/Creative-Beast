var toggle=false;
var navbox = document.getElementById("navbox");

function toggleNav(){
    if(toggle) navbox.style.top="-400px";
    else navbox.style.top="40px";

    toggle=!toggle;
}