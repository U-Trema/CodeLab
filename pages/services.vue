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
      <h2 :class="{ active: isTitleVisible }">EXPERTISE EN GESTION DE PROJETS WEB</h2>
      <p>Laissez-nous concrétiser votre vision en ligne. Notre équipe expérimentée de développeurs excelle dans la gestion intégrale de projets web.
        De la conception initiale à la réalisation finale, nous vous garantissons une planification minutieuse, un suivi attentif et une livraison
        impeccable.</p>
    </div>

    <div>
      <h2 :class="{ active: isTitleVisible }">INTÉGRATION WEB PERFECTIONNÉE</h2>
      <p>L'essence même de votre site se traduit dans notre expertise en intégration web. Chaque pixel de votre design est méticuleusement transformé
        en code, offrant une expérience utilisateur transparente et immersive, quel que soit l'appareil ou le navigateur utilisé.</p>
    </div>

    <div>
      <h2 :class="{ active: isTitleVisible }">DÉVELOPPEMENTS SUR-MESURE</h2>
      <p>Cherchez-vous des fonctionnalités exclusives ? Nos développeurs talentueux sont prêts à concevoir des solutions sur-mesure pour répondre
        précisément à vos besoins, assurant ainsi une expérience utilisateur inégalée.</p>
    </div>

    <div>
      <h2 :class="{ active: isTitleVisible }">OPTIMISATION POUR UNE VISIBILITÉ MAXIMALE</h2>
      <p>Faites briller votre présence en ligne grâce à notre expertise en référencement naturel. Nous optimisons votre site pour les moteurs de
        recherche, vous permettant d'atteindre un public plus vaste et de consolider votre positionnement en ligne.</p>
    </div>

    <div>
      <h2 :class="{ active: isTitleVisible }">CRÉATIVITÉ GRAPHIQUE ET WEBDESIGN</h2>
      <p>L'esthétique est au cœur de notre approche. Nous unissons créativité graphique et webdesign intuitif pour façonner une identité visuelle
        distinctive et mémorable pour votre entreprise.</p>
    </div>

    <div>
      <h2 :class="{ active: isTitleVisible }">DYNAMISME ET INTERACTIVITÉ</h2>
      <p>De l'éclat subtil des animations aux fonctionnalités avancées, nos développeurs insufflent de la vie à vos pages pour captiver et engager
        votre audience de manière exceptionnelle.</p>
    </div>

    <div>
      <h2 :class="{ active: isTitleVisible }">GESTION SIMPLIFIÉE VIA UNE INTERFACE INTUITIVE</h2>
      <p>Facilitez la gestion de votre site grâce à une interface d'administration conviviale et personnalisée. Nous créons des panneaux de contrôle
        sur mesure pour que la gestion de votre contenu soit un jeu d'enfant.</p>
    </div>

    <div>
      <h2 :class="{ active: isTitleVisible }">ADAPTABILITÉ SUR TOUS LES APPAREILS</h2>
      <p>Votre site doit être fluide sur tous les écrans. Notre approche de conception responsive garantit une expérience utilisateur optimale, que ce
        soit sur un ordinateur de bureau, une tablette ou un smartphone.</p>
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
    //transition: $xtra-long-transition-all;
    width: max-content;

    &.active {
      --tw-text-opacity: 1;
      box-shadow: var(--shadow-line);
      color: var(--text-base);
      font-weight: 700;
    }
  }
}
</style>
