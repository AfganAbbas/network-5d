<script setup>
import MainLayout from "../layout/MainLayout.vue";
import { defineConfigs } from "v-network-graph";

const edges = {
  edge1: { source: "node1", target: "node2" },
  edge2: { source: "node1", target: "node5" },
  edge3: { source: "node1", target: "node7", color: "#FF0000" },
  edge4: { source: "node1", target: "node9" },
  edge5: { source: "node2", target: "node1" },
  edge6: { source: "node2", target: "node3" },
  edge7: { source: "node2", target: "node4" },
  edge8: { source: "node3", target: "node2" },
  edge9: { source: "node4", target: "node2" },
  edge10: { source: "node5", target: "node1" },
  edge11: { source: "node5", target: "node6" },
  edge12: { source: "node6", target: "node5" },
  edge13: { source: "node7", target: "node1", color: "#FF0000" },
  edge14: { source: "node7", target: "node8" },
  edge15: { source: "node8", target: "node7" },
  edge16: { source: "node9", target: "node1" },
  edge17: { source: "node9", target: "node10" },
  edge18: { source: "node10", target: "node9" },
};

const layouts = {
  nodes: {
    node1: { x: 0, y: 0 },
    node2: { x: 0, y: 100 },
    node3: { x: -100, y: 0 },
    node4: { x: 150, y: 50 },
    node5: { x: 200, y: 0 },
    node6: { x: 250, y: 50 },
    node7: { x: 0, y: -100 },
    node8: { x: 200, y: -100 },
    node9: { x: -100, y: -100 },
    node10: { x: -200, y: -100 },
  },
};

// icon code point searched from: https://fonts.google.com/icons
const nodes = {
  node1: { name: "N1(Server)", icon: "&#xe2bd", color: "navy" },
  node2: { name: "N2", icon: "&#xe320" /* Router */ },
  node3: { name: "N3", icon: "&#xe320" /* Tablet Mac */ },
  node4: { name: "N4", icon: "&#xe320" },
  node5: { name: "N5", icon: "&#xe320" /* Support Agent */ },
  node6: { name: "N6", icon: "&#xe320" /* Video Settings */ },
  node7: { name: "N7", icon: "&#xe320" /* Video Settings */ },
  node8: { name: "N8", icon: "&#xe320" /* Video Settings */ },
  node9: { name: "N9", icon: "&#xe320" },
  node10: { name: "N10", icon: "&#xe320" },
};

const configs = defineConfigs({
  node: {
    selectable: true,
    normal: {
      radius: 26,
      color: (node) => node.color,
    },
    hover: {
      radius: 27,
    },
  },
  edge: {
    normal: {
      color: (node) => node.color,
      width: 3,
    },
    marker: {
      target: {
        type: "arrow",
        width: 5,
        height: 5,
        margin: -1,
        offset: 0,
        units: "strokeWidth",
      },
    },
  },
});
</script>

<template>
  <MainLayout>
    <div class="h-screen w-full">
      <v-network-graph
        :nodes="nodes"
        :edges="edges"
        :configs="configs"
        :layouts="layouts"
      >
        <!-- Use CSS to define references to external fonts.
         To use CSS within SVG, use <defs>. -->
        <defs>
          <!-- Cannot use <style> directly due to restrictions of Vue. -->
          <component is="style">
            @font-face { font-family: 'Material Icons'; font-style: normal;
            font-weight: 400; src:
            url(https://fonts.gstatic.com/s/materialicons/v97/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2)
            format('woff2'); }
          </component>
        </defs>

        <!-- Replace the node component -->
        <template #override-node="{ nodeId, scale, config, ...slotProps }">
          <circle
            :r="config.radius * scale"
            :fill="config.color"
            v-bind="slotProps"
          />
          <!-- Use v-html to interpret escape sequences for icon characters. -->
          <text
            font-family="Material Icons"
            :font-size="22 * scale"
            fill="#ffffff"
            text-anchor="middle"
            dominant-baseline="central"
            style="pointer-events: none"
            v-html="nodes[nodeId].icon"
          />
        </template>
      </v-network-graph>
    </div>
  </MainLayout>
</template>

<style scoped></style>
