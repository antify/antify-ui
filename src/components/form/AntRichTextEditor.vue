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

const props =
  defineProps<{
    data?: string;
    label?: string;
    validator?: Function;
    errors?: string[];
    isError?: boolean;
  }>();

const _data = computed({
  get: () => {
    return props.data || '';
  },
  set: (val) => {
    emit('update:data', val);
  },
});

const editor = ref(
  useEditor({
    content: _data.value,
    extensions: [
      StarterKit,
      Underline,
      Heading.configure({
        levels: [1, 2, 3],
      }),
    ],
    onUpdate: ({ editor }) => {
      const state = editor.getHTML();
      _data.value = state;

      if (props.validator && typeof props.validator === 'function') {
        props.validator(_data.value);
      }
    },
  })
);

onUnmounted(() => editor?.value?.destroy());
</script>

<template>
  <slot>
    <div v-if="label" class="block text-sm font-medium text-gray-700 mb-2">
      {{ label }}
    </div>
  </slot>

  <div
    v-if="editor"
    class="border border-gray-200 rounded-md overflow-hidden p-2 bg-gray-50"
  >
    <slot name="buttons" v-bind="editor">
      <div class="space-x-1 mb-2 flex">
        <slot name="headers-buttons" v-bind="editor">
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

    <EditorContent
      :editor="editor"
      v-bind="$attrs"
      :class="{
        'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500':
          (errors && errors.length > 0) || isError,
      }"
    />

    <slot name="errorList" v-bind="{ errors }">
      <div v-for="error in errors" class="text-red-600">{{ error }}</div>
    </slot>
  </div>
</template>
