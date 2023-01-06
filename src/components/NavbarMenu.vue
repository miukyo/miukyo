<script setup>
import anime from "animejs";
import { watch, ref, toRefs, reactive, onMounted } from "vue";
import { RouterLink } from "vue-router";
import { useRoute } from "vue-router";
defineEmits(["open"]);
const nav = ref(null);

onMounted(() => {
  anime({
    targets: ".menuLink,.disc",
    translateX: [300, 0],
    opacity: [0, 1, 0, 1],
    '--tw-bg-opacity': [0, 1, 0, 1],
    delay: anime.stagger(50, { start: 100, from: anime.random(1, 4) }),
    easing: "steps(4)",
    duration: 300,
  });
});

function hoverAnim(el) {
  anime({
    targets: el.target,
    opacity: [0, 1, 0, 1],
    easing: "steps(4)",
    duration: 200,
  });
}

const links = [
  { name: "home", link: "/", width: "230px" },
  { name: "about", link: "/about", width: "265px" },
  { name: "works", link: "/works", width: "280px" },
];
</script>

<template>
  <div
    class="absolute z-[60] h-screen lg:h-[calc(100vh-2.5rem)] w-full lg:w-2/5 overflow-hidden lg:rounded-2xl border-b border-black bg-neutral-900"
    ref="nav">
    <h1 class="absolute -left-10 -bottom-24 text-[20rem] font-bold leading-none tracking-tighter text-white opacity-5 pointer-events-none">
      2023
    </h1>
    <button @click="$emit('open')"
      class="group absolute right-8 top-8 grid place-items-center rounded-tl-2xl">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
        class="w-6 h-6 fill-neutral-500 group-hover:fill-white transition-colors">
        <path fill-rule="evenodd"
          d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
          clip-rule="evenodd" />
      </svg>
    </button>
    <div class="flex h-full flex-col text-white">
      <p class="disc absolute top-10 mt-0.5 ml-10 lg:ml-14 text-xs tracking-tight">
        DISCOVER
      </p>
      <div class="ml-10 lg:ml-14 mt-32 flex flex-col text-7xl font-bold leading-none tracking-tighter">
        <RouterLink @mouseover="hoverAnim" v-for="(e, i) in links" :key="i" :to="e.link" @click="$emit('open')"
          ref="linkA"
          class="menuLink group relative -ml-2 mb-2 w-fit rounded pl-2 pr-3 uppercase opacity-0 transition-all duration-[0ms] hover:bg-white hover:text-black focus:bg-white focus:text-black"
          :class="{ 'bg-white text-black': useRoute().name === e.name }" :style="{ width: e.width }">
          {{ e.name }}
          <span
            class="absolute -right-10 top-1.5 text-xs font-normal leading-4 tracking-tight text-white group-hover:block"
            :class="[useRoute().name === e.name ? 'block' : 'hidden']">
            PAGE
            <br />
            00{{ i + 1 }}
          </span>
        </RouterLink>
        <p @mouseover="hoverAnim" ref="linkA"
          class="menuLink cursor-not-allowed group relative -ml-2 mb-2 w-fit rounded pl-2 pr-3 uppercase opacity-0 transition-all duration-[0ms] hover:bg-red-500 hover:text-black focus:bg-red-500 focus:text-black"
          :style="{ width: 280 }">
          BLOG
          <span
            class="hidden absolute -right-14 top-1.5 text-xs font-normal leading-4 tracking-tight text-red-500 group-hover:block">
            COMING
            <br />
            SOON
          </span>
        </p>
      </div>
      <button class="group absolute bottom-3 right-8 grid place-items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-neutral-500 group-hover:stroke-white transition-colors">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
