<script lang="ts">
export default {
  name: 'AntInput',
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { ref, computed } from 'vue';
import { v4 } from 'uuid';

const emit = defineEmits(['update:value']);

const props =
  defineProps<{
    id?: string;
    value: string;
    label?: string;
    type?: string;
    description?: string;
    placeholder?: string;
    leadingIcon?: Object;
    overlappingLabel?: boolean;
    validator?: Function;
    errors?: string[];
    isError?: boolean;
  }>();

const _id = ref(props.id ? props.id : v4());
const _overlappingLabel = ref(
  props.overlappingLabel ? props.overlappingLabel : false
);
const _errors = ref(props.errors || []);

const content = computed<string>({
  get: () => {
    return props.value as string;
  },
  set: (val: string) => {
    emit('update:value', val);
  },
});

const validate = () => {
  if (props.validator) {
    props.validator(content.value);
  }
};
</script>

<template>
  <div class="relative">
    <label
      v-if="label"
      :for="_id"
      :class="{
        'absolute -top-2 left-2 -mt-px bg-white z-50': _overlappingLabel,
      }"
      class="block text-sm font-medium text-gray-700"
    >
      <slot name="label">
        {{ label }}
      </slot>
    </label>

    <div class="relative">
      <slot name="leadingIcon">
        <div
          v-if="leadingIcon"
          class="
            absolute
            inset-y-0
            left-0
            pl-3
            flex
            items-center
            pointer-events-none
            z-10
          "
        >
          <fa-icon :icon="leadingIcon" class="h-5 w-5 text-gray-400" />
        </div>
      </slot>

      <input
        v-model="content"
        v-bind="$attrs"
        :id="_id"
        :type="type"
        :placeholder="placeholder || label"
        :aria-describedby="`${_id}-description`"
        :aria-invalid="_errors.length > 0 || isError"
        :class="{
          'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500':
            _errors.length > 0 || isError,
          'pl-10': leadingIcon,
        }"
        class="
          appearance-none
          block
          w-full
          px-3
          py-2
          border border-gray-300
          rounded-md
          shadow-sm
          placeholder-gray-400
          transition-all
          duration-300
          focus:outline-none
          focus:ring-primary-light
          focus:border-primary-light
          sm:text-sm
        "
        @blur="validate"
      />

      <slot name="errorIcon">
        <div
          v-if="_errors.length > 0 || isError"
          class="
            absolute
            inset-y-0
            right-0
            pr-3
            flex
            items-center
            pointer-events-none
            z-10
          "
          :title="_errors[0]"
        >
          <fa-icon
            :icon="faCircleExclamation"
            class="h-5 w-5 text-red-500"
            aria-hidden="true"
          />
        </div>
      </slot>
    </div>
  </div>

  <div
    v-if="description || (_errors && _errors.length > 0)"
    class="mt-2 text-sm text-gray-500"
    :id="`${_id}-description`"
  >
    <template v-if="_errors && _errors.length > 0">
      <div v-for="error in _errors" class="text-red-600">{{ error }}</div>
    </template>

    <template v-else>
      {{ description }}
    </template>
  </div>
</template>
