<script setup lang="ts">
import { ref, onMounted } from "vue";
import Switch from "./components/switch.vue";

const isBoxShadowVisible = ref(false);
const colorMode = useColorMode();
const changeMode = () => colorMode.value = colorMode.value === "light" ? "dark" : "light";

onMounted(() => {
  setTimeout(() => {
    isBoxShadowVisible.value = true;
  }, 1000);
});

useHead({
  title: "UTrema",
  meta: [
    {name: "description", content: "UTrema - Présentation des Experts en Développement"},
    {name: "image", content: "/images/ogImage.png"},
    {name: "url", content: "https://utrema.fr"},
  ],
});
useSeoMeta({
  title: "ÜTrema",
  ogTitle: "ÜTrema",
  description: "UTrema - Présentation des Experts en Développement",
  ogDescription: "UTrema - Présentation des Experts en Développement",
  ogImage: "/images/ogImage.png",
});

</script>

<template>
  <div class="application-container">
    <div class="inner-container" :class="{ active: isBoxShadowVisible }">
      <Header/>
      <div class="content-container">
        <NuxtPage/>
      </div>
      <Footer :changeMode="changeMode"/>
    </div>
  </div>
</template>

<style lang="scss">
div.application-container {
  @include flex;
  align-items: center;
  background-color: var(--background-color);
  box-sizing: border-box;
  color: var(--text-main);
  height: 100vh;
  justify-content: center;
  padding: $spacing-s $spacing-m $spacing-m;
  transition: $xtra-long-transition-all;
  overflow: hidden;

  & > div.inner-container {
    @include flex;
    aspect-ratio: 1;
    background-color: var(--background-color);
    border-radius: $radius-3;
    border: $border-4 solid transparent;
    box-sizing: border-box;
    flex-direction: column;
    margin: 0 auto;
    max-width: 80vh;
    max-height: 80vh;
    overflow: hidden;
    padding: $spacing-2;
    transition: $long-transition-all;
    width: 100%;

    &.active {
      box-shadow: var(--box-shadow-m);
      border-color: var(--huge-border);
    }

    & > div.content-container {
      @include flex;
      flex-direction: column;
      flex-grow: 1;
      overflow: hidden;
      padding: $spacing-2;
      transition: $transition-all;
    }
  }

  main.page-enter-active,
  main.page-leave-active {
    transition: $long-transition-all;
  }

  main.page-enter-from,
  main.page-leave-to {
    transition: $transition-all;
    opacity: 0;
    filter: $blur-l;
  }

  @media screen and (max-width: 768px) {
    align-items: flex-start;
    padding: $spacing-5;
    & > div.inner-container {
      aspect-ratio: 2/3;
      max-height: 90vh;
    }
  }
  //@supports (pointer-events:none) {
  //  @media screen and (pointer: fine) {
  //    transform: translate3d(calc(1088.99px - 50%), calc(627.007px - 50%), 0px);
  //    .mouse {
  //      //background-image: radial-gradient(var(--color__primary) 5%, transparent 50%);
  //      left: 0;
  //      height: 20rem;
  //      opacity: 0;
  //      pointer-events: none;
  //      position: fixed;
  //      top: 0;
  //      transform: translate3d(0, 0, 0);
  //      transition: height .3s cubic-bezier(.445, .05, .55, .95), width .3s cubic-bezier(.445, .05, .55, .95), opacity .3s cubic-bezier(.445, .05, .55, .95) .6s;
  //      width: 20rem;
  //      will-change: transform;
  //      z-index: 100;
  //    }
  //  }
  //}
}
</style>
