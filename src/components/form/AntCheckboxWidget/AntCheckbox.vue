<script lang="ts">
export default {
  name: 'AntCheckbox',
};
</script>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { generateId } from '../../../utils/helper';

const emit = defineEmits(['update:checked']);

const props =
  defineProps<{
    checked: boolean | any[];
    value?: string;
    id?: string;
    label?: string;
    description?: string;
    legend?: string;
    color?: string;
  }>();

const _id = ref(props.id ? props.id : generateId(40));
const _color = ref(props.color ? props.color : 'primary');

const _checked = computed({
  get: () => {
    return props.checked;
  },
  set: (val) => {
    emit('update:checked', val);
  },
});
</script>

<template>
  <fieldset>
    <slot name="legend">
      <legend class="sr-only">{{ legend }}</legend>
    </slot>

    <div class="relative flex items-start">
      <div class="flex items-center h-5">
        <input
          type="checkbox"
          v-bind="$attrs"
          :id="_id"
          :aria-describedby="`${_id}-description`"
          v-model="_checked"
          :value="value"
          :class="`focus:ring-${_color} h-4 w-4 text-${_color} border-gray-300 rounded transition-all duration-500`"
        />
      </div>

      <slot v-bind="{ id: _id }">
        <div class="ml-3 text-sm">
          <slot name="label" v-bind="{ id: _id }">
            <label class="font-medium text-gray-700 select-none" :for="_id">
              {{ label }}
            </label>
          </slot>

          <slot name="description" v-bind="{ id: `${_id}-description` }">
            <p
              v-if="description"
              :id="`${_id}-description`"
              class="text-gray-500"
            >
              {{ description }}
            </p>
          </slot>
        </div>
      </slot>
    </div>
  </fieldset>
</template>
