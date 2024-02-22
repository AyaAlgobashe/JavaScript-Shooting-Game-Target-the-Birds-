
let bird=document.images[0]

const appendFromLeft=(birdImage,bottom)=>{
    let moveInterval=setInterval(()=>{
        bottom =   Math.random()*window.innerHeight;
        if(bottom<(window.innerHeight-birdImage.height)){
            birdImage.style.bottom=bottom+"px";
            moveToleft(birdImage,0)
            clearInterval(moveInterval)
        }
        else{
            birdImage.style.bottom=0+"px"

        }

    },1000)


}
const moveToleft=(birdImage,left)=>{
    let leftIntervel =setInterval(()=>{
        left+=10;
        if(left<(window.innerWidth-birdImage.width)){
            birdImage.style.left=left+"px";
        }
        else{
            birdImage.style.left=0+"px"

        }

    },100)
}
const junCurser=document.querySelector(".cursour")
document.addEventListener("mousemove",function(event){
    const x =event.clientX;
    const y=event.clientY;
    junCurser.style.left=`${x}px`
    junCurser.style.top=`${y}px`
    
})
bird.onclick=function(){
    bird.classList.add("visable")


}

appendFromLeft(bird,0)