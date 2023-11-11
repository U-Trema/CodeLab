<script setup lang="ts">
import { ref, onMounted } from 'vue';

const { active } = defineProps({ active: Boolean });
const isBoxShadowVisible = ref(false);

onMounted(() => {
  setTimeout(() => { isBoxShadowVisible.value = true; }, 1000);
});
</script>

<template>
  <div class="box-container">
    <div class="box" :class="{ active: isBoxShadowVisible && active }" v-bind="$attrs">
      <slot/>
    </div>
  </div>
</template>

<style scoped lang="scss">
div.box-container {
  @include flex;

  div.box {
    @include flex;

    border-radius: $radius-2;
    line-height: $spacing-3;
    padding: $spacing-2;
    transition: $long-transition-all;

    &.hover, &:hover {
      @include button-cursor;
      box-shadow: var(--box-shadow-hover);
      transition: $long-transition-all;
    }

    &.active, &:active {
      box-shadow: var(--box-shadow-active);
      transition: $long-transition-all;
    }
  }
}
</style>
