<script setup>
import { ref, onMounted } from "vue";
import anime from "animejs";

const scribble = ref(null);
onMounted(() => {
  anime({
    targets: scribble.value,
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 2000,
    delay: 300,
    easing: "linear",
  })

  anime({
    targets: "#Home p,#Home a",
    translateX: [300, 0],
    opacity: [0, 1, 0, 1],
    delay: anime.stagger(50, { start: 100 }),
    easing: "steps(4)",
    duration: 300,
  });
});
</script>

<template>
  <div id="Home" class="relative flex h-full w-full items-center justify-center lg:justify-end">
    <div class="pointer-events-none absolute -left-[500px] scale-[100vh] lg:left-[100px] bottom-0 origin-bottom-left">
      <svg width="946" height="842" viewBox="0 0 946 842" fill="none" class="stroke-neutral-500"
        xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_61_16)">
          <path ref="scribble"
            d="M530.931 955.551C546.993 894.362 563.479 835.324 567.619 771.623C573.602 679.541 548.007 600.308 473.209 542.366C393.06 480.279 262.025 497.866 214.438 396.431C201.098 367.995 194.486 337.349 187.534 306.913C181.291 279.578 161.191 240.653 166.663 212.34C173.217 178.431 219.827 152.377 246.724 137.008C291.462 111.443 340.489 95.0497 390.213 82.3841C422.98 74.0377 459.175 62.6874 493.428 67.5459C513.473 70.3891 531.854 79.9096 551.15 85.4821C579.282 93.6066 608.392 96.7435 637.57 97.8744C674.182 99.2935 713.379 99.3702 747.47 84.3407C784.12 68.1832 824.039 45.1222 854.109 18.3029C862.348 10.9547 867.97 -0.777178 880.85 0.0405699C894.476 0.90573 903.681 15.1398 909.874 25.4774C929.536 58.2995 939.686 94.4493 942.811 132.442C946.391 175.952 953.716 236.602 906.45 257.996C877.139 271.263 843.874 273.855 812.203 275.606C763.426 278.302 714.444 277.563 665.615 277.563C570.546 277.563 473.976 274.84 379.288 284.737C318.094 291.133 256.836 304.572 196.991 318.653C167.381 325.62 -54.89 381.106 12.7377 436.053C35.0219 454.159 65.6033 463.827 92.1461 472.904C151.014 493.036 211.535 508.369 272.16 522.147C370.643 544.529 471.651 562.43 566.64 597.805C603.609 611.573 648.452 632.667 655.18 676.399C663.511 730.553 633.731 793.351 605.285 837.498C574.687 884.983 531.918 902.692 479.242 916.907C465.762 920.544 440.18 922.366 428.858 932.071C421.968 937.976 445.112 941.188 454.131 942.18C521.84 949.628 593.762 946.717 659.419 927.832C689.081 919.3 729.515 904.124 748.774 877.936C776.844 839.768 751.063 777.748 735.73 740.317C709.997 677.499 652.862 627.191 638.385 559.976C625.204 498.779 667.206 447.502 694.477 396.92C717.592 354.044 717.654 317.306 685.508 279.193C659.523 248.384 617.131 212.289 667.246 182.012C697.452 163.762 740.035 163.535 774.048 167.989C787.922 169.806 827.752 176.952 825.411 198.317C822.386 225.916 775.884 248.356 757.253 262.887C701.891 306.07 645.091 342.28 580.174 369.853C514.394 397.791 442.445 421.306 391.029 473.556C360.429 504.652 357.674 537.748 344.72 576.608C332.082 614.523 307.937 645.913 292.542 682.432C270.437 734.867 295.442 779.286 336.079 814.996C385.52 858.445 451.406 880.968 506.799 915.439C523.018 925.533 551.885 942.933 539.084 966.639C527.314 988.434 496.114 1000.82 475.166 1010.34C395.62 1046.5 309.317 1077.29 222.265 1088.12C164.983 1095.24 102.797 1094.78 93.4506 1025.5C74.0385 881.625 216.749 775.687 277.541 661.397C308.61 602.988 310.805 540.911 310.805 476.328C310.805 422.363 319.192 359.713 297.76 308.706C278.181 262.107 233.363 228.219 189.817 205.166C173.877 196.727 157.704 192.454 139.922 190.001C133.127 189.064 90.3146 190.86 94.755 175.489C99.7373 158.243 116.653 151.276 117.094 131.464C117.454 115.239 130.939 125.113 143.183 129.833C213.081 156.782 280.997 181.148 355.482 193.099C460.525 209.953 567.961 210.647 674.094 212.992C713.453 213.862 767.092 208.252 790.843 247.234C802.525 266.409 806.437 289.221 814.649 309.848C823.679 332.53 836.515 351.752 853.13 369.526C873.861 391.704 888.171 406.584 877.915 438.173C861.873 487.583 831.218 530.193 819.378 581.5C812.026 613.356 810.023 635.327 774.863 646.07C723.232 661.846 660.098 663.857 608.22 649.005C590.272 643.867 574.301 635.537 558.487 625.851C550.133 620.734 531.254 602.588 532.398 612.317C534.115 626.908 553.798 648.676 560.77 660.419C579.746 692.378 596.571 725.286 609.85 760.046C634.19 823.759 647.965 890.907 660.072 957.834C667.571 999.294 674.625 1037.57 665.942 1078.82"
            stroke-linecap="round" />
        </g>
        <defs>
          <clipPath id="clip0_61_16">
            <rect width="950" height="842" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
    <div class="lg:mr-[10vw] flex flex-col anim">
      <p class="relative text-5xl lg:text-6xl text-center lg:text-left font-bold leading-[0.95] tracking-tighter">
        Digital Universe
        <br />
        Contributor
        <br class="block lg:hidden" />
        <span class="text-4xl">ヾ(≧▽≦*)o</span>
      </p>
      <!-- <span class="block h-px mt-10 mb-2 bg-black w-full" /> -->
      <p class="mt-5 absolute left-0 text-sm lg:text-base lg:relative w-full bottom-5 flex flex-col lg:flex-row items-center justify-between lg:gap-3 font-bold tracking-tighter">
        <span>Are you curious about me?</span>
        <span class="mt-1 h-px flex-grow bg-black hidden lg:block"></span>
        <RouterLink to="/about" class="group">
          <span class="relative">
            Learn more
            <span
              class="absolute left-0 bottom-0 h-full w-full max-w-0 backdrop-invert transition-all group-hover:max-w-full"></span>
          </span>
        </RouterLink>
      </p>
    </div>

    <div class="blurry pointer-events-none fixed right-[30rem] h-[50rem] w-[50rem] rounded-full"></div>
  </div>
</template>

<style scoped>
.spin {
  animation: spin2 30s linear infinite;
}

@keyframes spin2 {
  to {
    transform: rotate(36deg);
  }
}

.blurry {
  mask: radial-gradient(circle, black, transparent 70%);
  backdrop-filter: blur(10px);
}
</style>
