let slide = document.querySelectorAll(".slideCard");
let card = document.querySelectorAll(".card");
let count = 0;

slide.forEach(function(slides, index){
    slides.style.left =`${index *100}%`
})
function myFun(){
    slide.forEach(function(currentVal){
        currentVal.style.transform =`translatex(-${count *100}%)`
    })
}
setInterval(() => {
    count++;
    if(count == slide.length){
        count=0;
    }
    myFun()
}, 2000);
 
// card details
card.forEach(function(cards){
    cards.addEventListener("click",function(){
        document.querySelector(".container").style.display ="none"
        let div = document.createElement("div");
        div.classList.add("cardDetails");
        div.innerHTML =`
        
    <img src=${cards.firstElementChild.src} alt="">
    <div class="cardText">
        <h2>Top Trending Wear</h2>
        <h2>Upto 30% Off Harry...</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>Buy Now</button>
        <button>Add To Cart</button>
        <a href="">Back</a>
    </div>
        `
        document.querySelector("body").appendChild(div)
    })
})