<script lang="ts">
export default {
  name: 'AntModal',
};
</script>

<script lang="ts" setup>
import { faX } from '@fortawesome/free-solid-svg-icons';
import AntButton from '../form/AntButton.vue';
import AntHeader from './AntHeader.vue';

defineEmits(['update:active']);
defineProps<{
  active: boolean;
  fullscreen?: boolean;
  title?: string;
}>();
</script>

<template>
  <div
    class="
      items-end
      justify-center
      text-center
      sm:block
      sm:p-0
      fixed
      inset-0
      transform
      cursor-pointers
    "
    :class="{
      'h-0 overflow-hidden': !active,
      'h-full': active,
    }"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="
        fixed
        inset-0
        bg-gray-500 bg-opacity-20
        transition-all
        duration-500
      "
      :class="{ 'opacity-0': !active, 'opacity-100': active }"
      aria-hidden="true"
      @click="$emit('update:active', false)"
    />

    <!-- Modal panel, show/hide based on modal state. -->
    <div class="fixed z-10 inset-0 overflow-y-auto pointer-events-none">
      <div
        class="flex items-end sm:items-center justify-center text-center sm:p-0"
      >
        <div
          class="
            relative
            bg-white
            text-left
            shadow-xl
            sm:max-w-sm
            sm:w-full
            transform
            transition-all
            duration-500
            flex flex-col
            max-h-screen
            pointer-events-auto
          "
          :class="{
            'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95': !active,
            'opacity-100 translate-y-0 sm:scale-100': active,
            'h-screen max-h-screen top-0 left-0 min-w-full': fullscreen,
            'top-12 min-w-full sm:min-w-96': !fullscreen,
          }"
        >
          <div class="relative border-b w-full py-4 pl-3">
            <slot name="header">
              <slot name="closeIcon">
                <fa-icon
                  :icon="faX"
                  class="
                    absolute
                    right-0
                    opacity-50
                    hover:opacity-100
                    transition-all
                    duration-500
                    w-5
                    h-full
                    pr-3
                    top-0
                    font-thin
                    cursor-pointer
                  "
                  @click="$emit('update:active', false)"
                />
              </slot>

              <AntHeader header-type="h3" class="block mr-16">
                <slot name="title"> {{ title }} </slot>
              </AntHeader>
            </slot>
          </div>

          <div class="p-3 overflow-y-auto" :class="{ 'h-full': fullscreen }">
            <slot>
              <p class="text-sm text-gray-500">Fill me</p>
            </slot>
          </div>

          <div
            class="
              mt-5
              sm:mt-6
              text-right
              px-3
              py-4
              border-t
              flex
              justify-end
              space-x-4
            "
          >
            <slot name="buttons">
              <AntButton
                label="Close"
                :primary="true"
                @click="$emit('update:active', false)"
              />
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
