<script lang="ts">
export default {
  name: 'AntInputLabel',
};
</script>

<script lang="ts" setup>
import {onMounted, computed} from 'vue';
import Size from '../../../enums/Size.enum'
import AntInputLabel from "./AntInputLabel.vue";
import AntInputDescription from "./AntInputDescription.vue";
import {ColorType} from "../../../enums/ColorType.enum";
import {Validator} from "@antify/validate";
import {handleEnumValidation} from "../../../handler";
import AntInputLimiter from "./AntInputLimiter.vue";

const props = withDefaults(defineProps<{
  label?: string;
  description?: string;
  size?: Size;
  colorType?: ColorType;
  skeleton?: boolean;
  validator?: Validator;
  limiterValue?: number;
  limiterMaxValue?: number;
}>(), {
  colorType: ColorType.neutral,
  skeleton: false,
  size: Size.md,
});

onMounted(() => {
  handleEnumValidation(props.size, Size, 'Size');
  handleEnumValidation(props.colorType, ColorType, 'ColorType');
});

const _colorType = computed(() => props.validator?.hasErrors() ? ColorType.danger : props.colorType)
const errors = computed(() => props.validator?.getErrors() || [])
</script>

<template>
  <div class="flex flex-col items-start gap-1.5">
    <AntInputLabel
        v-if="label"
        :label="label"
        :size="size"
        :skeleton="skeleton"
    >
      <div class="w-full">
        <slot/>
      </div>
    </AntInputLabel>

    <div class="flex justify-between w-full">
      <AntInputDescription
          v-if="description || errors"
          :size="size"
          :skeleton="skeleton"
          :color-type="_colorType"
      >
        <slot name="description">
          <template v-if="errors.length === 1">
            {{ errors[0] }}
          </template>

          <template v-else-if="errors.length > 1">
            <ul class="list-disc list-outside pl-4">
              <li v-for="error of errors" class="marker:m-none marker:p-none">{{ error }}</li>
            </ul>
          </template>

          <template v-else>
            {{ description }}
          </template>
        </slot>
      </AntInputDescription>

      <AntInputLimiter
          v-if="limiterMaxValue !== undefined && limiterValue !== undefined"
          :value="limiterValue"
          :max-value="limiterMaxValue"
          :color-type="_colorType"
          :size="size"
          :skeleton="skeleton"
      >
        {{ limiterValue }}/{{ limiterMaxValue }}
      </AntInputLimiter>
    </div>
  </div>
</template>
