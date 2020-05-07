var main = document.getElementById("photoviewer");
var images = document.getElementsByClassName("images");

function view(x){
    main.src=(images[x].src).slice(0,-9) + "m-min.jpeg";
}

var section = document.getElementsByClassName("photosection");
var photogroup = document.getElementsByClassName("photogroup");
var sectionlen = section.length;
section[0].style.display="grid";
function selectsection(snum){
    for(let si=0; si < sectionlen; ++si){
        section[si].style.display="none";
        photogroup[si].classList.remove('selectedgroup');
    }
    section[snum].style.display="grid";
    photogroup[snum].classList.add('selectedgroup');
}