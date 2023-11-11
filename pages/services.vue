<script setup lang="ts">
import { ref, onMounted } from 'vue';

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
      <h2 :class="{ active: isTitleVisible }">GESTION DE PROJETS WEB</h2>
      <p>Notre équipe de développeurs expérimentés prend en charge la gestion complète de votre projet web. Du concept à
        la réalisation, nous assurons une planification efficace, un suivi rigoureux et une livraison de qualité.</p>
    </div>

    <div>
      <h2 :class="{ active: isTitleVisible }">INTÉGRATION WEB</h2>
      <p>L'intégration web est l'âme de votre site. Nous veillons à ce que votre design se traduise parfaitement en
        code, offrant une expérience utilisateur fluide sur tous les appareils et navigateurs.</p>
    </div>

    <div>
      <h2 :class="{ active: isTitleVisible }">DÉVELOPPEMENTS SPÉCIFIQUES</h2>
      <p>Besoin de fonctionnalités personnalisées ? Nos développeurs sont prêts à concevoir des solutions spécifiques
        pour répondre à vos besoins uniques, garantissant ainsi une expérience utilisateur exceptionnelle.</p>
    </div>

    <div>
      <h2 :class="{ active: isTitleVisible }">RÉFÉRENCEMENT NATUREL</h2>
      <p>Maximisez votre visibilité en ligne avec notre expertise en référencement naturel. Nous optimisons votre site
        pour les moteurs de recherche, vous aidant à atteindre un public plus large et à renforcer votre présence en
        ligne.</p>
    </div>

    <div>
      <h2 :class="{ active: isTitleVisible }">CONCEPTION GRAPHIQUE & WEBDESIGN</h2>
      <p>L'esthétique de votre site est cruciale. Nous combinons une conception graphique créative avec un webdesign
        intuitif pour créer une identité visuelle unique et mémorable pour votre entreprise.</p>
    </div>

    <div>
      <h2 :class="{ active: isTitleVisible }">DYNAMISME DES PAGES</h2>
      <p>Nos développeurs s'efforcent de rendre votre site web dynamique et interactif. Des animations subtiles aux
        fonctionnalités avancées, nous insufflons de la vie à vos pages pour captiver votre public.</p>
    </div>

    <div>
      <h2 :class="{ active: isTitleVisible }">INTERFACE D'ADMINISTRATION</h2>
      <p>Simplifiez la gestion de votre site avec une interface d'administration conviviale. Nous créons des panneaux de
        contrôle sur mesure pour vous permettre de gérer facilement le contenu de votre site, sans tracas.</p>
    </div>

    <div>
      <h2 :class="{ active: isTitleVisible }">RESPONSIVE DESIGN</h2>
      <p>Votre site doit s'adapter à tous les écrans, que ce soit un ordinateur de bureau, une tablette ou un
        smartphone. Notre approche de conception responsive garantit une expérience utilisateur optimale sur tous les
        appareils.</p>
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
  justify-content: center;
  margin: 0 auto;
  padding: $spacing-2 0 $spacing-6;
  width: 75%;

  h2 {
    font-weight: bold;
    letter-spacing: .1em;
    margin-bottom: $spacing-2;
    padding-bottom: -1px;
    transition: $xtra-long-transition-all;
    width: max-content;

    &.active {
      --tw-text-opacity: 1;
      box-shadow: 0 1px 0 var(--white), 0 4px 0 var(--primary);
      color: var(--text-base);
      font-weight: 700;
    }
  }
}
</style>
