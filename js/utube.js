var player = document.getElementById("player");
var playerdiv = document.getElementById("playerdiv");
var s;
function loadvid(x){
    switch(x){
        case 1 : s="https://www.youtube.com/embed/9xs7cFVI6qo";
                break;
        case 2 : s="https://www.youtube.com/embed/py1hIMOAWAM";
                break;
        case 3 : s="https://www.youtube.com/embed/wuGRshO-KBc";
                break;
        case 4 : s="https://www.youtube.com/embed/-KCeBpXuxlc";
                break;
        case 5 : s="https://www.youtube.com/embed/dP6NTtWsR54";
                break;
        case 6 : s="https://www.youtube.com/embed/-E21zvd7P3k";
                break;
        case 7 : s="https://www.youtube.com/embed/GlozTAulCTE";
                break;
    }
    
    player.src=s;
    playerdiv.style.display="block";
}