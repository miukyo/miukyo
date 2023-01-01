<script setup>
import { RouterLink, RouterView } from "vue-router";
import { Icon } from "@iconify/vue";
import { reactive, ref, Transition, watch, onMounted, onUpdated } from "vue";
import anime from "animejs";
import { useRoute } from "vue-router";

import NavbarMenu from "./components/NavbarMenu.vue";

function animIn(el, done) {
  anime({
    targets: el,
    opacity: [0, 1, 0, 1],
    position: "absolute",
    duration: 200,
    easing: "steps(4)",
    complete: done,
  });
}

function animOut(el, done) {
  anime({
    targets: el,
    opacity: [1, 0, 1, 0],
    position: "absolute",
    duration: 200,
    easing: "steps(4)",
    complete: done,
  });
}

function animIntroOut(el, done) {
  anime({
    targets: el,
    translateY: [0, -30],
    opacity: [1, 0],
    duration: 300,
    delay: () => { return anime.random(0, 200) },
    easing: "easeOutCubic",
    complete: done,
  })
}

function animIntroIn(el, done) {
  anime({
    targets: el,
    translateY: [30, 0],
    opacity: [0, 1],
    duration: 300,
    delay: () => { return anime.random(0, 200) },
    easing: "easeOutCubic",
    complete: done,
  })
}

const openMenu = reactive({ open: false });
const intro = reactive({ open: true });

const morse = ['.... .', '.-..', '.-..', '-- - ']
const ms = reactive({ val: 0 });

onMounted(() => {

  const a = setInterval(() => {
    ms.val++
    if (ms.val >= 4) {
      clearInterval(a)
      intro.open = false
    }
    console.log(ms.val)
  }, 800)

});


</script>


<template>
  <!-- ?Intro  -->
  <Transition @leave="animOut">
    <div v-if="intro.open"
      class="w-screen h-screen flex justify-center items-center top-0 left-0 fixed z-50 bg-neutral-200">
      <h1 v-for="(e, i) in morse" class="text-5xl font-bold flex absolute">
        <TransitionGroup @leave="animIntroOut" @enter="animIntroIn">
          <span class="min-w-[12px]" :key="i" v-if="i === ms.val" v-for="(c, r) in e">{{ c }}</span>
        </TransitionGroup>
      </h1>
      <div class="bottom-10 absolute w-1/3">
        <span class="w-full flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-7 h-7">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
        </span>
        <p class="text-center leading-2 mt-2 font-semibold text-xs">This website may contain flashing lights and other
          potentially
          seizure-inducing content.
          If you have epilepsy,
          please be cautious when viewing this website.</p>
      </div>
    </div>
  </Transition>

  <!-- ?Noise Overlay  -->
  <div class="noise"></div>

  <div v-if="!intro.open" class="relative m-5 overflow-hidden rounded-2xl">

    <!-- ?Menu Bar -->
    <Transition name="menuBlur">
      <div v-if="openMenu.open" @click="openMenu.open = false"
        class="fixed left-0 top-0 z-50 h-full w-full bg-white bg-opacity-30 backdrop-blur-[2px]"></div>
    </Transition>
    <Transition name="menu">
      <NavbarMenu @open="openMenu.open = false" v-if="openMenu.open" />
    </Transition>
    <div
      class="border border-neutral-500 h-[calc(100%-2.5rem)] w-[calc(100%-2.5rem)] fixed z-40 rounded-2xl pointer-events-none">
    </div>

    <!-- ?Main Wrapper  -->
    <div class="main relative overflow-y-auto rounded-2xl">

      <!-- ?Navbar Button -->
      <button @click="openMenu.open = !openMenu.open"
        class="group fixed left-5 z-[60] grid h-[100px] w-[100px] place-items-center rounded-tl-2xl text-3xl font-bold transition-all duration-200 ease-in-out"
        :class="{ 'left-[34.5%] delay-75': openMenu.open }">
        <svg class="burger-btn scale-75 fill-neutral-500 group-hover:fill-black"
          :class="{ active: openMenu.open, 'group-hover:fill-white': openMenu.open, }" width="30" height="60"
          viewBox="0 0 40 26" xmlns="http://www.w3.org/2000/svg">
          <rect class="burger-btn--1" width="40" height="3" rx="2" ry="3" />
          <rect class="burger-btn--2" width="30" height="3" y="10" rx="2" ry="3" />
          <rect class="burger-btn--3" width="40" height="3" y="20" rx="2" ry="3" />
        </svg>
      </button>

      <!-- ?Navbar  -->
      <div class="navbar">
        <RouterLink to="/" @click="openMenu.open = false"
          class="text-black-500 relative h-fit text-center text-xl font-bold uppercase tracking-tighter transition-colors">
          Miukyo
        </RouterLink>
        <div class="absolute right-12 flex gap-10 text-sm font-bold uppercase tracking-tighter">
          <RouterLink to="/" @click="openMenu.open = false"
            class="h-fit text-center text-neutral-500 transition-colors hover:text-black">
            Home
          </RouterLink>
          <RouterLink to="/about" @click="openMenu.open = false"
            class="h-fit text-center text-neutral-500 transition-colors hover:text-black">
            About
          </RouterLink>
          <RouterLink to="/works" @click="openMenu.open = false"
            class="h-fit text-center text-neutral-500 transition-colors hover:text-black">
            Works
          </RouterLink>
          <RouterLink to="/" @click="openMenu.open = false"
            class="h-fit text-center text-neutral-500 transition-colors hover:text-black">
            Contact
          </RouterLink>
        </div>
      </div>

      <!-- ?Route View  -->
      <div class="view">
        <RouterView v-slot="{ Component }">
          <Transition name="view" @enter="animIn" @leave="animOut" appear>
            <component :is="Component"></component>
          </Transition>
        </RouterView>
      </div>

      <!-- ?Bottom Deco  -->
      <div class="fixed bottom-10 left-12 z-[60] -mb-1 flex gap-5 text-xs font-bold uppercase tracking-tighter">
        <a target="_blank" href="#"
          class="group relative flex w-fit flex-col items-center text-neutral-500 transition-colors"
          :class="[openMenu.open ? 'hover:text-white' : 'hover:text-black']">
          github
        </a>
        <a target="_blank" href="#"
          class="group relative flex w-fit flex-col items-center text-neutral-500 transition-colors"
          :class="[openMenu.open ? 'hover:text-white' : 'hover:text-black']">
          twitter
        </a>
        <a target="_blank" href="#"
          class="group relative flex w-fit flex-col items-center text-neutral-500 transition-colors"
          :class="[openMenu.open ? 'hover:text-white' : 'hover:text-black']">
          Instagram
        </a>
      </div>
      <div class="fixed bottom-10 right-12 z-50">
        <p class="text-right text-xs font-bold uppercase tracking-tighter text-neutral-500">
          @2022 dec
        </p>
        <!-- <img alt=""  src="barcode.svg" /> -->
      </div>


    </div>
  </div>
