var main = document.getElementById("photoviewer");
var images = document.getElementsByClassName("images");
var contain = document.getElementById("container");

function view(x){
    contain.style.display="block";
    main.src=images[x].src;
}