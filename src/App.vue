<script setup>
import { gsap } from "gsap-trial";

import { ScrollTrigger } from "gsap-trial/ScrollTrigger";

import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import {onMounted, onUnmounted, ref} from "vue";

gsap.registerPlugin(ScrollTrigger,ScrollSmoother);
const main = ref();
let smoother;
let ctx;
if(ScrollTrigger.isTouch !== 1) {
  onMounted(() => {
    ctx = gsap.context(() => {
      smoother = ScrollSmoother.create({
        smooth: 2,
        effects: true,
      });
    }, main.value);
    gsap.fromTo('#hero-section', { opacity: 1 }, {
      opacity: 0,
      scrollTrigger: {
        trigger: "#hero-section",
        start: '200',
        end: '800',
        scrub: true
      }
    });

    let itemsL = gsap.utils.toArray('#gallery__left .gallery__item')
    itemsL.forEach(item => {
      gsap.fromTo(item, { x: -250, opacity: -4 }, {
        opacity: 1,  x: 0,
        scrollTrigger: {
          trigger: item,
          start: '-600',
          end: 'top',
          scrub: true
        }
      });
    })

    let itemsR = gsap.utils.toArray('#gallery__right .gallery__item')
    itemsR.forEach(item => {
      gsap.fromTo(item, { x: 250, opacity: -4 }, {
        opacity: 1,  x: 0,
        scrollTrigger: {
          trigger: item,
          start: '-600',
          end: 'top',
          scrub: true
        }
      });
    })

  });


  onUnmounted(() => {
    ctx.revert();
  });
}

</script>

<template>
<header id="hero-section" class="flex size-full top-10 relative h-[250px] md:h-[500px] lg:h-[600px] xl:h-[800px] 2xl:h-[1000px]">
    <img data-speed=".75" src="/hero.png" alt="hero" class="w-1/2 left-[37vw] absolute z-[-1] will-change-transform"/>
    <h1 class="text-textColor leading-[.9] text-[10vw] left-[5vw] top-[15vh] md:top-[27vh] xl:top-[45vh] font-bold font-outfit absolute w-min">creative scroll</h1>
</header>
<main id="gallery" class="grid grid-cols-2  justify-items-center">
  <div id="gallery__left" class="w-[38vw] space-y-[5vh] md:space-y-[15vh] xl:space-y-[30vh] mt-[15vw] will-change-transform" data-speed=".9">
    <img src="/work/1.jpg" alt="work-1" class="gallery__item w-full rounded-xl">
    <img src="/work/2.jpg" alt="work-2" class="gallery__item w-full rounded-xl">
    <img src="/work/6.jpg" alt="work-6" class="gallery__item w-full rounded-xl">
  </div>
  <div id="gallery__right" class="w-[38vw] space-y-[5vh] md:space-y-[15vh] xl:space-y-[30vh] will-change-transform" data-speed="1.1">
    <div class="gallery__item space-y-[2vh]">
      <h1 class="text-textColor text-[3vw] leading-[.9] font-bold font-outfit">
        Creative floating scroll with amazing parallax effect
      </h1>
      <p class="text-textColor text-[2vw] leading-[.9]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor amount scrollina.
      </p>
    </div>
    <img src="/work/3.jpg" alt="work-3" class="gallery__item w-full rounded-xl">
    <img src="/work/4.jpg" alt="work-4" class="gallery__item w-full rounded-xl">
    <img src="/work/5.jpg" alt="work-5" class="gallery__item w-full rounded-xl">
  </div>
</main>
<footer class="h-[10vw]">

</footer>
</template>