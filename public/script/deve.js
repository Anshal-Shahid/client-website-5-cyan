

const deve=document.querySelector(".development .cross")

deve.addEventListener("click",()=>{
    gsap.to(".development",{
        scale:0
    })
})


