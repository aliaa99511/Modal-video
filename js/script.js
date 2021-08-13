




var popup=document.getElementById("popup");
var close=document.getElementById("close");
var overlay=document.getElementById("overlay");



popup.onclick=function(){
    overlay.style.display="block";
}
close.onclick=function(){
    overlay.style.display="none";
}
overlay.onclick=function(){
    overlay.style.display="none";
}