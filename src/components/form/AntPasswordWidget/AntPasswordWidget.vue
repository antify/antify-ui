<script lang="ts">
export default {
  name: 'AntPasswordWidget',
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import { ref } from 'vue';
import AntPasswordField from './AntPasswordField.vue';
import { uuid } from 'vue3-uuid';

const {
  id = uuid.v4(),
  password,
  label,
  repeatLabel,
  placeholder,
  repeatPlaceholder,
  rulesPassword = [
    (value: any) => !!value || 'Password can not be empty.',
    (value: any) => value.length > 8 || 'Min password length is 8 symbols',
  ],
  rulesPasswordRepeat = [
    (value: any) => !!value || 'Repeat password is required',
    // @ts-ignore
    (value: any) => value != password || 'Password needs to be the same',
  ],
  description,
  leadingIcon,
  overlappingLabel = false,
  showPassword = true,
} = defineProps<{
  id?: string;
  password: string;
  label?: string;
  repeatLabel?: string;
  placeholder?: string;
  repeatPlaceholder?: string;
  rulesPassword?: [];
  rulesPasswordRepeat?: [];
  description?: string;
  leadingIcon?: Object;
  overlappingLabel?: boolean;
  showPassword?: boolean;
}>();

const repeatPassword = ref<string>('');
</script>

<template>
  <div>
    <div class="mt-1 relative">
      <AntPasswordField
        :id="id"
        :password.sync="password"
        :label="label"
        :rules="rulesPassword"
        :placeholder="placeholder"
        :leading-icon="leadingIcon"
        :overlapping-label="overlappingLabel"
        :show-password="showPassword"
        :description="description"
      />

      <AntPasswordField
        :id="id"
        :password.sync="repeatPassword"
        :label="repeatLabel"
        :rules="rulesPasswordRepeat"
        :placeholder="repeatPlaceholder"
        :leading-icon="leadingIcon"
        :overlapping-label="overlappingLabel"
        :show-password="showPassword"
        :description="description"
      />
    </div>
  </div>
</template>
