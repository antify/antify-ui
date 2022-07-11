<script lang="ts">
export default {
  name: 'AntPasswordField',
};
</script>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { faEye, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { uuid } from 'vue3-uuid';

const {
  id = uuid.v4(),
  password,
  label,
  rules = [],
  description,
  placeholder,
  leadingIcon,
  overlappingLabel = false,
  showPassword = true,
} = defineProps<{
  id?: string;
  password: string;
  label?: string;
  rules: [];
  description?: string;
  placeholder?: string;
  leadingIcon?: Object;
  overlappingLabel?: boolean;
  showPassword?: boolean;
}>();

const emit = defineEmits(['input']);

const defaultType = ref<String>('password');

const useType = computed({
  get(): string {
    return defaultType.value.toString();
  },
  set(value: string) {
    defaultType.value = value;
  },
});

const revealPassword = () => {
  if (useType.value === 'password') {
    useType.value = 'text';
  } else {
    useType.value = 'password';
  }
};

const errors = ref<Array<string>>([]);
const content = ref<string>(password as string);

const validate = () => {
  errors.value = [];

  if (rules && rules.length > 0) {
    rules.forEach((validator: Function) => {
      const isValid = validator(content.value);

      if (!isValid || typeof isValid === 'string') {
        errors.value.push(isValid);
      }
    });
  }
};

const handleInput = () => {
  emit('input', content.value);
};
</script>

<template>
  <label
    :for="id"
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
      v-model="password"
      :id="id"
      :type="useType"
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
          errors && errors.length > 0,
        'pl-10': leadingIcon,
      }"
      :aria-describedby="`${id}-description`"
      :aria-invalid="errors && errors.length > 0"
      v-bind="$attrs"
      @blur="validate"
      @input="handleInput"
    />

    <div
      v-if="showPassword"
      class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
      @click="revealPassword()"
    >
      <fa-icon
        :icon="faEye"
        class="h-5 w-5 text-gray-400 hover:text-gray-700"
        aria-hidden="true"
      />
    </div>

    <div
      v-if="errors && errors.length > 0"
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

    <p
      v-if="description || (errors && errors.length > 0)"
      class="mt-2 text-sm text-gray-500"
      :id="`${id}-description`"
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