</template>

<style scoped>
.cursor {
  @apply pointer-events-none fixed z-[999] aspect-square w-4 origin-center -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-invert;
}

.menu-enter-active,
.menu-leave-active {
  transition: all 0.2s ease-in-out;
}

.menu-enter-from,
.menu-leave-to {
  overflow: hidden;
  max-width: 0%;
}

.menu-enter-to,
.menu-leave-from {
  overflow: hidden;
  max-width: 40%;
}

.menuBlur-enter-active,
.menuBlur-leave-active {
  transition: all 0.5s ease;
}

.menuBlur-enter-from,
.menuBlur-leave-to {
  opacity: 0;
}

.view-enter-active,
.view-leave-active {
  @apply absolute;
}

.main {
  @apply flex h-[calc(100vh-2.5rem)] w-full flex-col overflow-y-scroll bg-neutral-200;
}

.noise {
  @apply pointer-events-none fixed -top-1/2 -left-1/2 -bottom-1/2 -right-1/2 z-[99] h-[200vh] w-[200vw];
  background: url("nnnoise.svg");
  background-repeat: repeat;
  animation: 0.2s m linear infinite;
}

.navbar {
  @apply sticky top-0 left-0 z-30 flex h-[100px] w-full flex-shrink-0 items-center justify-center border-b border-neutral-400 bg-neutral-200 bg-opacity-90 backdrop-blur-sm;
}

.burger-btn rect {
  @apply origin-center transition-all duration-300;
}

.burger-btn.active .burger-btn--1 {
  transform: translate(-9px, 7px) rotate(45deg);
}

.burger-btn.active .burger-btn--2 {
  transform: translateX(20px);
  opacity: 0;
}

.burger-btn.active .burger-btn--3 {
  transform: translate(-7px, -7px) rotate(-45deg);
}

@keyframes m {
  from {
    transform: translate(0%, 0%);
  }

  to {
    transform: translate(20%, 20%);
  }
}

.view {
  @apply relative flex w-full flex-grow;
}
</style>
