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

const props =
  defineProps<{
    id?: string;
    password: string;
    label?: string;
    repeatLabel?: string;
    placeholder?: string;
    repeatPlaceholder?: string;
    rulesPassword?: Function[];
    rulesPasswordRepeat?: Function[];
    description?: string;
    leadingIcon?: Object;
    overlappingLabel?: boolean;
    showPassword: boolean;
  }>();

const _id = ref(props.id || uuid.v4());

const _rulesPassword = ref(
  props.rulesPassword || [
    (value: any) => !!value || 'Password can not be empty.',
    (value: any) => value?.length >= 8 || 'Min password length is 8 symbols',
  ]
);

const _rulesPasswordRepeat = ref(
  props.rulesPasswordRepeat || [
    (value: any) => !!value || 'Repeat password is required',
    (value: any) => value === props.password || 'Password needs to be the same',
  ]
);

const repeatPassword = ref<string>('');
</script>

<template>
  <div>
    <div class="mt-1 relative">
      <AntPasswordField
        v-model:password="password"
        :id="_id"
        :label="label"
        :rules="_rulesPassword"
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
        :rules="_rulesPasswordRepeat"
        :placeholder="repeatPlaceholder"
        :leading-icon="leadingIcon"
        :overlapping-label="overlappingLabel"
        :show-password="showPassword"
        :description="description"
      />
    </div>
  </div>
</template>
