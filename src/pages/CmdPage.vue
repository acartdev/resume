<template>
  <q-page class="flex flex-center">
    <q-form>
      <q-card style="max-width: 800px; width: 800px; height: 500px">
        <q-bar>
          <div class="cursor-pointer">File</div>
          <div class="cursor-pointer">Edit</div>
          <div class="cursor-pointer gt-xs">View</div>
          <div class="cursor-pointer gt-xs">Window</div>
          <div class="cursor-pointer">Help</div>
          <q-space />
          <q-btn dense flat icon="minimize" />
          <q-btn dense flat icon="crop_square" />
          <q-btn dense color="red" icon="close" />
        </q-bar>
        <q-card-section class="bg-dark full-height text-white">
          <p class="typingEffect">
            C:\User\AcArtSmartCode> Please press Enter to go to the main page.
          </p>
          <q-input
            @keyup.enter="test"
            autofocus
            dark
            dense
            borderless
            v-if="type"
          >
            <template v-slot:before>
              <q-btn flat color="white" label=">>"></q-btn>
            </template>
          </q-input>
          <span v-if="loadding"> {{ text }}] </span>
          <ul v-if="ft">
            <li v-for="items in textcode" :key="items">{{ items }}</li>
          </ul>
          <span v-if="sc">package</span
          ><span v-if="sc" class="text-green">{{ packageLoad }}]</span>
          <p v-if="success" class="text-center text-h6 text-green">SUCCESS!!</p>
        </q-card-section>
      </q-card>
    </q-form>
  </q-page>
</template>

<script setup>
/* eslint-disable */
import { ref, onMounted } from "vue";
const type = ref(false);
const text = ref("Loadding[#");
const success = ref(false);
const loadding = ref(false);
const ft = ref(false);
const sc = ref(false);
const packageLoad = ref("[");
const textcode = ref(["package installing please wait..."]);
onMounted(() => {
  const wait = setInterval(() => {
    type.value = true;
    clearInterval(wait);
  }, 2400);
});
const test = () => {
  loadding.value = true;
  const load = setInterval(() => {
    text.value += "#";
    if (text.value.length > 90) {
      clearInterval(load);
      ft.value = true;
    }
  }, 5);
  setTimeout(() => {
    textcode.value.push("package install success...");
  }, 1000);
  setTimeout(() => {
    textcode.value.push(
      "at formatError (C:/Users/tnpkn/Desktop/resume/node_modules/vite/dist/node/chunks/dep-689425f3.js:39080:46)"
    );
  }, 1500);
  setTimeout(() => {
    textcode.value.push("module install success.....");
  }, 1800);
  setTimeout(() => {
    textcode.value.push(
      "npm@9.5.1 C:/Users/tnpkn/AppData/Roaming/npm/node_modules/npm"
    );
  }, 1900);
  setTimeout(() => {
    textcode.value.push(
      "» Browser target......... es2019|edge88|firefox78|chrome87|safari13.1"
    );
  }, 1900);
  setTimeout(() => {
    textcode.value.push(
      "App •  LINT OK  • C:/Users/tnpkn/Desktop/resume/src/layouts/MainLayout.vue"
    );
  }, 2000);
  setTimeout(() => {
    textcode.value.push(
      "51 errors and 0 warnings potentially fixable with the `--fix` option."
    );
  }, 2000);
  setTimeout(() => {
    sc.value = true;
    const one = setInterval(() => {
      packageLoad.value += "|";
      if (packageLoad.value.length > 210) {
        clearInterval(one);
      }
    }, 10);
  }, 2500);
  setTimeout(() => {
    success.value = true;
  }, 5000);
  setTimeout(() => {
    window.location.replace("#/home");
  }, 6000);
};
</script>

<style lang="scss" scoped>
* p {
  letter-spacing: 2px;
}
.typingEffect {
  width: 0;
  overflow: hidden; /* Ensure the text is not visible until the typewriter effect*/
  /* The cursor*/

  white-space: nowrap; /* Keeps the text on a single line */
  animation: typing 2s steps(50) forwards;
}

/* The typing animation */
@keyframes typing {
  from {
    width: 28%;
    border-right: 2px solid white;
  }
  to {
    width: 74%;
    border-right: 0px solid white;
  }
}
* li {
  list-style: none;
}
ul li:nth-child(8) {
  color: red;
}
</style>
