<script setup>
import MainLayout from "../layout/MainLayout.vue";
import Button from "primevue/button";

const items = ["asd", "dasd", "das", "dasd", "das", "dasd", "das"];

const testData = [
  {
    Type: "Equipment Failure Alarm",
    Port: "1234",
    Count: 23,
    IP: "10.15.15.1",
    Date: "2024-05-13 10:09:23",
    Receiver: "5",
    Sender: "4",
  },
  {
    Type: "Congestion Error",
    Port: "1234",
    Count: 11,
    IP: "10.15.15.1",
    Date: "2024-05-13 10:09:23",
    Receiver: "5",
    Sender: "4",
  },
  {
    Type: "Syncronization of Alarms",
    Port: "1234",
    Count: 41,
    IP: "10.15.15.1",
    Date: "2024-05-13 10:09:23",
    Receiver: "5",
    Sender: "4",
  },
  {
    Type: "Loss of frame",
    Port: "1234",
    Count: 81,
    IP: "10.15.15.1",
    Date: "2024-05-13 10:09:23",
    Receiver: "5",
    Sender: "4",
  },
];
</script>

<template>
  <MainLayout>
    <ul class="p-4 py-6 flex flex-col gap-2">
      <li
        class="p-2 shadow-lg border rounded-lg flex justify-between items-center"
        v-for="(item, i) in testData"
        :key="i"
      >
        <span class="text-md font-semibold">{{ item.Type }}</span>
        <div class="flex items-center gap-2">
          <span class="">{{ "Count: " + item.Count }}</span>
          <router-link :to="{ name: 'list-view', params: { type_id: i } }">
            <Button
              outlined
              icon="pi pi-list"
              class="p-1 text-xl"
              v-tooltip.top="{ value: 'View List', showDelay: 500 }"
            />
          </router-link>
          <router-link :to="{ name: 'chart-view', params: { id: i } }">
            <Button
              outlined
              icon="pi pi-chart-line"
              class="p-1 text-xl"
              v-tooltip.top="{ value: 'Chart', showDelay: 500 }"
            />
          </router-link>
        </div>
      </li>
    </ul>
  </MainLayout>
</template>
