<script setup lang='ts'>
import {ref} from 'vue';
import img1 from "@/assets/imgs/1.jpg";
import img2 from "@/assets/imgs/2.jpg";
import img3 from "@/assets/imgs/3.jpg";
const arr = [img1, img2, img3]
const activeIndex = ref(0);
const carousel = ref();
const carouselInner = ref();

//下一个
const handleNext = () => {
  if (activeIndex.value == arr.length - 1) {
    activeIndex.value = 0;
  }
  activeIndex.value++;
  carouselInner.value.style.left = (-carousel.value.offsetWidth) * activeIndex.value + 'px';
}

//上一个
const handlePre = () => {
  if (activeIndex.value == 0) {
    activeIndex.value = arr.length - 1;
  }
  activeIndex.value--;
  carouselInner.value.style.left = (-carousel.value.offsetWidth) * activeIndex.value + 'px';
}
</script>
<template>
    <main>
        <div class="carousel" ref="carousel">
            <div class="carousel-inner" ref="carouselInner">
                <div class="carousel-item d-flex" :class="{active:activeIndex==index}" v-for="(item, index) in arr" :key="index">
                    <img :src="item" class="img-item">
                </div>
            </div>
            <button class="btn-right" @click="handleNext">下一个</button>
            <button class="btn-left" @click="handlePre">上一个</button>
            <div class="dot d-flex">
                <div class="dot-item" :class="{ active: activeIndex == index }" v-for="(item, index) in arr" :key="index">
                </div>
            </div>
        </div>
    </main>
</template>
<style lang="scss" scoped>
.carousel {
    width: 500px;
    height: 400px;
    overflow: hidden;
    position: relative;
    background: #ccc;


    .carousel-inner {
        height: 400px;
        width: 500px;
        overflow: hidden;

        .carousel-item {
            width: 100%;
            height: 400px;
            justify-content: center;
            align-items: center;
            border: 1px solid red;
            position: absolute;
            left: 0;
            top: 0;
            visibility: hidden;
            &.active{
                visibility: visible;
            }
            .img-item {
        height: 400px;
      }
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

    .dot {
        position: absolute;
        left: 50%;
        bottom: 100px;
        transform: translate(-50%, 0);
        width: 80px;
        flex-direction: row;
        justify-content: space-around;

        .dot-item {
            background: #fff;
            width: 10px;
            height: 10px;
            border-radius: 50%;

            &.active {
                background: #007aff;
            }
        }
    }
}
</style>
 