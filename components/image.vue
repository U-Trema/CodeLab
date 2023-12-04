<script setup lang="ts">
import { ref, onMounted } from 'vue';

const { width, height } = defineProps({ width: String, height: String });
const isBoxShadowVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isBoxShadowVisible.value = true;
  }, 1000);
});

</script>

<template>
  <div class="image-container" :class="{ active: isBoxShadowVisible }">
    <div class="inner-container">
      <NuxtImg class="image" v-bind="$attrs"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
div.image-container {
  @include flex;
  border-radius: $circle;
  border: $border-4 solid transparent;
  box-sizing: border-box;
  height: v-bind(height);
  overflow: hidden;
  transition: $long-transition-all;
  width: v-bind(width);

  &.active {
    box-shadow: var(--box-shadow-m);
    border-color: var(--almost-white);
    transition: $long-transition-all;
  }

  div.inter-container {
    overflow: hidden;
    border-radius: $circle;
    box-shadow: var(--box-shadow-active);
    padding: 10px;
  }

  div.inner-container {
    background: transparent;
    overflow: hidden;
    border-radius: $circle;
    display: flex;
    flex: 1;
    align-items: center;
  }

  img.image {
    width: 100%;
    border-radius: $circle;
  }
}
</style>
