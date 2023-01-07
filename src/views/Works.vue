<script setup>
import { onMounted, reactive } from "vue";
import anime from "animejs";
import works from "../assets/works.json";

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
        targets: "#Works img",
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
        <h1 class="mt-8 lg:mt-14 text-7xl text-center lg:text-start lg:text-[10rem] font-bold tracking-tight font-con">WORKS</h1>
        <div class="flex flex-col mt-5">
            <div v-for="(e, i) in works.reverse()" :key="i" class="flex flex-col lg:last-of-type:mb-28 lg:mb-16 mb-5">
                <div class="grid grid-cols-2 rounded overflow-hidden">
                    <img class="w-full h-full object-cover col-span-2 lg:col-span-1" alt="wimg1" :src="e.vid" />
                    <img class="w-full h-full object-cover hidden lg:block" alt="wimg2" :src="e.image" />
                </div>
                <div class="flex gap-5 lg:gap-20 mt-3  lg:mt-5 ">
                    <p class="text-xs lg:text-base text-neutral-500 font-medium tracking-tighter leading-none">
                        {{ e.createdAt }}
                    </p>
                    <div class="flex flex-col">
                        <p class="text-xs lg:text-base font-medium tracking-tighter text-neutral-500">{{ e.type }}</p>
                        <h1 class="text-2xl lg:text-5xl font-bold tracking-tight font-con lg:leading-none">{{ e.title }}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
