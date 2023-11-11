<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isBoxShadowVisible = ref(false);
const { label, error } = defineProps({ label: String, error: String, modelValue: String });
defineEmits(['update:modelValue']);

onMounted(() => {
  setTimeout(() => {
    isBoxShadowVisible.value = true;
  }, 300);
});
</script>

<template>
  <div :class="{ active: isBoxShadowVisible, error }" class="container">
    <input class="input" v-bind="$attrs" :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)"
    />
    <label class="label">{{ label }}</label>
    <p class="error-message" v-if="error">{{ error }}</p>
  </div>
</template>

<style scoped lang="scss">
div.container {
  position: relative;
  border-radius: $radius-2;
  box-shadow: none;
  box-sizing: border-box;
  display: block;
  margin: $spacing-0 $spacing-0 $spacing-5;
  transition: $xtra-long-transition-all;

  &:has(> input.input:focus) {
    box-shadow: var(--box-shadow-active);
  }

  &.active {
    box-shadow: var(--shadow-concave);
  }

  &.error {
    box-shadow: var(--danger-shadow-concave);
  }

  &.valid {
    box-shadow: var(--primary-shadow-concave);
  }

  input.input {
    background-color: var(--transparant);
    border-radius: $radius-2;
    box-shadow: none;
    box-sizing: border-box;
    display: block;
    font: inherit;
    font-size: $font-xtra-small;
    height: $spacing-7;
    line-height: $spacing-3;
    padding: $spacing-1 $spacing-2;
    transition: $xtra-long-transition-all;
    vertical-align: middle;
    width: 100%;

    &:-webkit-autofill,
    &:autofill {
      box-shadow: var(--shadow-concave);
    }


    &:focus ~ label.label {
      transition: 0.3s;
      padding-left: $spacing-1;
      transform: translateY(-35px);
      opacity: 1;
    }
  }

  label.label {
    font-size: $font-tiny;
    left: $spacing-1;
    opacity: 0;
    padding-left: $spacing-2;
    pointer-events: none;
    position: absolute;
    top: $spacing-3;
    transition: $xtra-long-transition-all;
  }

  p.error-message {
    bottom: -$spacing-xxs;
    color: var(--danger);
    font-size: $font-tiny;
    left: $spacing-2;
    position: absolute;
  }
}
</style>
