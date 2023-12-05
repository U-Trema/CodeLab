<script setup lang="ts">
import { ref, onMounted } from "vue";

const isTitleVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isTitleVisible.value = true;
  }, 1000);
});
</script>

<template>
  <main class="container">
    <div>
      <h2 :class="{ active: isTitleVisible }">Expertise en developpement de projets web</h2>
    </div>
    <div>
      <h2 :class="{ active: isTitleVisible }">Développements sur-mesure</h2>
    </div>
    <div>
      <h2 :class="{ active: isTitleVisible }">Optimisation du référencement</h2>
    </div>
    <div>
      <h2 :class="{ active: isTitleVisible }">Créativité graphique et webdesign</h2>
    </div>
    <div>
      <h2 :class="{ active: isTitleVisible }">Adaptabilité sur tous les appareils</h2>
    </div>
  </main>
</template>

<style scoped lang="scss">
main.container {
  @include flex;
  align-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 1;
  gap: $spacing-6;
  margin-top: $spacing-2;

  h2 {
    font-weight: bold;
    letter-spacing: .1em;
    margin-bottom: $spacing-0;
    padding-bottom: -1px;
    transition: $xtra-long-transition-all;
    font-size: $font-small;
    flex: 1;
    text-decoration: underline var(--background-color);

    &.active {
      --tw-text-opacity: 1;
      text-decoration: underline var(--primary);
      text-underline-offset: $spacing-1;
      color: var(--text-base);
      font-weight: 700;
    }
    &::before {
      content: '-';
    }
  }
  @media screen and (max-width: 768px) {
    h2 {
      font-size: $font-xtra-small;
    }
  }
}
</style>
