<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import Sidebar from "primevue/sidebar";
import Menubar from "primevue/menubar";
import Button from "primevue/button";
import Toast from "primevue/toast";

const visible = ref(false);
</script>

<template>
  <div>
    <Menubar :pt="{ root: { class: 'rounded-none' } }">
      <template #start>
        <div class="flex items-center gap-2">
          <Button icon="pi pi-bars" @click="visible = true" />
          <slot name="header"
            ><h1 class="text-2xl font-semibold text-gray-900">
              5D Monitoring
            </h1></slot
          >
        </div>

        <!-- <svg
          width="35"
          height="40"
          viewBox="0 0 35 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="h-2rem"
        >
          <path
            d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
            fill="var(--primary-color)"
          />
          <path
            d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
            fill="var(--text-color)"
          />
        </svg> -->
      </template>
      <!-- <template #item="{ item, props, hasSubmenu, root }">
        <a v-ripple class="flex align-items-center" v-bind="props.action">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
          <Badge
            v-if="item.badge"
            :class="{ 'ml-auto': !root, 'ml-2': root }"
            :value="item.badge"
          />
          <span
            v-if="item.shortcut"
            class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1"
            >{{ item.shortcut }}</span
          >
          <i
            v-if="hasSubmenu"
            :class="[
              'pi pi-angle-down',
              { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root },
            ]"
          ></i>
        </a>
      </template> -->
      <template #end>
        <!-- <div class="flex align-items-center gap-2">
          <InputText
            placeholder="Search"
            type="text"
            class="w-8rem sm:w-auto"
          />
          <Avatar
            image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
            shape="circle"
          />
        </div> -->
        <a href="https://t.me/azercell_5d_bot" target="_blank" rel="noopener">
          <Button outlined>Network Alarm System</Button>
        </a>
      </template>
    </Menubar>
    <Sidebar v-model:visible="visible" header="Sidebar">
      <template #container="{ closeCallback }">
        <div class="flex flex-col h-full">
          <div class="flex items-center justify-between px-4 pt-4 shrink-0">
            <span class="font-semibold text-2xl text-primary"
              >5D Monitoring</span
            >
            <span>
              <Button
                type="button"
                @click="closeCallback"
                icon="pi pi-times"
                rounded
                outlined
              ></Button>
            </span>
          </div>
          <div class="overflow-y-auto mt-4">
            <ul class="list-none p-0 m-0 overflow-hidden">
              <li class="hover:bg-gray-100">
                <RouterLink
                  to="/"
                  class="flex items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors"
                >
                  <i class="pi pi-home mr-2"></i>
                  <span class="font-medium">Home</span>
                </RouterLink>
              </li>
              <li class="hover:bg-gray-100">
                <RouterLink
                  to="/list"
                  class="flex items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors"
                >
                  <i class="pi pi-globe mr-2"></i>
                  <span class="font-medium">Anomaly list</span>
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </Sidebar>
    <div>
      <Toast />
      <slot />
    </div>
  </div>
</template>
