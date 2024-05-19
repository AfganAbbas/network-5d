<script setup>
import MainLayout from "../../layout/MainLayout.vue";
import Chart from "primevue/chart";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputNumber from "primevue/inputnumber";
import { ref, onMounted } from "vue";
import { useToast } from "primevue/usetoast";
const toast = useToast();

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

const visible = ref(false);
const chartData = ref();
const chartOptions = ref();
const borderLine = ref();

const setChartData = () => {
  const documentStyle = getComputedStyle(document.documentElement);

  return {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "First Dataset",
        data: [65, 59, 80, 81, 56, 55, 85, 81, 56, 55, 85, 310],
        fill: false,
        borderColor: documentStyle.getPropertyValue("--cyan-500"),
        tension: 0.4,
      },
      {
        data: [
          {
            x: "February",
            y: 100,
          },
        ],
        label: "Alarm",
        // steppedLine: true,
        backgroundColor: "#cd2026",
        type: "bubble",
      },
    ],
  };
};
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue("--text-color");
  const textColorSecondary = documentStyle.getPropertyValue(
    "--text-color-secondary"
  );
  const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
      y: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
    },
  };
};
const setAlarm = () => {
  visible.value = false;
  console.log(typeof borderLine.value);
  toast.add({
    severity: "success",
    summary: "Alarm has been set",
    detail: `Border for alarm is ${borderLine.value}`,
    life: 3000,
  });
};
</script>

<template>
  <MainLayout>
    <div class="space-y-4 p-4">
      <h1 class="text-3xl font-bold">
        Visualization of network(last 15 days):
      </h1>
      <Chart
        type="line"
        :data="chartData"
        :options="chartOptions"
        class="h-64"
      />
      <!-- <h2 class="text-2xl font-bold">Set Alarm:</h2> -->
      <div class="flex w-full gap-2 justify-end">
        <router-link :to="{ name: 'list-view', params: { type_id: 2 } }">
          <Button outlined icon="pi pi-list" label="View more" />
        </router-link>
        <Button label="Set Alarm" @click="visible = true" />
      </div>
    </div>
    <Dialog
      v-model:visible="visible"
      modal
      header="Set Alarm"
      :style="{ width: '25rem' }"
    >
      <span class="p-text-secondary block mb-5"
        >Set alarm for specific count. Telegram bot will inform you</span
      >
      <div class="flex items-center gap-3 mb-3">
        <label for="countInput" class="font-semibold w-6rem">Border:</label>
        <InputNumber id="countInput" class="flex-auto" v-model="borderLine" />
      </div>
      <div class="flex justify-end gap-2">
        <Button
          type="button"
          label="Cancel"
          severity="secondary"
          @click="visible = false"
        ></Button>
        <Button type="button" label="Save" @click="setAlarm" />
      </div>
    </Dialog>
  </MainLayout>
</template>
