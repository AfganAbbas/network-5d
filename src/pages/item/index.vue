<script setup>
import MainLayout from "../../layout/MainLayout.vue";

const items = ["asd", "dasd", "das", "dasd", "das", "dasd", "das"];
</script>

<template>
  <MainLayout>
    <ul class="p-4 py-6 flex flex-col gap-2">
      <li
        class="p-2 shadow-lg border rounded-lg flex justify-between items-center"
        v-for="(item, i) in items"
        :key="i"
      >
        <span class="text-md font-semibold">{{ item }}</span>
        <div class="flex items-center gap-2">
          <span class="">{{ "Ip: " + Math.floor(Math.random() * 100) }}</span>
        </div>
      </li>
    </ul>
  </MainLayout>
</template>
