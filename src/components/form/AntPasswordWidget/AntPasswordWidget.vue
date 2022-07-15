<script lang="ts">
export default {
  name: 'AntPasswordWidget',
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import { ref, computed } from 'vue';
import AntPasswordField from './AntPasswordField.vue';
import { uuid } from 'vue3-uuid';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { EventEmitter } from '@tiptap/core/dist/packages/core/src/EventEmitter';

const emit = defineEmits(['update:password']);

const props =
  defineProps<{
    id?: string;
    password: string;
    label?: string;
    repeatLabel?: string;
    placeholder?: string;
    repeatPlaceholder?: string;
    passwordValidator?: Function;
    passwordRepeatValidator?: Function;
    description?: string;
    leadingIcon?: IconDefinition;
    overlappingLabel?: boolean;
    showPassword: boolean;
  }>();

const _id = ref(props.id || uuid.v4());

const defaultPasswordValidator = (value: any) => {
  if (!value) return ['Password can not be empty.'];
  if (value?.length < 8) return ['Min password length is 8 symbols'];
};

const _passwordValidator = ref(
  props.passwordValidator || defaultPasswordValidator
);

const defaultPasswordRepeatValidator = (value: any) => {
  console.log('BLUB', _password.value);
  if (!value) return ['Repeat password is required.'];
  if (value !== _password.value) return ['Passwords need to be equal'];
};
const _passwordRepeatValidator = ref(
  props.passwordRepeatValidator || defaultPasswordRepeatValidator
);

const repeatPassword = ref<string>('');

const _password = computed<string>({
  get: () => {
    return props.password;
  },
  set: (val) => {
    emit('update:password', val);
  },
});
</script>

<template>
  <div>
    <div class="mt-1 relative">
      <AntPasswordField
        v-model:password="_password"
        :id="_id"
        :label="label"
        :validator="_passwordValidator"
        :placeholder="placeholder"
        :leading-icon="leadingIcon"
        :overlapping-label="overlappingLabel"
        :show-password="showPassword"
        :description="description"
      />

      <AntPasswordField
        v-model:password="repeatPassword"
        :id="`${_id}-password-repeat`"
        :label="repeatLabel"
        :validator="_passwordRepeatValidator"
        :placeholder="repeatPlaceholder"
        :leading-icon="leadingIcon"
        :overlapping-label="overlappingLabel"
        :show-password="showPassword"
        :description="description"
      />
    </div>
  </div>
</template>
