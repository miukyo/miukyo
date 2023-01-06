<script setup>
import { onMounted, onUnmounted, computed, reactive, ref } from 'vue';
import anime from 'animejs';


const currentView = reactive({ value: 0 })


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
    onSwipe()
    anime.suspendWhenDocumentHidden = false
});

const a = setInterval(() => {
    console.log('focus')
    if (currentView.value < 5) {
        currentView.value++
    } else {
        currentView.value = 0
    }
    onSwipe()
}, 3000)

document.onvisibilitychange = () => {
    if (!document.hidden) {
        anime.remove(anime.running)
    }
}
onUnmounted(() => {
    clearInterval(a)
})

function animSlide(el) {
    anime({
        targets: el,
        opacity: [0, 1, 0, 1],
        delay: anime.stagger(50),
        easing: "steps(4)",
        duration: 100,
    });
}

async function onSwipe() {
    let t = '#pag' + currentView.value
    // anime({
    //     targets: '.details>div',
    //     opacity: [0, 1, 0, 1],
    //     delay: anime.stagger(50),
    //     easing: "steps(4)",
    //     duration: 200,
    // });

    anime({
        targets: t,
        width: ['0', '100%'],
        easing: "linear",
        delay: 300,
        duration: 3000 - 300,
        complete: () => {
            anime({
                targets: t,
                scaleX: [1, 0],
                easing: "easeOutCubic",
                duration: 300,
                complete: () => {
                    anime.set(t, { scaleX: 1, width: 0 })
                }
            });
        }
    });
}


</script>


<template>
    <div id="Works" class="pt-5 pb-10 lg:py-14 px-5 lg:px-14 w-full">

        <!-- ?Overlay WIP -->
        <div
            class="absolute z-40 left-0 top-0 h-full w-full bg-black bg-opacity-70 backdrop-blur-sm backdrop-saturate-0 grid place-items-center">
            <p class="invert text-5xl font-bold tracking-tighter">WORK IN PROGRESS</p>
        </div>

        <h1 class="text-7xl lg:text-8xl tracking-tighter font-bold mb-5">Works</h1>
        <div class="grid grid-flow-row lg:grid-cols-3 relative">
            <div class="flex flex-col lg:pr-5 font-bold order-2 lg:order-none">
                <div class="details">
                    <div class="mt-5 lg:mt-0">
                        <p class="text-neutral-500 text-xs lg:text-sm tracking-tighter">Title</p>
                        <h1 class="text-xl lg:text-2xl tracking-tighter">Lorem ipsum dolor sit amet, consectetur
                            adipisicing
                            elit.</h1>
                    </div>
                    <div class="mt-5 lg:mt-10">
                        <p class="text-neutral-500 text-xs lg:text-sm tracking-tighter">Description</p>
                        <h1 class="text-sm text-justify lg:text-base tracking-tighter">Lorem ipsum dolor sit amet
                            consectetur
                            adipisicing
                            elit. Ipsa vel unde eveniet vero. Atque sequi harum vitae sed velit, dolore aut
                            necessitatibus
                            aliquid fugiat est officia optio doloremque quos! Soluta.
                            elit.</h1>
                    </div>
                    <div class="mt-5 lg:mt-10">
                        <p class="text-neutral-500 text-xs lg:text-sm tracking-tighter">Tools</p>
                        <ul class="text-sm lg:text-base grid grid-cols-2 list-inside list-[square]">
                            <li>Photoshop</li>
                            <li>Illustrator</li>
                            <li>Dribbble</li>
                        </ul>
                    </div>
                    <div class="mt-5 lg:mt-10">
                        <p class="text-neutral-500 text-xs lg:text-sm tracking-tighter">Times to make</p>
                        <h1 class="text-sm text-justify lg:text-base tracking-tighter">Around ±1 Day</h1>
                    </div>
                    <div class="mt-5 lg:mt-10">
                        <p class="text-neutral-500 text-xs lg:text-sm tracking-tighter">Commissioned by</p>
                        <h1 class="text-sm text-justify lg:text-base tracking-tighter">---</h1>
                    </div>
                </div>
            </div>
            <div class="lg:col-span-2 order-1 lg:-mt-20">
                <template v-for="e in [0, 1, 2, 3, 4, 5]">
                    <Transition :css="false" @enter="animSlide">
                        <div :key="e" v-show="e === currentView.value" class="rounded overflow-hidden"> <img
                                class="rounded" :src="'https://unsplash.it/1280/720?random=' + e" />
                        </div>
                    </Transition>
                </template>
                <div class="flex gap-3 lg:gap-5 items-center mt-3">
                    <span class="font-bold text-[0.6rem] lg:text-xs text-neutral-400">00{{
                        currentView.value + 1
                    }}/006</span>
                    <div class="grid w-full h-px bg-neutral-400"
                        :style="{ gridTemplateColumns: 'repeat(' + 6 + ', minmax(0, 1fr))' }">
                        <template v-for="e in [0, 1, 2, 3, 4, 5]">
                            <div :id="'pag' + e" class="bg-black max-w-full origin-[center_right] w-0"></div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style>
/* .swiper {
    @apply col-span-2 m-0 flex flex-col h-fit;
}

.swiper-pagination {
    @apply mt-8 grid-flow-col grid bg-neutral-300;
    position: relative !important;
}

.swiper-pagination-bullet {
    @apply max-w-full rounded-none h-1 m-0 origin-[center_right] !important;
}

.swiper-pagination-bullet:not(.swiper-pagination-bullet-active) {
    @apply bg-transparent !important;
}

.swiper-pagination-bullet-active {
    @apply bg-black;
} */
</style>
