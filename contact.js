//slidemenu
var sidebar=document.getElementById("sidenav")
var closebar=document.getElementById("closenav")
var menuicon=document.getElementById("menuicon")

menuicon.addEventListener("click",function(){
    sidenav.style.left=0
})
closebar.addEventListener("click",function(){
    sidenav.style.left="-50%"
})
