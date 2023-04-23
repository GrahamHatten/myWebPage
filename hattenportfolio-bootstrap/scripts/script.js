/*
    Student Name: Graham Hatten
    File Name: script.js
    Date: 04/19/23
*/

//jQuery for hero image to consume the header window space
$(document).ready(function(){
    $('.hero').height($(window).height());
});
window.onload = function() {
    // Accessing navigator properties
    var userAgent = navigator.userAgent;
    var language = navigator.language;
    var platform = navigator.platform;

    // Accessing screen properties
    var screenWidth = screen.width;
    var screenHeight = screen.height;
    var colorDepth = screen.colorDepth;

    // Displaying the values in the HTML document
    document.getElementById("userAgent").innerHTML = "User Agent: " + userAgent;
    document.getElementById("language").innerHTML = "Language: " + language;
    document.getElementById("platform").innerHTML = "Platform: " + platform;
    document.getElementById("screenWidth").innerHTML = "Screen Width: " + screenWidth;
    document.getElementById("screenHeight").innerHTML = "Screen Height: " + screenHeight;
    document.getElementById("colorDepth").innerHTML = "Color Depth: " + colorDepth;
  }