gsap.set(gsap.utils.toArray(".process-step-content"), { height: 0 });


gsap.utils.toArray(".process-step").forEach((element, index) => {
  let tempTimeline = gsap.timeline();
  let processContent = element.querySelector(".process-step-content");

  console.log(processContent);

  tempTimeline
    .addLabel('process-step')
    .to(element, { opacity: 1, duration: 0.5 }, 'process-step')
    .fromTo(processContent, { height: 0, duration: 1 }, { height: 'auto', duration: 1 })

  ScrollTrigger.create({
    trigger: element,
    start: 'top 30%',
    end:"top top ",
    toggleActions: "play reverse play reverse",
    animation: tempTimeline,
    // animation: processTimeline,
    // pin: true,
    scrub: true,
    // markers: true,
    // invalidateOnRefresh: true,
  });

  //tempTimeline.set(processContent, { height: 0 })
});