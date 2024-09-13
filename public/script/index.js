// audio 
const audio = document.getElementById('audio');
const body = document.querySelector("body")
body.addEventListener('click', () => {
  audio.play();
});

// loader


  window.addEventListener("load", function() {
    const loader = document.querySelector('.loader');
    const content = document.querySelector('main');

    if (window.matchMedia("(min-width: 1000px)").matches) {
      // Only execute if the viewport width is above 1000px
      if (loader) {
        loader.style.display = 'none';
      }
      if (content) {
        content.style.display = 'block';
      }
    }
  });




//   body.classList.add('no-scroll');
  
  
//   function enableScrolling() {
//   body.classList.add('overflow-x');
//   body.classList.remove('no-scroll');
// }ro

 





// ******
gsap.registerPlugin(ScrollTrigger);


gsap.to(".nav",{
  backgroundColor:"#e8edec",
  scrollTrigger:{
      trigger:".nav",
      start:"bottom top",
      end: " bottom bottom ",
      markers:true,
      scrub:true

  }
})
gsap.to(".nav ul li a",{
  color:"#163809",
  scrollTrigger:{
      trigger:".nav",
      start:"bottom top",
      end: " bottom bottom ",
      markers:true,
      scrub:true
  }
})
gsap.to(".nav h3",{
  color:"#163809",
  scrollTrigger:{
      trigger:".nav",
      start:"bottom top",
      end: " bottom bottom ",
      markers:true,
      scrub:true

  }
})

// window.onload = function () {
//   window.scrollTo(0, 0);
// };

// const tl = gsap.timeline({ defaults: { duration: 1 } });
// const tl2 = gsap.timeline({ defaults: { duration: 1 } });
// // welcome
// tl.to(".welcome :nth-child(1)", {
//   delay: 1,
//   duration: .7,
//   x: -800,
//   ease: "power1.out",
// }).to(".welcome :nth-child(1)", {
//   display: "none"
// })


// tl2.to(".welcome :nth-child(2)", {
//   delay: 1,
//   duration: .7,
//   x: 800,
//   ease: "power1.out",
//   onComplete: function() {
//     enableScrolling();

//   }
// }).to(".welcome :nth-child(2)", {
//   display: "none"
// }).fromTo(".cyan", {
//   y: 90,
//   opacity:0
// }, {
//   y: 0,
//   // delay:1,
//   duration:.7,
//   opacity:1,
//   ease: "bounce",

// }).fromTo(".foster", {
//   y: 90,
//   opacity:0
// }, {
//   y: 0,
//   // delay:.1,
//   duration:.7,

//   opacity:1,
//   ease: "bounce",

// })





// hero
// const tl3 = gsap.timeline({ defaults: { duration: 1 } });

// tl.fromTo(".hero .h1 :nth-child(1)",{
//   y:-30,
// },{
//   y:0,
// })





// time


// function updateTime() {
//   const now = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' });
//   const houstonTime = new Date(now);
//   let hours = houstonTime.getHours();
//   const minutes = houstonTime.getMinutes().toString().padStart(2, '0');
//   const ampm = hours >= 12 ? 'PM' : 'AM';
//   hours = hours % 12;
//   hours = hours ? hours : 12; // the hour '0' should be '12'
//   const formattedHours = hours.toString().padStart(2, '0');
//   document.getElementById('time').textContent = `${formattedHours}:${minutes} ${ampm} - Houston, TX`;
// }

// // Update time immediately
// updateTime();
// // Update time every minute
// setInterval(updateTime, 60000);


// audio










// 


// gsap.fromTo(".section-2", {
//   backgroundColor: "#F4EBD0",
//   color: "#D6AD60",

//   ease: "power4.in",

// }, {

//   backgroundColor: "#D6AD60",
//   color: "#F4EBD0",
//   duration: .5,
//   scrollTrigger: {
//     trigger: ".hero",
//     start: "80% 55%",
//     // markers:true

