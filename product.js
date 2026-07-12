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

// search
var search=document.getElementById("search")
var productContainer=document.getElementById("product-container")
var productList=productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue=event.target.value.toUpperCase()

    for(count=0;count<productList.length;count=count+1)
    {
        var productname=productList[count].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(enteredValue)<0)
        {
            productList[count].style.display="none"
        }
        else{
            productList[count].style.display="block"
        }
    }
})