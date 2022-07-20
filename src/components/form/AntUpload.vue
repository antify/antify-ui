<script lang="ts">
export default {
  name: 'AntUpload',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { generateId } from '../../utils/helper';

type UploadTarget = { target: any };
type FileInfo = { src: string; fileName: string };

const emit = defineEmits(['update:value']);

const props =
  defineProps<{
    id?: string;
    label?: string;
    acceptType?: string;
    icon?: Object;
    iconClass?: string;
    value: UploadTarget;
    showPreview?: boolean;
  }>();

const _id = ref(props.id ||  generateId(40));
const _acceptType = ref(props.acceptType || '*');

const uploaded = ref<FileInfo>({
  src: '',
  fileName: '',
});

const _value = computed({
  get: () => {
    return props.value;
  },
  set: (val: UploadTarget) => {
    emit('update:value', val);
    uploaded.value.src = URL.createObjectURL(val.target?.files[0]);
    uploaded.value.fileName = val.target?.files[0].name;
  },
});
</script>

<template>
  <div class="flex">
    <slot name="preview" v-bind="uploaded">
      <div class="left-0 m-2 flex flex-col items-center justify-center">
        <img
          v-if="uploaded.src && showPreview"
          :src="uploaded.src"
          alt="Preview"
          class="w-16 h-16"
        />

        <p class="text-ellipsis overflow-hidden whitespace-nowrap max-w-16">
          {{ uploaded.fileName }}
        </p>
      </div>
    </slot>

    <label
      :for="_id"
      class="
        py-3
        border-2 border-dashed
        w-full
        text-center
        flex
        items-center
        justify-center
        text-gray-400
        hover:text-gray-600
        hover:border-gray-600
        transition-all
        duration-500
        flex-wrap
        cursor-pointer
        relative
      "
    >
      <slot name="label">{{ label }}</slot>

      <slot name="icon">
        <fa-icon
          v-if="icon"
          :icon="icon"
          class="block w-full h-10"
          :class="iconClass"
        />
      </slot>
    </label>

    <input
      @change="(val) => (_value = val)"
      :id="_id"
      :accept="_acceptType"
      class="hidden"
      type="file"
      v-bind="$attrs"
    />
  </div>
</template>
