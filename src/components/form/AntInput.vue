<script lang="ts">
export default {
  name: 'AntInput',
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { onMounted, ref } from 'vue';

const props = defineProps({
  id: {
    type: String,
    default: '',
  },
  value: {
    required: true,
  },
  label: {
    type: String,
  },
  rules: {
    type: Array,
    default: [],
  },
  type: {
    type: String,
    default: 'text',
  },
  description: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  leadingIcon: {
    type: Object,
  },
  overlappingLabel: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['input']);

const errors = ref<Array<string>>([]);
const _id = ref<string>('');
const content = ref<string>(props.value);

const validate = () => {
  errors.value = [];

  if (props.rules && props.rules.length > 0) {
    props.rules.forEach((validator) => {
      const isValid = validator(content.value);
      if (!isValid || typeof isValid === 'string') {
        errors.value.push(isValid);
      }
    });
  }
};

const getId = () => {
  return `${_id.value} ${props.id}`.trim();
};

const handleInput = () => {
  emit('input', content.value);
};
</script>

<template>
  <div>
    <div class="relative">
      <label
        :for="_id"
        v-if="label"
        class="block text-sm font-medium text-gray-700"
        :class="{
          'absolute -top-2 left-2 -mt-px bg-white z-50': overlappingLabel,
        }"
      >
        {{ label }}
      </label>

      <div class="relative">
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
          "
        >
          <fa-icon :icon="leadingIcon" class="h-5 w-5 text-gray-400" />
        </div>

        <input
          v-model="content"
          :type="type"
          :placeholder="placeholder || label"
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
            focus:outline-none
            focus:ring-primary-light
            focus:border-primary-light
            sm:text-sm
          "
          :class="{
            'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500':
              errors.length > 0,
            'pl-10': leadingIcon,
          }"
          :aria-describedby="`${_id}-description`"
          :aria-invalid="errors.length > 0"
          v-bind="$attrs"
          @blur="validate"
          @input="handleInput"
        />

        <div
          v-if="errors.length > 0"
          class="
            absolute
            inset-y-0
            right-0
            pr-3
            flex
            items-center
            pointer-events-none
          "
        >
          <fa-icon
            :icon="faCircleExclamation"
            class="h-5 w-5 text-red-500"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>

    <p
      v-if="description || (errors && errors.length > 0)"
      class="mt-2 text-sm text-gray-500"
      :id="`${_id}-description`"
    >
      <template v-if="errors">
        <div v-for="error in errors" class="text-red-600">{{ error }}</div>
      </template>

      <template v-else>
        {{ description }}
      </template>
    </p>
  </div>
</template>
