var toggle=false;
var nav = document.getElementById("navbox");
document.getElementById("loading").style.display="none";

function toggleNav(){
    if(toggle) nav.style.top="-400px";
    else nav.style.top="40px";

    toggle=!toggle;
}