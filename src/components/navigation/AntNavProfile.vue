<script lang="ts">
export default {
  name: 'AntNavProfile',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
const props = defineProps({
  profileHref: {
    type: String,
  },
	userName: {
		type: String,
	},
});
</script>

<template>
  <div class="flex-shrink-0 flex border-t border-gray-200 p-4">
    <a :href="profileHref" class="flex-shrink-0 group block">
      <div class="flex items-center">
        <div>
					<slot name="profilePicture" />
        </div>

        <div class="ml-3">
          <p
            class="
              text-base
              font-medium
              text-gray-700
              group-hover:text-gray-900
            "
          >
            {{userName}}
          </p>

          <p
            class="text-sm font-medium text-gray-500 group-hover:text-gray-700"
          >
            <slot name="viewProfile" />
          </p>
        </div>
      </div>
    </a>
  </div>
</template>
