<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Tabs from './components/tabs/Tabs.vue';
import AntPasswordWidget from './components/form/AntPasswordWidget/AntPasswordWidget.vue';
import { ref } from 'vue';
import AntDragDropTable from './components/table/AntDragDropTable.vue';

import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { TableHeader, ROW_TYPES } from './types/TableHeader.type';

const password = ref<string>('');

const testData = ref([
  {
    id: 1,
    duration: 10,
    timeFrom: '16:00',
    timeTo: '16:10',
    theme: 'Warm-Up',
    order: 10,
  },
  {
    id: 2,
    duration: 45,
    timeFrom: '16:10',
    timeTo: '16:55',
    theme: 'Hot-Seat',
    order: 20,
  },
  {
    id: 3,
    duration: 5,
    timeFrom: '16:55',
    timeTo: '17:00',
    theme: 'Pause',
    order: 30,
  },
  {
    id: 4,
    duration: 45,
    timeFrom: '17:00',
    timeTo: '17:45',
    theme: 'Hot-Seat',
    order: 40,
  },
  {
    id: 5,
    duration: 10,
    timeFrom: '17:45',
    timeTo: '17:55',
    theme: 'Feedback',
    order: 50,
  },
  {
    id: 6,
    duration: 5,
    timeFrom: '17:55',
    timeTo: '18:00',
    theme: 'New appointment and finish',
    order: 60,
  },
]);

const simpleHeaders: TableHeader[] = [
  {
    identifier: 'duration',
    title: 'Dauer',
    type: ROW_TYPES.TEXT,
  },
  {
    identifier: 'timeFrom',
    title: 'Uhrzeit',
    type: ROW_TYPES.TEXT,
  },
  {
    identifier: 'timeTo',
    title: 'Uhrzeit',
    headerClassList: 'sr-only',
    type: ROW_TYPES.TEXT,
  },
  {
    identifier: 'theme',
    title: 'Thema',
    type: ROW_TYPES.TEXT,
  },
];
</script>

<template>
  <div>HI</div>
  <AntDragDropTable :headers="simpleHeaders" v-model:data="testData" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
