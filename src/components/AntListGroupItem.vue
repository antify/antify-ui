<script lang="ts">
export default {
  name: 'AntListGroupItem',
};
</script>

<script lang="ts" setup>
import {computed, onMounted} from 'vue';
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {ListGroupItemColorType} from "../types/AntListGroupItem.type";
import {handleEnumValidation} from "../handler";
import {RouteLocationRaw} from "vue-router";
import AntIcon from './AntIcon.vue';

const props = withDefaults(defineProps<{
  to?: RouteLocationRaw | string;
  colorType?: ListGroupItemColorType;
  iconLeft?: IconDefinition;
  iconRight?: IconDefinition;
}>(), {
  colorType: ListGroupItemColorType.neutralLightest,
});

const classes = computed(() => {
  const classes = {'text-sm transition-colors inline-block w-full': true},
      variants = {};

  variants[ListGroupItemColorType.danger] = 'bg-danger text-danger-font';
  variants[ListGroupItemColorType.info] = 'bg-info text-info-font';
  variants[ListGroupItemColorType.neutralDark] = 'bg-neutral-dark text-neutral-dark-font';
  variants[ListGroupItemColorType.neutralLight] = 'bg-neutral-light text-neutral-light-font';
  variants[ListGroupItemColorType.neutralLightest] = 'bg-neutral-lightest text-neutral-lightest-font';
  variants[ListGroupItemColorType.primary] = 'bg-primary text-primary-font';
  variants[ListGroupItemColorType.secondary] = 'bg-secondary text-secondary-font';
  variants[ListGroupItemColorType.success] = 'bg-success text-success-font';
  variants[ListGroupItemColorType.warning] = 'bg-warning text-warning-font';
  classes[variants[props.colorType]] = true;

  return classes;
});
const contentWrapperClasses = computed(() => {
  const classes = {'w-full p-2.5 flex gap-2.5 items-center justify-between': true},
      variants = {};

  variants[ListGroupItemColorType.danger] = 'text-danger-font';
  variants[ListGroupItemColorType.info] = 'text-info-font';
  variants[ListGroupItemColorType.neutralDark] = 'text-neutral-dark-font';
  variants[ListGroupItemColorType.neutralLight] = 'text-neutral-light-font';
  variants[ListGroupItemColorType.neutralLightest] = 'text-neutral-lightest-font';
  variants[ListGroupItemColorType.primary] = 'text-primary-font';
  variants[ListGroupItemColorType.secondary] = 'text-secondary-font';
  variants[ListGroupItemColorType.success] = 'text-success-font';
  variants[ListGroupItemColorType.warning] = 'text-warning-font';
  classes[variants[props.colorType]] = props.to !== undefined;
  classes[`hover:bg-neutral-darkest/25 cursor-pointer transition-colors`] = props.to !== undefined;

  return classes;
});

onMounted(() => {
  handleEnumValidation(props.colorType, ListGroupItemColorType, 'ColorType');
});
</script>

<template>
  <component
      :is="to !== undefined ? 'router-link' : 'div'"
      :to="to"
      :class="classes"
  >
    <div :class="contentWrapperClasses">
      <div class="flex items-center gap-2.5">
        <slot v-if="iconLeft" name="icon-left">
          <AntIcon :icon="iconLeft"/>
        </slot>

        <slot/>
      </div>

      <slot v-if="iconRight" name="icon-right">
        <AntIcon :icon="iconRight"/>
      </slot>
    </div>
  </component>
</template>
