var allcards = document.getElementsByClassName("cards");
var cardlen=allcards.length;
if(window.innerWidth < 501){
    for(let ii=0 ; ii < cardlen ; ++ii){
        allcards[ii].classList.add("wow", "comesleft");
    }
}
/*--------------------------------------------*/

var loader = document.getElementById("loader");
var obj1 = document.getElementsByClassName("comesup");
var obj2 = document.getElementsByClassName("comesdown");
var obj3 = document.getElementsByClassName("comesleft");
var obj4 = document.getElementsByClassName("comesright");
var obj5 = document.getElementsByClassName("comesin");
var obj6 = document.getElementsByClassName("rotates");

var len1 = obj1.length;
var len2 = obj2.length;
var len3 = obj3.length;
var len4 = obj4.length;
var len5 = obj5.length;
var len6 = obj6.length;
var i;

function animate(){
    for(i=0;i<len1;++i){
        obj1[i].classList.add("animation1");
    }
    for(i=0;i<len2;++i){
        obj2[i].classList.add("animation2");
    }
    for(i=0;i<len3;++i){
        obj3[i].classList.add("animation3");
    }
    for(i=0;i<len4;++i){
        obj4[i].classList.add("animation4");
    }
    for(i=0;i<len5;++i){
        obj5[i].classList.add("animation5");
    }
    for(i=0;i<len6;++i){
        obj6[i].classList.add("animation6");
    }

    loader.style.display="none";
    new WOW().init();
}
        