<script lang="ts">
export default {
  name: 'AntInput',
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { is } from 'date-fns/locale';
import { ref, computed } from 'vue';
import { uuid } from 'vue3-uuid';

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
  }>();

const _id = ref(props.id ? props.id : uuid.v4());
const _type = ref(props.type ? props.type : 'text');
const _overlappingLabel = ref(
  props.overlappingLabel ? props.overlappingLabel : false
);

const errors = ref<Array<string>>([]);
const content = computed<string>({
  get: () => {
    return props.value as string;
  },
  set: (val: string) => {
    emit('update:value', val);
  },
});

const validate = () => {
  errors.value = [];

  if (props.validator) {
    const messages = props.validator(content.value);

    if (Array.isArray(messages)) {
      messages.forEach((message) => {
        errors.value.push(message);
      });
    }
  }
};
</script>

<template>
  <div>
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
            "
          >
            <fa-icon :icon="leadingIcon" class="h-5 w-5 text-gray-400" />
          </div>
        </slot>

        <input
          v-model="content"
          :id="_id"
          :type="_type"
          :placeholder="placeholder || label"
          :aria-describedby="`${id}-description`"
          :aria-invalid="errors.length > 0"
          :class="{
            'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500':
              errors.length > 0,
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
            focus:outline-none
            focus:ring-primary-light
            focus:border-primary-light
            sm:text-sm
          "
          v-bind="$attrs"
          @blur="validate"
        />

        <slot name="errorIcon">
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
        </slot>
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
  </div>
</template>
