<script lang="ts">
export default {
  name: 'AntRadio',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { uuid } from 'vue3-uuid';

const {
  id = uuid.v4(),
  label,
  name,
} = defineProps<{
  id?: string;
  label?: string;
  name?: string;
}>();
</script>

<template>
  <div class="flex items-center space-x-3">
    <input :id="id" :name="name" type="radio" />

    <label :for="id">{{ label }}</label>
  </div>
</template>
