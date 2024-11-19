<script setup>
import { gsap } from "gsap-trial";

import { ScrollTrigger } from "gsap-trial/ScrollTrigger";

/* The following plugin is a Club GSAP perk */
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";


gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

</script>

<template>
  <main class="flex bg-background bg-20px size-full justify-between">
    <h1 class="text-textColor text-[100%]">Creative scroll</h1>
    <img src="/hero.png" alt="hero" class="w-1/3" />
  </main>
</template>