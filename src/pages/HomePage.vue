<template>
  <q-page>
    <section id="sec" @mousemove="mouseMove" class="full-height">
      <div class="back flex justify-around items-center">
        <div class="text-white text-center">
          <q-img
            width="250px"
            class="q-mb-lg"
            style="border-radius: 50%"
            src="../assets/logo.jpg"
          ></q-img>

          <p class="text-h3 text-center">
            ยินดีต้อนรับเข้าสู่<span class="text-red relative-position z-max"
              >โลกของ</span
            >
          </p>
          <q-img width="130px" src="../assets/flare.png" class="flash"></q-img>
          <p class="text-h3 text-center">ธนภัทร กองเงิน</p>
          <p class="text-body2" style="max-width: 500px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolore
            voluptate aspernatur fuga voluptatem omnis quo nulla maiores rem
            dolor?
          </p>
        </div>
        <div class="q-mt-xl">
          <q-img
            width="350px"
            fit="cover"
            style="border-radius: 30px"
            src="../assets/profile.png"
          ></q-img>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
/* eslint-disable */
import { ref, onMounted } from "vue";
import { Loading, QSpinnerBall } from "quasar";
onMounted(() => {
  Loading.show({
    spinner: QSpinnerBall,
  });
  setTimeout(() => {
    Loading.hide();
  }, 1000);
});
const mouseMove = (val) => {
  const bg = document.getElementById("sec");
  let x = (val.pageX * -1) / 15;
  let y = (val.pageY * -1) / 15;
  bg.style.backgroundPosition = y + "px " + x + "px";
};
</script>

<style lang="scss" scoped>
section {
  position: relative;
  background-image: url("../assets/fa.jpg");
  background-size: 150% 150%;
  background-repeat: no-repeat;
  box-shadow: inset 25rem 0rem 10rem 10rem #000;
}
section::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: -1;
}
.flash {
  position: absolute;
  top: 55%;
  opacity: 1;
  transform: rotate(25deg);
  left: 39.9%;
  animation: blink 5s infinite;
  z-index: 1;
}
@keyframes blink {
  0% {
    opacity: 0.7;
    transform: rotate(-90deg);
  }
  100% {
    opacity: 0.7;
    transform: rotate(90deg);
  }
}
</style>
