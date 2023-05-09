<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="transparent text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-img width="70px" src="../assets/logo.jpg" />
        </q-toolbar-title>
        <q-tabs align="left" active-color="red">
          <q-route-tab to="/home" label="หน้าแรก" />
          <q-route-tab to="/info" label="ข้อมูลของอาร์ต" />
          <q-route-tab to="/working" label="ผลงานของอาร์ต" />
          <q-route-tab to="/avg" label="สกิลของอาร์ต" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container class="bg-black">
      <router-view v-slot="{ Component }">
        <transition name="slide-fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup></script>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(40px);
  opacity: 0;
}
</style>
