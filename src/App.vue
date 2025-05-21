<script setup>
import { RouterLink, RouterView } from "vue-router";
import { reactive, ref, Transition, watch, onMounted, onUpdated } from "vue";
import anime from "animejs";

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


const openMenu = reactive({ open: false });


</script>

<template>
  <main class="max-w-[1920px] mx-auto relative">
    <!-- ?Noise Overlay  -->
    <!-- <div class="noise"></div> -->

    <div class="relative lg:m-5 rounded-2xl lg:overflow-hidden">
      <!-- ?Menu Bar -->
      <Transition name="menuBlur">
        <div
          v-if="openMenu.open"
          @click="openMenu.open = false"
          class="fixed left-0 top-0 z-50 h-full w-full bg-white bg-opacity-30 backdrop-blur-[2px]"
        ></div>
      </Transition>
      <Transition name="menu">
        <NavbarMenu @open="openMenu.open = false" v-if="openMenu.open" />
      </Transition>

      <!-- ?Border -->
      <div
        class="hidden lg:block border border-neutral-400 w-full h-full absolute z-40 rounded-2xl pointer-events-none"
      ></div>

      <!-- ?Main Wrapper  -->
      <div class="main relative overflow-y-auto rounded-2xl">
        <!-- ?Navbar  -->
        <div class="navbar">
          <!-- ?Navbar Button -->
          <button
            aria-label="menu"
            @click="openMenu.open = !openMenu.open"
            class="group absolute left-5 lg:left-12 grid place-items-center rounded-tl-2xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 fill-neutral-500 group-hover:fill-black transition-colors"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <RouterLink
            to="/"
            @click="openMenu.open = false"
            class="text-black-500 relative h-fit text-center text-xl font-bold uppercase tracking-tighter transition-colors"
          >
            Miukyo
          </RouterLink>
          <div
            class="hidden lg:flex absolute right-14 gap-10 text-sm font-bold uppercase tracking-tighter"
          >
            <RouterLink
              to="/"
              @click="openMenu.open = false"
              class="h-fit text-center text-neutral-500 transition-colors hover:text-black"
            >
              Home
            </RouterLink>
            <RouterLink
              to="/about"
              @click="openMenu.open = false"
              class="h-fit text-center text-neutral-500 transition-colors hover:text-black"
            >
              About
            </RouterLink>
            <RouterLink
              to="/works"
              @click="openMenu.open = false"
              class="h-fit text-center text-neutral-500 transition-colors hover:text-black"
            >
              Works
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
        <div
          class="absolute bottom-7 left-10 z-[60] -mb-1 hidden lg:flex gap-5 text-xs font-bold uppercase tracking-tighter"
        >
          <a
            href="mailto:zaidaliyhijja@gmail.com"
            class="group relative flex w-fit flex-col items-center text-neutral-500 transition-colors"
            :class="[openMenu.open ? 'hover:text-white' : 'hover:text-black']"
          >
            EMAIL
          </a>
          <a
            target="_blank"
            href="https://github.com/miukyo"
            class="group relative flex w-fit flex-col items-center text-neutral-500 transition-colors"
            :class="[openMenu.open ? 'hover:text-white' : 'hover:text-black']"
          >
            github </a
          ><a
            target="_blank"
            href="https://www.instagram.com/_miu.kyo"
            class="group relative flex w-fit flex-col items-center text-neutral-500 transition-colors"
            :class="[openMenu.open ? 'hover:text-white' : 'hover:text-black']"
          >
            Instagram
          </a>
          <a
            target="_blank"
            href="https://twitter.com/miuky0"
            class="group relative flex w-fit flex-col items-center text-neutral-500 transition-colors"
            :class="[openMenu.open ? 'hover:text-white' : 'hover:text-black']"
          >
            twitter
          </a>
        </div>
        <div class="hidden lg:block absolute bottom-7 right-10 z-[60]">
          <p class="text-right text-xs font-bold uppercase tracking-tighter text-neutral-500">
            @{{ new Date().getFullYear() }}
          </p>
          <!-- <img alt=""  src="barcode.svg" /> -->
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.view {
  @apply relative flex w-full flex-grow h-full overflow-x-hidden;
}

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
  @apply max-w-full lg:max-w-[40%];
  overflow: hidden;
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
  @apply flex h-screen lg:h-[calc(100vh-2.5rem)] w-full flex-col overflow-y-scroll bg-neutral-200;
}

/* .noise {
  @apply pointer-events-none fixed -top-1/2 -left-1/2 -bottom-1/2 -right-1/2 z-[99] h-[200vh] w-[200vw];
  background: url("nnnoise.svg");
  background-repeat: repeat;
  animation: 0.2s m linear infinite;
} */

.navbar {
  @apply sticky top-0 left-0 z-30 flex h-[100px] w-full flex-shrink-0 items-center justify-center border-b border-neutral-400 bg-neutral-200 bg-opacity-90 backdrop-blur-sm;
}

@keyframes m {
  from {
    transform: translate(0%, 0%);
  }

  to {
    transform: translate(20%, 20%);
  }
}
</style>
