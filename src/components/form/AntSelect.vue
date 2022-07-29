<script lang="ts">
export default {
  name: 'AntSelect',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { SelectOption } from '../../types/SelectOption.type';
import { ref, computed } from 'vue';
import { generateId } from '../../utils/helper';

const emit = defineEmits(['update:value']);
const props =
  defineProps<{
    id?: string;
    label?: string;
    description?: string;
    options?: SelectOption[];
    value: string;
    errors: string[];
    isError: boolean;
    validator: Function;
  }>();

const _id = ref(props.id || generateId(40));
const _value = computed({
  get: () => {
    return props.value;
  },
  set: (val: string) => {
    emit('update:value', val);
  },
});

function validate() {
  if (props.validator) {
    props.validator(_value);
  }
}
</script>

<template>
  <div>
    <label :for="_id">
      <slot>
        <span class="block text-sm font-medium text-gray-700">{{ label }}</span>
      </slot>
    </label>

    <div class="relative w-full">
      <select
        v-model="_value"
        :id="_id"
        :class="{
          'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500':
            (errors && errors.length > 0) || isError,
          'border-gray-300 placeholder-gray-400 focus:border-primary ':
            (!errors || errors.length === 0) && !isError,
        }"
        class="
          mt-1
          block
          w-full
          pl-3
          pr-10
          py-2
          text-base
          focus:outline-none
          sm:text-sm
          rounded-md
          disabled:opacity-50
          disabled:cursor-not-allowed
          focus:ring-primary
        "
        v-bind="$attrs"
        @blur="validate"
      >
        <option
          v-for="(option, index) in options"
          :key="`${id}-${index}`"
          :value="option.value"
          class="disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ option.label }}
        </option>
      </select>
      <slot name="errorIcon">
        <div
          v-if="(errors && errors.length > 0) || isError"
          class="
            absolute
            inset-y-0
            right-0
            pr-8
            flex
            items-center
            pointer-events-none
            z-10
          "
          :title="errors && errors[0]"
        >
          <fa-icon
            :icon="faCircleExclamation"
            class="h-5 w-5 text-red-500"
            aria-hidden="true"
          />
        </div>
      </slot>
    </div>

    <div
      v-if="description || (errors && errors.length > 0)"
      class="mt-1 text-sm text-gray-500"
      :id="`${_id}-description`"
    >
      <template v-if="errors && errors.length > 0">
        <slot name="errorList" v-bind="{ errors }">
          <div v-for="error in errors" class="text-red-600">{{ error }}</div>
        </slot>
      </template>

      <template v-else>
        {{ description }}
      </template>
    </div>
  </div>
</template>
