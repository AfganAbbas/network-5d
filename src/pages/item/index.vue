<script setup>
import MainLayout from "../../layout/MainLayout.vue";
import Button from "primevue/button";
import ProgressSpinner from "primevue/progressspinner";
import Dialog from "primevue/dialog";
import { reactive } from "vue";

const items = ["asd", "dasd", "das", "dasd", "das", "dasd", "das"];

const dialog = reactive({
  show: false,
  data: {
    heading: "",
    content: "",
    port: "",
  },
});

const showDialog = (id) => {
  dialog.show = true;
  console.log(id, items);
  const itemData = items.find((item, i) => i === id);
  console.log(itemData);
  dialog.data.heading = itemData;
};
</script>

<template>
  <MainLayout>
    <template v-slot:header>
      <h1 class="text-md md:text-2xl font-semibold text-primary">
        Congestion Error | 11
      </h1>
    </template>
    <div class="p-6 space-y-4" v-if="items.length">
      <ul class="flex flex-col gap-2">
        <li
          class="p-2 shadow-lg border rounded-lg flex justify-between items-center"
          v-for="(item, i) in items"
          :key="i"
        >
          <span class="text-md font-semibold">{{
            "Ip: " +
            `${Math.floor(Math.random() * 100)}.${Math.floor(
              Math.random() * 100
            )}.${Math.floor(Math.random() * 100)}.${Math.floor(
              Math.random() * 100
            )}`
          }}</span>
          <!-- <div class="flex items-center gap-2">
          <span class="">{{"Date"+}}</span>
        </div> -->
          <Button
            outlined
            @click="showDialog(i)"
            icon="pi pi-info-circle"
            class="p-1 text-xl"
            v-tooltip.top="{ value: 'More info', showDelay: 500 }"
          />
        </li>
      </ul>
    </div>
    <div class="flex items-center p-10" v-else>
      <ProgressSpinner />
    </div>
    <Dialog
      v-model:visible="dialog.show"
      modal
      :header="'More information'"
      :style="{ width: '25rem' }"
    >
      <span class="p-text-secondary block mb-5"
        >Detailed info about current anomaly.</span
      >
      <div class="flex align-items-center flex-col gap-3 mb-2">
        <div>
          <span class="font-semibold w-6rem">Port:</span> <span>4007</span>
        </div>
        <div>
          <span class="font-semibold w-6rem">Ip:</span> <span>127.1.2.32</span>
        </div>
        <div>
          <span class="font-semibold w-6rem">Type: </span>
          <span>Congestion Error</span>
        </div>
      </div>
      <template #footer>
        <Button label="Close" outlined @click="dialog.show = false" autofocus />
      </template>
    </Dialog>
  </MainLayout>
</template>
