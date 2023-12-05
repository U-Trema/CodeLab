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
    padding-bottom: $spacing-0;
    transition: $xtra-long-transition-all;
    font-size: $font-small;
    border-bottom: 2px solid var(--background-color);
    width: fit-content;


    &.active {
      --tw-text-opacity: 1;
      border-bottom: 2px solid var(--primary);
      padding-bottom: $spacing-05;
      margin-bottom: -1px;
      color: var(--text-base);
      font-weight: 700;
    }
  }

  h1 {
    margin-top: $spacing-1;
    text-transform: uppercase;
  }

  h2 {
    margin-left: $spacing-2;
    &::before {
      content: '-';
    }
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: $font-medium;
    }
  }
}
</style>
