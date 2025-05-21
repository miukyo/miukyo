<script setup>
import { onMounted } from "vue";
import anime from "animejs";

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
    <div class="grid lg:grid-cols-2">
      <div class="flex flex-col">
        <h1
          class="lg:mt-14 text-[28vw] text-center lg:text-start lg:text-[10rem] font-bold leading-none tracking-tighter font-display">
          ABOUT ME
        </h1>

        <p className="text-2xl text-justify lg:text-4xl tracking-tighter lg:text-left mt-8">
          Multifaceted Digital Contributor specialized in design and development. I create visually
          compelling content and user-centric interfaces. I transform ideas into stunning visuals,
          ensuring seamless digital experiences.
          <br />
          <br />
          Currently looking for work.
          <span className="text-neutral-500 ml-2 text-xl">(5/2025)</span>
        </p>
        <div className="grid grid-cols-3 mt-12 text-xs lg:text-sm text-neutral-500">
          <p>
            MUHAMMAD
            <br />
            ZAID
          </p>
          <div className="[&_a]:w-fit [&_a]:block [&_a]:transition-colors [&_a:hover]:text-black">
            <a href="mailto:zaidaliyhijja@gmail.com">EMAIL</a>
            <a href="https://github.com/miukyo">GITHUB</a>
            <a href="https://www.instagram.com/_miu.kyo/">INSTAGRAM</a>
            <a href="https://x.com/miuky0">TWITTER</a>
          </div>
          <div>
            <p>25TH JANUARY, 2005</p>
            <p>KUDUS</p>
            <p>INDONESIA</p>
          </div>
        </div>
      </div>

      <div class="overflow-hidden my-5 lg:my-0 lg:ml-10 lg:mt-10">
        <img
          src="../assets/saya.jpg"
          alt="me"
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
  @apply relative z-10;
}
</style>
