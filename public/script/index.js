
gsap.registerPlugin(ScrollTrigger);




window.onload = function() {
  window.scrollTo(0, 0);
};

const tl = gsap.timeline({ defaults: { duration: 1 } });
const tl2 = gsap.timeline({ defaults: { duration: 1 } });
// welcome
tl.to(".welcome :nth-child(1)",{
  delay:1,
  duration:.7,
  x:-800,
  ease: "power1.out",
}).to(".welcome :nth-child(1)",{
  display:"none"
})


tl2.to(".welcome :nth-child(2)",{
  delay:1,
  duration:.7,
  x:800,
  ease: "power1.out",
}).to(".welcome :nth-child(2)",{
  display:"none"
})



// 



// time


function updateTime() {
  const now = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' });
  const houstonTime = new Date(now);
  let hours = houstonTime.getHours();
  const minutes = houstonTime.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const formattedHours = hours.toString().padStart(2, '0');
  document.getElementById('time').textContent = `${formattedHours}:${minutes} ${ampm} - Houston, TX`;
}

// Update time immediately
updateTime();
// Update time every minute
setInterval(updateTime, 60000);


// audio


const audio = document.getElementById('audio');
const body= document.querySelector("body")
body.addEventListener('click', () => {
    audio.play();
});







// 


gsap.fromTo(".section-2", {
  backgroundColor: "#2b2b2b",
  color:"#FCFAF3",
 
  ease: "power4.in",
 
}, {

  backgroundColor: "#FCFAF3",
  color:"#2b2b2b",
  duration: .5,
  scrollTrigger:{
    trigger: ".hero",
    start: "80% 55%",
    // markers:true

  }
})


const data = document.querySelectorAll(".data1");

gsap.from(data, {
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







// 
gsap.to(".hero", {
  scrollTrigger: {
    trigger: ".hero ",
    start: "top top",
    end: "bottom top",
    pin: true,
    pinSpacing: false,
    // markers:true

  },
});


gsap.fromTo(".video-1", {
  x: -100,
  opacity: 0

}, {
  x: 0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".video-1",
    // markers:true,
    start: "-5% 75%",

  }
})

gsap.fromTo(".video-2", {
  x: 100,
  opacity: 0

}, {
  x: 0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".video-2",
    // markers:true,
    start: "-5% 75%",

  }
})

gsap.fromTo(".video-3", {
  x: -100,
  opacity: 0

}, {
  x: 0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".video-2",
    // markers:true,
    start: "75% 70%",

  }
})

gsap.fromTo(".video-4", {
  x: 100,
  opacity: 0

}, {
  x: 0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".video-2",
    // markers:true,
    start: "75% 70%",

  }
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