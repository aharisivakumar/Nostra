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

//offer
var closebox=document.getElementById("close")
var offer=document.getElementById("offer")
closebox.addEventListener("click",function(){
    offer.style.display="none"
})
//slider

const slider=document.getElementById("slider")
const slide=document.querySelectorAll("#slider img")

let index=0;
function showSlide(i){
    if(i>=slide.length){
        index=0;
    }
    else if(i<0)
    {
        index=slide.length-1;
    }
    else{
        index=i;
    }
    slider.style.transform=`translateX(-${index*100}%)`;
}

const next=document.getElementById("next")
next.addEventListener("click",()=>{
    showSlide(index+1);
});

const prev=document.getElementById("prev")
prev.addEventListener("click",()=>{
    showSlide(index-1);
});

setInterval(()=>{
    showSlide(index+1);
},3000);

// img selection
function filterProducts(category){
    let products=document.querySelectorAll(".product");
    products.forEach(product =>{
        if(category === "all")
        {
            product.style.display="block";
        }
        else if(product.classList.contains(category)){
            product.style.display="block";
        }
        else{
            product.style.display="none";
        }
    })
}

