<script setup>
import { gsap } from "gsap-trial";

import { ScrollTrigger } from "gsap-trial/ScrollTrigger";

/* The following plugin is a Club GSAP perk */
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";


gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

</script>

<template>
  <header class="flex size-full">
    <div class="px-[10vw]">
      <img src="/hero.png" alt="hero" class="w-1/2 left-[37vw] top-[8vh] absolute"/>
      <h1 class="text-textColor leading-[.9] text-[10vw] top-[15vh] md:top-[27vh] xl:top-[45vh] font-bold font-outfit absolute w-min">creative scroll</h1>
    </div>
  </header>
  <main class="flex">
    <div class="flex-1">
      1sd
    </div>
    <div class="flex 1">
      sdfa
    </div>
  </main>

</template>