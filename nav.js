var toggle=false;
var nav = document.getElementById("navbox");

function toggleNav(){
    if(toggle) nav.style.top="-400px";
    else nav.style.top="40px";

    toggle=!toggle;
}