<script lang="ts">
export default {
  name: 'AntDatePicker',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { computed } from 'vue';
import { uuid } from 'vue3-uuid';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const emit = defineEmits(['update:value']);

const {
  id = uuid.v4(),
  label,
  value,
} = defineProps<{
  id?: string;
  label?: string;
  value: string;
}>();

const _value = computed({
  get: () => {
    return value;
  },
  set: (val) => {
    emit('update:value', val);
  },
});
</script>

<template>
  <div>
    <label :for="id" v-if="label">{{ label }}</label>

    <Datepicker :id="id" v-model="_value"></Datepicker>
  </div>
</template>
