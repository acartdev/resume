<template>
  <q-page @mousemove="mouseMove">
    <div class="row fit justify-between items-center">
      <div class="col-sm-6 q-pa-lg">
        <ul>
          <li class="" v-for="items in text" :key="items">
            {{ items }}
          </li>
        </ul>
      </div>
      <div class="col-sm-6 relative-position q-mt-xl">
        <q-img
          width="390px"
          class="z-max"
          style="border-radius: 40px"
          src="../assets/78734-removebg-preview.png"
        ></q-img>
        <q-img
          width="200px"
          style="
            border-radius: 50%;
            z-index: 1;
            position: absolute;
            left: 40%;
            transform: rotate(20deg);
            top: 10%;
          "
          src="../assets/logo.jpg"
        ></q-img>
      </div>
    </div>
  </q-page>
</template>

<script setup>
/* eslint-disable */

import { ref, onMounted } from "vue";
import { Loading, QSpinnerBall } from "quasar";
const text = ref([]);
const detial = ref([
  "()=>ประวัติส่วนตัว{}",
  "ชื่อจริง-นามสกุล : นายธนภัทร กองเงิน ",
  "ชื่อเล่น : อาร์ต",
  "สถานะ : บ่คิดยากแต่ยากจน",
  "วัน/เดือน/ปี เกิด : 31 ธันวาคม 2546",
  "คติประจำใจ : 鶏肉のマリファナの葉煮  (จักแปลว่าหยัง)",
  "<>การศึกษา</>",
  "ม.1-3 โรงเรียนเตรียมอุดมศึกษาพัฒนาการ อุดรธานี",
  "ปวช.1-3 วิทยาลัยการอาชีพบ้านผือ",
  "GPA 3.90",
  "ปวส.1-2 วิทยาลัยอาชีวศึกษา อุดรธานี",
  "ปวส.1 GPA 3.98",
  "<^>ระดับมหาลัยที่เล็งไว้<^>",
  "ราชมงคล ธัญบุรี",
  "พระจอมเกล้าพระนครเหนือ",
  "มหาวิทยาลัยขอนแก่น",
]);

let i = 0;
const mouseMove = (val) => {
  const bg = document.querySelector(".q-page");
  let x = (val.pageX * -1) / 15;
  let y = (val.pageY * -1) / 15;
  bg.style.backgroundPosition = y + "px " + x + "px";
};

onMounted(() => {
  Loading.show({
    spinner: QSpinnerBall,
  });
  setTimeout(() => {
    Loading.hide();
    typing();
  }, 1000);
});
const typing = () => {
  const one = setInterval(() => {
    text.value.push(detial.value[i]);
    i++;
    if (i > detial.value.length) {
      clearInterval(one);
    }
  }, 100);
};
</script>

<style lang="scss" scoped>
ul li {
  color: white;
  list-style: none;
  font-size: 1rem;
}
ul li:nth-child(1) {
  color: #e74c3c;
  font-size: 1.5rem;
}
ul li:nth-child(7) {
  color: #e74c3c;
  font-size: 1.5rem;
}
ul li:nth-child(13) {
  color: #e74c3c;
  font-size: 1.5rem;
}
.q-page {
  background-image: url("../assets/code-symbols-programming-hjbyni9117oaqbap.jpg");
  box-shadow: inset 25rem 0rem 10rem 10rem #000;
}
</style>
