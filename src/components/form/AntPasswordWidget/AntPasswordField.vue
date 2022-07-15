<script lang="ts">
export default {
  name: 'AntPasswordField',
};
</script>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { faEye, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { uuid } from 'vue3-uuid';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

const emit = defineEmits(['update:password']);

const props =
  defineProps<{
    id?: string;
    password: string;
    label?: string;
    rules?: Function[];
    description?: string;
    placeholder?: string;
    leadingIcon?: IconDefinition;
    overlappingLabel?: boolean;
    showPassword?: boolean;
  }>();

const _id = ref(props.id || uuid.v4());

const _password = computed({
  get: () => {
    return props.password;
  },
  set: (val) => {
    emit('update:password', val);
  },
});

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

const validate = () => {
  errors.value = [];

  if (props.rules && props.rules.length > 0) {
    props.rules.forEach((validator: Function) => {
      const validationError = validator(_password.value);

      if (!validationError || typeof validationError === 'string') {
        errors.value.push(validationError);
      }
    });
  }
};
</script>

<template>
  <label
    :for="_id"
    class="block text-sm font-medium text-gray-700"
    :class="{
      'absolute -top-2 left-2 -mt-px bg-white z-50': overlappingLabel,
    }"
  >
    <slot name="passwordLabel" v-bind="{ id: _id }">
      {{ label }}
    </slot>
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
      v-model="_password"
      :id="_id"
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
    />

    <div class="absolute inset-y-0 h-full right-0 pr-3 space-x-3 flex">
      <div
        v-if="showPassword"
        class="cursor-pointer h-full flex items-center"
        @click="revealPassword()"
      >
        <slot name="showPasswordIcon">
          <fa-icon
            :icon="faEye"
            class="h-5 w-5 text-gray-400 hover:text-gray-700"
            aria-hidden="true"
          />
        </slot>
      </div>

      <div
        v-if="errors && errors.length > 0"
        class="pointer-events-none h-full flex items-center"
      >
        <slot name="passwordErrorIcon">
          <fa-icon
            :icon="faCircleExclamation"
            class="h-5 w-5 text-red-500"
            aria-hidden="true"
          />
        </slot>
      </div>
    </div>
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
</template>
