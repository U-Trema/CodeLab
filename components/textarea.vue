<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Input from "./input.vue";

const { label } = defineProps({ label: String, modelValue: String });
defineEmits(['update:modelValue']);
const isBoxShadowVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isBoxShadowVisible.value = true;
  }, 300);
});
</script>

<template>
  <div :class="{ active: isBoxShadowVisible }" class="container">
    <textarea class="textarea" v-bind="$attrs" :value="modelValue"
              @input="$emit('update:modelValue', $event.target.value)"
    />
    <label class="label">{{ label }}</label>
  </div>
</template>

<style scoped lang="scss">
div.container {
  border-radius: $radius-2;
  box-shadow: none;
  margin: $spacing-0 $spacing-0 $spacing-5;
  position: relative;
  transition: $xtra-long-transition-all;

  &:has(> textarea.textarea:focus) {
    box-shadow: var(--box-shadow-active);
  }

  &.active {
    box-shadow: var(--shadow-concave);
  }

  textarea.textarea {
    background-color: var(--transparant);
    border-radius: $radius-2;
    box-sizing: border-box;
    color: var(--text-base);
    font: inherit;
    line-height: $spacing-3;
    padding: $spacing-2;
    transition: $xtra-long-transition-all;
    vertical-align: middle;
    width: 100%;

    &:focus ~ label.label {
      opacity: 1;
      padding-left: 2px;
      transform: translateY(-35px);
      transition: 0.3s;
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
}

@media screen and (max-width: 768px) {
  div.container {
    textarea.textarea {
      &:focus ~ label.label {
        transform: translateY(-20px);
      }
    }
  }
}
</style>
