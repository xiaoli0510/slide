<script setup lang="ts">
import { ref } from 'vue'

let arr = [
  1, 2, 3, 4, 5
];
const activeIndex = ref(0);
const carousel = ref(null);
const carouselInner = ref(null);

const handleNext = function () {
  if (activeIndex.value < arr.length-1) {
    activeIndex.value++;
  }else{
    activeIndex.value=0;
  }
  carouselInner.value.style.left = (-carousel.value.offsetWidth) * activeIndex.value + 'px';
}
const handlePre = function () {
  if(activeIndex.value>0){
    activeIndex.value--;
  }else{
    activeIndex.value=arr.length-1;
  }
  carouselInner.value.style.left = (-carousel.value.offsetWidth) * activeIndex.value + 'px';
}
</script>

<template>
  <main>
    <div class="carousel" ref="carousel">
      <div class="carousel-inner" ref="carouselInner">
        <div class="carousel-item" v-for="(item, index) in arr" :key="index">
          {{ item }}
        </div>
      </div>
      <button class="btn-right" @click="handleNext">下一个</button>
      <button class="btn-left" @click="handlePre">上一个</button>
    </div>
  </main>
</template>
<style lang="scss" scoped>
.carousel {
  width: 500px;
  border: 1px solid #000;
  height: 400px;
  overflow: hidden;
  position: relative;


  .carousel-inner {
    height: 400px;
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
    background-color: #0f0;
    display: flex;
    flex-direction: row;

    .carousel-item {
      width: 500px;
      height: 400px;
      border: 1px solid red;
    }
  }

  .btn-right {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translate(0, -50%);
  }

  .btn-left {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translate(0, -50%);
  }
}
</style>
