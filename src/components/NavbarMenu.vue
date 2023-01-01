<script setup>
import anime from "animejs";
import { watch, ref, toRefs, reactive, onMounted } from "vue";
import { RouterLink } from "vue-router";
import { useRoute } from "vue-router";
defineEmits(["open"]);
const nav = ref(null);

onMounted(() => {
  anime({
    targets: "a.menuLink,.disc",
    translateX: [300, 0],
    opacity: [0, 1, 0, 1],
    delay: anime.stagger(50, { start: 100, from: anime.random(1, 4) }),
    easing: "steps(4)",
    duration: 300,
  });
});

const links = [
  { name: "home", link: "/", width: "230px" },
  { name: "about", link: "/about", width: "265px" },
  { name: "works", link: "/works", width: "280px" },
  { name: "contact", link: "/", width: "360px" },
];
</script>

<template>
  <div
    class="absolute z-[60] h-[calc(100vh-2.5rem)] w-2/5 overflow-hidden rounded-2xl border-b border-black bg-neutral-900"
    ref="nav">
    <h1 class="absolute -left-10 -bottom-24 text-[20rem] font-bold leading-none tracking-tighter text-white opacity-10">
      2023
    </h1>
    <div class="flex h-full flex-col text-white">
      <p class="disc absolute top-10 mt-0.5 ml-14 text-xs tracking-tight">
        DISCOVER
      </p>
      <div class="ml-14 mt-32 flex flex-col text-7xl font-bold leading-none tracking-tighter">
        <RouterLink v-for="(e, i) in links" :key="i" :to="e.link" @click="$emit('open')" ref="linkA"
          class="menuLink group relative -ml-2 mb-2 w-fit rounded pl-2 pr-3 uppercase opacity-0 transition-all duration-[0ms] hover:bg-white hover:text-black focus:bg-white focus:text-black"
          :class="{ 'bg-white text-black': useRoute().name === e.name }" :style="{ width: e.width }">
          <div>
            {{ e.name }}
          </div>
          <span
            class="absolute -right-10 top-1.5 text-xs font-normal leading-4 tracking-tight text-white group-hover:block"
            :class="[useRoute().name === e.name ? 'block' : 'hidden']">
            PAGE
            <br />
            00{{ i + 1 }}
          </span>
        </RouterLink>
        <RouterLink to="#" @click="$emit('open')" ref="linkA"
          class="menuLink group relative -ml-2 mb-2 w-fit rounded pl-2 pr-3 uppercase opacity-0 transition-all duration-[0ms] hover:bg-red-500 hover:text-black focus:bg-red-500 focus:text-black"
          :style="{ width: 280 }">
          <div>
            BLOG
          </div>
          <span
            class="hidden absolute -right-14 top-1.5 text-xs font-normal leading-4 tracking-tight text-red-500 group-hover:block">
            COMING
            <br />
            SOON
          </span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
