var wall = document.getElementById("theWall");
var wallcount = 1;
const theTimer = setInterval ( function(){
    switch(wallcount){
        case 1: wall.style.transform="translateX(0%)";
                break;
        case 2: wall.style.transform="translateX(-20%)";
                break;
        case 3: wall.style.transform="translateX(-40%)";
                break;
        case 4: wall.style.transform="translateX(-60%)";
                break;
        case 5: wall.style.transform="translateX(-80%)";
                break;
    }
    ++wallcount;
    if(wallcount==6) wallcount=1;
},5000 )