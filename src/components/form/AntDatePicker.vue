<script lang="ts">
export default {
  name: 'AntDatePicker',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { generateId } from '../../utils/helper';

const emit = defineEmits(['update:value']);

const props =
  defineProps<{
    id?: string;
    label?: string;
    value: Date;
  }>();

const _id = ref(props.id ? props.id : generateId(40));

const _value = computed({
  get: () => {
    return props.value;
  },
  set: (val: Date) => {
    emit('update:value', val);
  },
});
</script>

<template>
  <div>
    <label :for="_id">
      <slot>{{ label }}</slot>
    </label>

    <Datepicker :id="_id" v-model="_value" v-bind="$attrs">
      <template v-for="(_, slot) of $slots" v-slot:[slot.toString()]="scope">
        <slot :name="slot.toString()" v-bind="scope"></slot>
      </template>
    </Datepicker>
  </div>
</template>
