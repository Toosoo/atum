import boostrap from "./bootstrap.bundle.min";
import gsap from "./gsap.min";
import ScrollTrigger from "./ScrollTrigger.min";
import ScrollSmoother from "./ScrollSmoother.min";
gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

// smoothscroll
let scroller = ScrollSmoother.create({     
  smoothTouch: 0.1,   
  wrapper: "#wrapper",
	content: "#content",
	smooth: 2,
	effects: true,
});


// preloader

window.addEventListener("load",()=> {
  gsap.to(".preloader", {
    keyframes:[
      {
        opacity: 0,
        ease: "power4.inOut",
        duration: 1,
      },
      {
        display: "none",
      },
    ],
  });
});

// hero section animation




let tl = gsap.timeline();

tl.from(".hero-section .gsap-fadeIn",{
  opacity:0,
  y:100,
  duration:2,
  stagger:.5,
  ease:"power2.inOut"
})


gsap.to(".hero-section .marbel-1", {
  scrollTrigger: {
  trigger:".hero-section",
  start: "top 30%",
  endTrigger:".about",
  end: "top center",
  scrub:1,
  },
  y:300,
  ease:"power2.inOut",
  duration:5,
});

gsap.to(".about .abstract-1", {
  scrollTrigger: {
  trigger:".about",
  start: "top 60%",
  endTrigger:".services",
  end: "top center",
  scrub:1,
  },
  rotate:100,
  ease:"power2.inOut",
  duration:20,
});


let scrollTl = gsap.timeline();

scrollTl.from(".about .slideup-scroll",{
y:200,
opacity:0,
ease:"power2.inOut",
duration:3,
stagger:.5
})

ScrollTrigger.create({
  animation: scrollTl,
  trigger: ".about",
  start: "top 70%",
  end: "+=300px",
  scrub: 2,
  
});


// services

let servicesScroll = gsap.timeline();

servicesScroll.from(".services .slideup-scroll",{
y:100,
opacity:0,
ease:"power2.inOut",
duration:10,

})

ScrollTrigger.create({
  animation: servicesScroll,
  trigger: ".services",
  start: "top center",
  end: "+=300px",
  scrub: 2,
});






// projects



gsap.to(".projects .title",{
scrollTrigger:{
  trigger:".projects h1",
  start:"top center",
  end:"+=300",
  scrub:true,
  
},
opacity:0,
duration:3,
ease:"power2.inOut",
})

let stickyLogo = document.querySelector(".projects .sticky-atum")

gsap.to(".projects .sticky-atum",{
scrollTrigger:{
  trigger:".projects .sticky-atum",
  start:"center center",
  endTrigger:".portfolio",
  end:"top bottom",
  scrub:true,
  pin:true,
  pinSpacing:false,
  onEnd:()=> stickyLogo.remove()
},
})