//   }
// })
// gsap.fromTo(".section-3", {
//   backgroundColor: "#D6AD60",
//   color: "#F4EBD0",

//   ease: "power4.in",

// }, {

//   backgroundColor: "#F4EBD0",
//   color: " #D6AD60",
//   duration: .5,
//   scrollTrigger: {
//     trigger: ".section-3",
//     start: "top 55%",
//     // markers: true

//   }
// })

// gsap.fromTo(".section-4", {
//   backgroundColor: "#F4EBD0",
//   color: "#D6AD60",

//   ease: "power4.in",

// },{

//   backgroundColor: "#D6AD60",
//   color: "#F4EBD0",
//   duration: .5,
//   scrollTrigger: {
//     trigger: ".section-4",
//     start: "top 55%",
//     // markers:true

//   }
// })



// *********

const data = document.querySelectorAll(".data1");

gsap.from(data, {
  textContent: 0,
  duration: 1.5,
  ease: Power1.easeIn,
  snap: { textContent: 1 },
  stagger: 1,
  scrollTrigger: {
    trigger: ".data1 ",
    start: "top 90%",
    end: "bottom top",
    // markers:true

  },


});

const data2 = document.querySelectorAll(".data2");

gsap.from(data2, {
  textContent: 0,
  duration: 1.5,
  ease: Power1.easeIn,
  snap: { textContent: 1 },
  stagger: 1,
  scrollTrigger: {
    trigger: ".data1 ",
    start: "-10% 90%",
    end: "bottom top",
    // markers:true

  },
});







// scroll animation 

// gsap.to(".hero", {
//   scrollTrigger: {
//     trigger: ".hero ",
//     start: "top top",
//     end: "bottom top",
//     pin: true,
//     pinSpacing: false,
//     // markers:true
//     scrub:true

//   },
// });

gsap.to(".hero",{
  scale:0,
  // duration:1.5,
  scrollTrigger:{
    trigger:".hero",
    start:"top top",
    end:"bottom top",
    // markers:true,
    scrub:true

  },

})


// section 4 animation
gsap.fromTo(".section-4 h1", {
  scale: 0
}, {
  scale: 1,
  scrollTrigger: {
    trigger: ".section-4 h1",
    // markers:true,
    start: "-25% 90%",

  }
})


gsap.to(".section-4 .service-1 p", {
  backgroundPositionX: "0%",
  stagger: 1,
  scrollTrigger: {
    trigger: ".section-4 .service-1 p",

    start: "-120% center",
    //   markers: true,
    end: "55% center"
  }
});
gsap.to(".section-4 .service-2 p", {
  backgroundPositionX: "0%",
  stagger: 1,
  scrollTrigger: {
    trigger: ".section-4 .service-1 p",

    start: "-120% center",
    //   markers: true,
    end: "55% center"
  }
});
gsap.to(".section-4 .service-3 p", {
  backgroundPositionX: "0%",
  stagger: 1,
  scrollTrigger: {
    trigger: ".section-4 .service-1 p",

    start: "-120% center",
    //   markers: true,
    end: "55% center"
  }
});
gsap.to(".section-4 .service-4 p", {
  backgroundPositionX: "0%",
  stagger: 1,
  scrollTrigger: {
    trigger: ".section-4 .service-4 p",

    start: "-120% center",
    //   markers: true,
    end: "55% center"
  }
});
gsap.to(".section-4 .service-5 p", {
  backgroundPositionX: "0%",
  stagger: 1,
  scrollTrigger: {
    trigger: ".section-4 .service-4 p",

    start: "-120% center",
    //   markers: true,
    end: "55% center"
  }
});
gsap.to(".section-4 .service-6 p", {
  backgroundPositionX: "0%",
  stagger: 1,
  scrollTrigger: {
    trigger: ".section-4 .service-4 p",

    start: "-120% center",
    //   markers: true,
    end: "55% center"
  }
});