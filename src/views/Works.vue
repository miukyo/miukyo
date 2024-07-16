<script setup>
import { onMounted, reactive } from "vue";
import anime from "animejs";
import works from "../assets/works.json";

const workLists = reactive({
  val: works.sort(function (a, b) {
    return b.id - a.id;
  }),
});
onMounted(() => {
  anime({
    targets: "#Works h1,#Works p,#Works a,#Works button, #Works li",
    translateX: [300, 0],
    opacity: [0, 1, 0, 1],
    delay: anime.stagger(50, { from: 5 }),
    easing: "steps(4)",
    duration: 300,
  });
  anime({
    targets: "#Works img, #Works video",
    translateY: [300, 0],
    // opacity: [0, 1, 0, 1],
    delay: anime.stagger(50, { start: 100 }),
    easing: "steps(4)",
    duration: 300,
  });
});
</script>

<template>
  <div id="Works" class="px-5 lg:px-14 w-full">
    <h1 class="lg:mt-14 text-[35vw] text-center lg:text-start lg:text-[10rem] font-bold leading-none tracking-tighter font-display">WORKS</h1>
    <div class="flex flex-col mt-5">
      <div v-for="(e, i) in workLists.val" :key="i" class="flex flex-col lg:mb-16 mb-5">
        <div class="grid grid-cols-2 gap-2">
          <video class="w-full h-full object-cover col-span-2 lg:col-span-1 rounded overflow-hidden" autoplay muted loop>
            <source :src="e.vid" type="video/webm" />
          </video>
          <img class="w-full h-full object-cover hidden lg:block rounded overflow-hidden" alt="wimg2" :src="e.image" />
        </div>
        <div class="flex just gap-5 lg:gap-20 mt-3 lg:mt-5">
          <div>
            <p class="text-xs lg:text-base text-neutral-500 font-medium tracking-tighter leading-none">
              {{ e.createdAt }}
            </p>
            <div class="flex [&_a]:text-xl text-neutral-500 [&_a]:transition-colors [&_a:hover]:text-black">
              <a target="_blank" v-if="e.github" :href="e.github">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
                </svg>
              </a>
              <a target="_blank" v-if="e.web" :href="e.web">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.92 7.92 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8 8 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.7 15.7 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2" />
                </svg>
              </a>
            </div>
          </div>
          <div class="flex flex-col">
            <p class="text-xs lg:text-base font-medium tracking-tighter text-neutral-500">
              {{ e.type }}
            </p>
            <h1 class="text-2xl lg:text-5xl font-bold font-display tracking-tighter lg:leading-none uppercase">
              {{ e.title }}
            </h1>
          </div>
        </div>
      </div>
      <h1 class="relative text-sm lg:text-lg font-bold tracking-tight font-con lg:leading-none text-center lg:mb-20">
        See old works at
        <a target="_blank" href="https://drive.google.com/drive/folders/1am9MynmYysocyPBcQ_TxChs_JP7EEVeG?usp=drive_link" class="w-fit transition-colors text-neutral-500 hover:text-black"> here </a>
      </h1>
    </div>
  </div>
</template>
