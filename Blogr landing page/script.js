const arrow = document.querySelector('.arrow3')
const arrowRed = document.querySelector('.arrowRed3')
const connect = document.querySelector('.connect')
const divConnect = document.querySelector('.connectDiv')
const btnAndList = document.querySelector('.btnAndList')
const menuBtn = document.querySelector('.hamburger')
const closeBtn = document.querySelector('.closeBtn')
connect.addEventListener("click", function(){
    if(window.innerWidth <= 500){
        divConnect.style.display = "flex";
        btnAndList.style.height = "450px";
        arrowRed.style.rotate = "180deg";
    }else{
        divConnect.style.display = "flex";
        arrow.style.rotate = "180deg"
    }
})
menuBtn.addEventListener("click", function(){
    menuBtn.style.display = "none";
    closeBtn.style.display = "flex";
    btnAndList.style.display = "flex"
})
closeBtn.addEventListener("click", function(){
    menuBtn.style.display = "flex";
    closeBtn.style.display = "none";
    btnAndList.style.display = "none";
    divConnect.style.display = "none";
    btnAndList.style.height = "280px";
})