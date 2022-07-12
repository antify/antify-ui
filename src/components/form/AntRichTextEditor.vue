<script lang="ts">
export default {
  name: 'AntRichTextEditor',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { ref, computed, onUnmounted } from 'vue';
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Heading from '@tiptap/extension-heading';
import AntButton from '../buttons/AntButton.vue';

const emit = defineEmits(['update:data']);

const {
  data,
  label,
  showLabel = true,
} = defineProps<{
  data?: string;
  label?: string;
  showLabel?: string;
}>();

const editor = ref(
  useEditor({
    content: data,
    extensions: [
      StarterKit,
      Underline,
      Heading.configure({
        levels: [1, 2, 3],
      }),
    ],
  })
);

const _data = computed({
  get: () => {
    return data || '';
  },
  set: (val) => {
    emit('update:data', val);
  },
});

onUnmounted(() => editor?.value?.destroy());
</script>

<template>
  <div v-if="label && showLabel" class="mb-2">{{ label }}</div>

  <div
    v-if="editor"
    class="border border-gray-200 rounded-md overflow-hidden p-2 bg-gray-50"
  >
    <slot name="buttons" v-bind="editor">
      <div class="space-x-1 mb-2 flex">
        <slot name="headers-dropdown" v-bind="editor">
          <AntButton
            @click="
              editor
                ? editor.chain().focus().toggleHeading({ level: 1 }).run()
                : false
            "
            :class="{ 'bg-gray-200': editor.isActive('heading', { level: 1 }) }"
            class="hover:bg-gray-200 border-none"
          >
            <span class="">H1</span>
          </AntButton>

          <AntButton
            @click="
              editor
                ? editor.chain().focus().toggleHeading({ level: 2 }).run()
                : false
            "
            :class="{ 'bg-gray-200': editor.isActive('heading', { level: 2 }) }"
            class="hover:bg-gray-200 border-none"
          >
            <span class="">H2</span>
          </AntButton>

          <AntButton
            @click="
              editor
                ? editor.chain().focus().toggleHeading({ level: 3 }).run()
                : false
            "
            :class="{ 'bg-gray-200': editor.isActive('heading', { level: 3 }) }"
            class="hover:bg-gray-200 border-none"
          >
            <span class="">H3</span>
          </AntButton>
        </slot>

        <slot name="bold-button" v-bind="editor">
          <AntButton
            @click="editor ? editor.chain().focus().toggleBold().run() : false"
            :class="{ 'bg-gray-200': editor.isActive('bold') }"
            class="hover:bg-gray-200 border-none"
          >
            <span class="font-bold">B</span>
          </AntButton>
        </slot>

        <slot name="italic-button" v-bind="editor">
          <AntButton
            @click="
              editor ? editor.chain().focus().toggleItalic().run() : false
            "
            :class="{ 'bg-gray-200': editor.isActive('italic') }"
            class="hover:bg-gray-200 border-none"
          >
            <span class="italic">I</span>
          </AntButton>
        </slot>

        <slot name="underline-button" v-bind="editor">
          <AntButton
            @click="
              editor ? editor.chain().focus().toggleUnderline().run() : false
            "
            :class="{ 'bg-gray-200': editor.isActive('underline') }"
            class="hover:bg-gray-200 border-none"
          >
            <span class="underline">U</span>
          </AntButton>
        </slot>

        <slot name="strike-button" v-bind="editor">
          <AntButton
            @click="
              editor ? editor.chain().focus().toggleStrike().run() : false
            "
            :class="{ 'bg-gray-200': editor.isActive('strike') }"
            class="hover:bg-gray-200 border-none"
          >
            <span class="line-through">S</span>
          </AntButton>
        </slot>

        <slot name="custom-buttons" v-bind="editor"></slot>
      </div>
    </slot>

    <EditorContent :editor="editor" v-model="_data" />
  </div>
</template>
