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
      <h1 :class="{ active: isTitleVisible }">Expertises :</h1>
    </div>
    <div>
      <h2>Développement de projets web</h2>
    </div>
    <div>
      <h2>Développements sur-mesure</h2>
    </div>
    <div>
      <h2>Optimisation du référencement</h2>
    </div>
    <div>
      <h2>Création graphique</h2>
    </div>
    <div>
      <h2>Adaptabilité sur tous les appareils</h2>
    </div>
  </main>
</template>

<style scoped lang="scss">
main.container {
  //@include flex;
  //align-content: center;
  //flex-direction: column;
  //flex-wrap: wrap;
  //flex: 1;
  //gap: $spacing-6;
  //margin-top: $spacing-2;

  > div {
    margin-bottom: $spacing-7;
  }

  h1, h2 {
    font-weight: bold;
    letter-spacing: .1em;
    margin-bottom: $spacing-0;
    padding-bottom: -1px;
    transition: $xtra-long-transition-all;
    font-size: $font-small;
    text-underline-offset: $spacing-0;
    text-decoration: underline var(--background-color);

    &.active {
      --tw-text-opacity: 1;
      text-underline-offset: $spacing-1;
      text-decoration: underline var(--primary);
      color: var(--text-base);
      font-weight: 700;
    }
    &::before {
      content: '-';
    }
  }

  h1 {
    margin-top: $spacing-1;
    text-transform: uppercase;
  }

  h2 {
    margin-left: $spacing-2;
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: $font-medium;
    }
  }
}
</style>
