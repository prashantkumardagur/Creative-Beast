var i=1;
var revBox = document.getElementById("revMain");
var revNav = document.getElementsByClassName("revNav");


const revTimer = setInterval(revAnimation , 6000 );

function revAnimation(x){
    if(!x){
        if(i==1) {
            revBox.style.transform="translateX(0)";
        }
        else if(i==2) {
            revBox.style.transform="translateX(-33.33%)";
        }
        else {
            revBox.style.transform="translateX(-66.66%)";
        }
        revNavAnimate(i);
        ++i;
        if(i==4) i=1;
    }
    else if(x==1){
        revBox.style.transform="translateX(0)";
        i=1;
    }
    else if(x==2){
        revBox.style.transform="translateX(-33.33%)";
        i=2;
    }
    else if(x==3){
        revBox.style.transform="translateX(-66.66%)";
        i=3;
    }
    if(x) revNavAnimate(x);
}
function revNavAnimate(x){
    for(let z=0 ; z<revNav.length ; ++z){
        revNav[z].style.transform="scale(1)";
    }
    revNav[x-1].style.transform="scale(1.5)";
}

