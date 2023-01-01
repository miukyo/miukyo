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
  <div id="About" class="grid h-full grid-cols-2 px-14">
    <div class="my-14 grid grid-flow-row">
      <div>
        <h1 class="text-8xl font-bold tracking-tighter">About me</h1>
        <p class="mt-5 text-justify font-bold leading-snug tracking-tight text-neutral-700">
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
      <!-- <h1 class="text-2xl font-bold tracking-tighter mt-5">Experiences</h1>
      <div class="flex flex-col text-neutral-700">
        <div class="grid grid-cols-3 font-bold text-sm ">
          <p>Yume Reality Entertaiment</p>
          <p class="place-self-center">Graphic & Product Designer</p>
          <p class="place-self-end">"20—22</p>
        </div>
        <div class="grid grid-cols-3 font-bold text-sm">
          <p>Freelance</p>
          <p></p>
          <p class="place-self-end">"19—22</p>
        </div>
      </div>
      <h1 class="text-2xl font-bold tracking-tighter mt-5">Things i use</h1>
      <div class="grid grid-cols-4 font-bold text-sm text-neutral-700">
        <p>Visual Studio Code</p>
        <p>Figma</p>
        <p>Photoshop</p>
        <p>Awwwards</p>
        <p>Dribbble</p>
        <p>Webflow</p>
        <p>And much more...</p>
      </div> -->
      <div class="place-self-center">
        <h1 class="text-2xl font-bold tracking-tighter">Socials</h1>
        <div class="grid grid-cols-4 text-sm font-bold text-neutral-700">
          <a target="_blank" href="/" class="w-fit transition-colors hover:text-black">
            Instagram
          </a>
          <a target="_blank" href="/" class="w-fit transition-colors hover:text-black">
            Twitter
          </a>
          <a target="_blank" href="/" class="w-fit transition-colors hover:text-black">
            Facebook
          </a>
          <a target="_blank" href="/" class="w-fit transition-colors hover:text-black">
            Discord
          </a>
          <a target="_blank" href="/" class="w-fit transition-colors hover:text-black">
            Github
          </a>
        </div>
        <div class="mt-3 grid grid-cols-2">
          <p class="text-sm font-bold text-neutral-700">
            — I'm currently looking for new remote position as a Front-End
            Developer or Graphic Desinger. I'm looking forward to have amazing
            project with you!
            <br />
            <span class="block h-3" />
            Last Update, 12/30/22
          </p>
          <div class="grid place-items-center">
            <button
              class="rounded-full border border-neutral-500 px-4 py-1 font-bold text-neutral-700 transition-colors hover:bg-neutral-700 hover:text-white">
              contact@miukyo.my.id
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="ml-10 mt-12 h-[700px] overflow-hidden rounded object-cover">
      <img src="saya.jpg" alt="me" class="rounded" />
    </div>
  </div>
</template>

<style>
#About h1,#About p,#About a,#About button {
  @apply relative z-10
}

</style>
