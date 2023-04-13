/*
    Graham Hatten
    April 4 2023
    script.js
*/
//global variables
var video = document.getElementById("example");
var videoSource = document.getElementById("vid-src");
var descrSource = document.getElementById("despsrc");
//hamburger menu function
function hamburgerMenu(){
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("ffc-logo");
    //if the display style of the menu is block AND
    //the logo disply style is none
    if(menu.style.display === "block" && logo.style.display === "none"){
        //if both statements are true
        menu.style.display = "none";
        logo.style.display = "block";
    }
    else{
        //if one of the statements or both is false
        menu.style.display = "block";
        logo.style.display = "none";
    }
}
//Burpee video function
function burpee(){
    videoSource.src = "media/burpee.mp4";
    descrSource.src = "media/burpees-description.vtt";
    video.style.display = "block";
    video.load();
}
function plank(){
    videoSource.src = "media/plank.mp4";
    descrSource.src = "media/plank-description.vtt";
    video.style.display = "block";
    video.load();
}
function mountain(){
    videoSource.src = "media/mc.mp4";
    descrSource.src = "media/mountain-description.vtt";
    video.style.display = "block";
    video.load();
}
function discount(){
    var promo = document.getElementById("special");
    promo.firstChild.nodeValue = "Promo Code: D25START";
    promo.style.color = "#ff0000";
    promo.style.fontSize = "2em";
}