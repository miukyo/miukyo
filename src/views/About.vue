<script setup>
import { onMounted } from 'vue';
import anime from 'animejs';


onMounted(() => {
  anime({
    targets: "#About h1,#About p,#About a,#About button",
    translateX: [300, 0],
    opacity: [0, 1, 0, 1],
    delay: anime.stagger(50, { from: 5 }),
    easing: "steps(4)",
    duration: 300,
  });
  anime({
    targets: "#About img",
    translateY: [300, 0],
    delay: 100,
    easing: "steps(4)",
    duration: 300,
  });
});
</script>

<template>
  <div id="About" class="px-5 lg:px-14">
    <h1 class="mt-8 lg:mt-14 text-7xl text-center lg:text-start lg:text-[10rem] font-bold tracking-tight font-con">
      ABOUT ME</h1>
    <div class="grid grid-flow-row lg:grid-cols-2">
      <div class="grid grid-flow-row order-2 lg:order-none">
        <div>
          <p class="text-justify font-medium leading-snug tracking-tight text-neutral-700">
            Hi There! I’m Zaid, but usually go by “Miukyo” online.
            <br />
            <span class="block h-3" />
            I'm specialize in graphic design and web programming with a passion
            for creating beautiful and stunning designs. i have been specialize in
            the field for 2 years and have already gained a great deal of
            experience and knowledge.
            <br />
            <span class="block h-3" />
            I'm constantly looking for ways to improve my skills and stay
            up-to-date with the latest trends in designs and technology. I am a
            hardworking and dedicated individual who is eager to learn and grow in
            my field. I am excited to bring my passion and expertise to any
            project and help create successful and engaging online experiences.
          </p>
        </div>
        <div class="mt-10 lg:mt-0 lg:place-self-center">
          <!-- <h1 class="text-5xl font-bold tracking-tight font-con">SOCIALS</h1> -->
          <div class="flex justify-between flex-wrap lg:grid grid-cols-5 mt-2 text-sm font-bold text-neutral-700">
            <a target="_blank" href="https://www.instagram.com/_miu.kyo"
              class="w-fit transition-colors hover:text-black">
              Instagram
            </a>
            <a target="_blank" href="https://twitter.com/miuky0" class="w-fit transition-colors hover:text-black">
              Twitter
            </a>
            <a target="_blank" href="https://www.facebook.com/Miuky0/" class="w-fit transition-colors hover:text-black">
              Facebook
            </a>
            <a target="_blank" href="https://discord.com/users/395407295867256833"
              class="w-fit transition-colors hover:text-black">
              Discord
            </a>
            <a target="_blank" href="https://github.com/miukyo" class="w-fit transition-colors hover:text-black">
              Github
            </a>
          </div>
          <div class="mt-3 grid lg:grid-cols-2">
            <p class="text-sm font-medium text-neutral-700 text-justify lg:text-start">
              — I'm currently looking for new remote position as a Front-End
              Developer or Graphic Designer. I'm looking forward to have amazing
              project with you!
              <br />
              <span class="block h-3" />
              Last Update, 12/30/22
            </p>
            <div class="grid place-items-center my-10 lg:my-0">
              <a href="mailto:contact@miukyo.my.id"
                class="rounded-full border border-neutral-500 px-4 py-1 font-medium text-neutral-700 transition-colors hover:bg-neutral-700 hover:text-white">
                contact@miukyo.my.id
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="overflow-hidden my-5 lg:my-0 lg:ml-10 lg:-mt-36">
        <img src="../assets/saya.jpg" alt="me"
          class="w-full lg:h-[700px] h-[350px] overflow-hidden rounded object-center object-cover" />
      </div>
    </div>
  </div>
</template>

<style>
#About h1,
#About p,
#About a,
#About button {
  @apply relative z-10
}
</style>
