<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ArrowRight } from 'lucide-vue-next';

const { variant } = defineProps({ variant: String });

const isBoxShadowVisible = ref(false);
const isButtonVisible = ref(false);
const isRegular = !variant;

onMounted(() => {
  setTimeout(() => {
    isBoxShadowVisible.value = true;
  }, 1000);

  setTimeout(() => {
    isButtonVisible.value = true;
  }, 2000);
});


</script>

<template>
  <button class="button" v-bind=$attrs role="button" :class="{
    active: isBoxShadowVisible,
    isButtonVisible,
    convex: 'convex' === variant
  }">
    <slot/>
    <div class="icon" v-if="isRegular">
      <ArrowRight/>
    </div>
  </button>
</template>

<style scoped lang="scss">
button.button {
  @include flex;
  -webkit-box-align: stretch;
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
  -webkit-box-pack: center;
  -webkit-text-size-adjust: 100%;
  align-items: stretch;
  appearance: none;
  background-color: var(--almost-white);
  border-radius: $radius-2;
  border: none;
  box-sizing: border-box;
  color: var(--text-base);
  cursor: pointer;
  flex-direction: column;
  font-size: $font-xtra-small;
  height: $spacing-7;
  justify-content: center;
  line-height: $spacing-3;
  overflow: hidden;
  padding: $spacing-1;
  position: relative;
  transition: $xtra-long-transition-all;
  width: 100%;

  &.active {
    box-shadow: var(--box-shadow-active);
  }

  &.active.convex {
    box-shadow: var(--shadow-convex);

    &:hover {
      box-shadow: var(--box-shadow-hover);
    }
    &:active {
      box-shadow: var(--box-shadow-active);
    }

  }

  &.isButtonVisible {
    .icon {
      opacity: 1;
    }
  }

  &:hover {
    .icon {
      transition: all .45s cubic-bezier(.85, -0.5, .14, 1.20);
      width: calc(100% - 0.6em);

      svg {
        transform: translateX(0.1em);
      }
    }
  }

  &:active {
    transition: box-shadow 3s ease;

    .icon {
      box-shadow: var(--box-shadow-active);
      height: $spacing-7;
      right: 0;
      transition: box-shadow .3s ease;
      width: 100%;

    }
  }

  .icon {
    @include flex;
    align-items: center;
    background-color: var(--almost-white);
    border-radius: 0.7em;
    box-shadow: 0.1em 0.1em 0.6em 0.2em var(--off-blue);
    height: 2.2em;
    justify-content: center;
    margin-left: $spacing-2;
    opacity: 0;
    position: absolute;
    right: 0.3em;
    transition: $transition-all;
    width: 2.2em;

    svg {
      width: 1.1em;
      transition: transform 0.3s;
      color: var(--primary);
    }
  }
}
</style>
