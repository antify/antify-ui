<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Tabs from './components/tabs/Tabs.vue';
import AntPasswordWidget from './components/form/AntPasswordWidget/AntPasswordWidget.vue';
import { ref } from 'vue';

import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

const password = ref<string>('');
</script>

<template>
  <Tabs msg="Hello Vue 3 + TypeScript + Vite" />

  <fa-icon
    :icon="faCircleExclamation"
    class="h-5 w-5 text-red-500"
    aria-hidden="true"
  />

  <AntPasswordWidget
    :password="password"
    placeholder="Passwort"
    repeatPlaceholder="Passwort wiederholen"
  />
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
