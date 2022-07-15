<script lang="ts">
export default {
  name: 'AntLoginWidget',
};
</script>

<script lang="ts" setup></script>

<template>
  <form class="mt-8 space-y-6">
    <input type="hidden" name="remember" value="true" />

    <div class="rounded-md shadow-sm -space-y-px">
      <div>
        <slot name="emailField"></slot>
      </div>

      <div>
        <slot name="passwordField"></slot>
      </div>
    </div>

    <div class="flex items-center justify-between">
      <slot name="beforeSubmit"> </slot>
    </div>

    <div>
      <slot name="submitButton">
        <AntButton type="submit" label="Sign in" />
      </slot>
    </div>
  </form>
</template>
