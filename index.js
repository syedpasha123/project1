function increment() {
    document.getElementById('demoInput').stepUp();
}
function decrement() {
    document.getElementById('demoInput').stepDown();
}

const addCart = document.getElementById("addcart");

const handleAddCart = () => {
let value = document.getElementById("demoInput").value;
document.getElementById("cartVal").innerHTML = value;
document.getElementById("cartValMobile").innerHTML = value;
}

addCart.addEventListener("click", handleAddCart);

const tips=Array.from(document.querySelectorAll('.buttons'));

tips.forEach(function (mov) {
mov.addEventListener("click", handleClick);
});


function handleClick(e) {
tips.forEach((t)=>{
t.classList.remove("active")
});
e.target.classList.add("active");
}

const selectImg1 = document.getElementById("selectImg");

const changeImage1 = () =>{
let Img1 = document.getElementById("selectImg").src;
    document.getElementById("profileImg").src = Img1;

}
selectImg1.addEventListener("click", changeImage1);


const selectImg2 = document.getElementById("selectImg1");

const changeImage2 = () =>{
 let Img2 = document.getElementById("selectImg1").src;
 if(Img2 === document.getElementById("selectImg1").src){
    document.getElementById("profileImg").src = Img2;
}

}
selectImg2.addEventListener("click", changeImage2);

const selectImg3 = document.getElementById("selectImg2");

const changeImage3 = () =>{
 let Img3 = document.getElementById("selectImg2").src;
if(Img3 === document.getElementById("selectImg2").src){
    document.getElementById("profileImg").src = Img3;
}    
}

selectImg3.addEventListener("click", changeImage3);
