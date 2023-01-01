<script setup>
import { onMounted } from 'vue';
import anime from 'animejs';

onMounted(() => {
    anime({
        targets: "#Works h1:not(.lists h1),#Works p:not(.lists p),#Works a:not(.lists a),#Works button:not(.lists button)",
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
    <div id="Works" class="my-14 px-14 w-full">
        <h1 class="text-8xl font-bold tracking-tighter">Works</h1>
        <div class="grid grid-cols-2">
            <div>
                <div class="flex justify-between items-start p-5 pb-32">
                    <p class="flex items-center gap-2 font-bold text-xs"><span class="block w-1 h-1 bg-black" />10
                        available</p>
                    <div class="flex flex-col justify-end font-bold text-3xl text-neutral-500 leading-none">
                        <button class="hover:text-black text-black text-right transition-colors">NEWEST</button>
                        <button class="hover:text-black text-right transition-colors">GRAPHICAL</button>
                        <button class="hover:text-black text-right transition-colors">DEVELOPMENT</button>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div
                        class="group relative p-5 leading-snug tracking-tighter hover:bg-black hover:scale-[1.02] hover:text-white transition-all rounded lists">
                        <img class="aspect-video object-cover rounded relative z-10" alt=""
                            src="https://unsplash.it/1280/720/?random=2" />
                        <div class="flex justify-between items-center text-[0.7rem] tracking-tight mt-2 -mb-1">
                            <p class="flex items-center gap-1"><span
                                    class="block w-1 h-1 bg-black group-hover:bg-white transition-colors" />Graphical
                            </p>
                            <p>22.15.01</p>
                        </div>
                        <h1 class="text-xl font-bold">Lorem Ipsum Dolor : Sit amet consectetur adipisicing elit.</h1>
                    </div>
                    <div
                        class="group relative p-5 leading-snug tracking-tighter hover:bg-black hover:scale-[1.02] hover:text-white transition-all rounded lists">
                        <img class="aspect-video object-cover rounded relative z-10" alt=""
                            src="https://unsplash.it/1280/720/?random=2" />
                        <div class="flex justify-between items-center text-[0.7rem] tracking-tight mt-2 -mb-1">
                            <p class="flex items-center gap-1"><span
                                    class="block w-1 h-1 bg-black group-hover:bg-white transition-colors" />Graphical
                            </p>
                            <p>22.15.01</p>
                        </div>
                        <h1 class="text-xl font-bold">Lorem Ipsum Dolor : Sit amet consectetur adipisicing elit.</h1>
                    </div>
                    <div
                        class="group relative p-5 leading-snug tracking-tighter hover:bg-black hover:scale-[1.02] hover:text-white transition-all rounded lists">
                        <img class="aspect-video object-cover rounded relative z-10" alt=""
                            src="https://unsplash.it/1280/720/?random=2" />
                        <div class="flex justify-between items-center text-[0.7rem] tracking-tight mt-2 -mb-1">
                            <p class="flex items-center gap-1"><span
                                    class="block w-1 h-1 bg-black group-hover:bg-white transition-colors" />Graphical
                            </p>
                            <p>22.15.01</p>
                        </div>
                        <h1 class="text-xl font-bold">Lorem Ipsum Dolor : Sit amet consectetur adipisicing elit.</h1>
                    </div>
                </div>
            </div>
            <div class="flex flex-col border-x border-t">
                <div
                    class="group relative p-5 leading-snug tracking-tighter hover:bg-black hover:scale-[1.02] hover:text-white transition-all rounded lists">
                    <img class="aspect-video object-cover rounded relative z-10" alt=""
                        src="https://unsplash.it/1280/720/?random=2" />
                    <div class="flex justify-between items-center text-[0.7rem] tracking-tight mt-2 -mb-1">
                        <p class="flex items-center gap-1"><span
                                class="block w-1 h-1 bg-black group-hover:bg-white transition-colors" />Graphical
                        </p>
                        <p>22.15.01</p>
                    </div>
                    <h1 class="text-xl font-bold">Lorem Ipsum Dolor : Sit amet consectetur adipisicing elit.</h1>
                </div>
                <div
                    class="group relative p-5 leading-snug tracking-tighter hover:bg-black hover:scale-[1.02] hover:text-white transition-all rounded lists">
                    <img class="aspect-video object-cover rounded relative z-10" alt=""
                        src="https://unsplash.it/1280/720/?random=2" />
                    <div class="flex justify-between items-center text-[0.7rem] tracking-tight mt-2 -mb-1">
                        <p class="flex items-center gap-1"><span
                                class="block w-1 h-1 bg-black group-hover:bg-white transition-colors" />Graphical
                        </p>
                        <p>22.15.01</p>
                    </div>
                    <h1 class="text-xl font-bold">Lorem Ipsum Dolor : Sit amet consectetur adipisicing elit.</h1>
                </div>
                <div
                    class="group relative p-5 leading-snug tracking-tighter hover:bg-black hover:scale-[1.02] hover:text-white transition-all rounded lists">
                    <img class="aspect-video object-cover rounded relative z-10" alt=""
                        src="https://unsplash.it/1280/720/?random=2" />
                    <div class="flex justify-between items-center text-[0.7rem] tracking-tight mt-2 -mb-1">
                        <p class="flex items-center gap-1"><span
                                class="block w-1 h-1 bg-black group-hover:bg-white transition-colors" />Graphical
                        </p>
                        <p>22.15.01</p>
                    </div>
                    <h1 class="text-xl font-bold">Lorem Ipsum Dolor : Sit amet consectetur adipisicing elit.</h1>
                </div>
            </div>
        </div>
    </div>

</template>
