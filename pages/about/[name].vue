<script setup>
import { ref, onMounted } from 'vue';

const route = useRoute();
const developerToDisplay = ref(null);
const isTitleVisible = ref(false);

const developers = {
  Masis: {
    linkedin: 'https://www.linkedin.com/in/masis-gulmez/',
    name: 'Masis',
    lastName: 'Gulmez',
    image: 'masis.JPG',
  },
  Cedric: {
    linkedin: 'https://www.linkedin.com/in/cedric-salaun/',
    name: 'Cédric',
    lastName: 'Salaün',
    image: 'cedric.png',
  },
};

onMounted(() => {
  developerToDisplay.value = developers;
  setTimeout(() => {
    isTitleVisible.value = true;
  }, 1000);
});

const doSomethingOnLoad = () => {
  console.log({});
};

</script>

<template>
  <main v-if="developerToDisplay">
    <div id="main">
      <article v-for="dev in developerToDisplay">
        <header>
          <div id="prez">
            <Image
                id="picture"
                :src="`/images/${dev.image}`"
                :placeholder="[30,20,10]"
                loading="lazy"
                @load="doSomethingOnLoad"
            />
            <h1 id="name" :class="{ active: isTitleVisible }">
              {{ dev.name }} {{ dev.lastName }}
            </h1>
          </div>
        </header>
      </article>
    </div>
    <article>
      <body>
      <div id="description">
        L'histoire passionnante de deux amis d'enfance au parcours atypique prend forme avec éclat.
        <br>
        <br>
        Notre passion commune pour la culture du web et l'entrepreneuriat a été le moteur qui nous a poussés à unir nos forces et nos compétences au service de nos clients.
      </div>
      </body>
    </article>
  </main>
</template>

<style scoped lang="scss">
main {
  @include flex;
  max-width: unset;
  padding: $spacing-2 0 $spacing-6;
  flex-wrap: wrap;

  div#main {
    @include flex;
    flex-basis: 100%;
    justify-content: space-evenly;
  }

  article {
    @include flex;

    flex-direction: column;
    gap: $spacing-5;

    div#prez {
      display: flex;
      margin-bottom: $spacing-2;
      flex-wrap: wrap;
      flex-direction: column;
    }

    h1#name {
      margin-top: $spacing-2;
      margin-bottom: $spacing-2;
      font-size: $font-xtra-large;
      line-height: 1;
      letter-spacing: -0.05em;
      transition: $xtra-long-transition-all;
      width: max-content;
      font-weight: bold;
      align-self: center;
      padding-bottom: $spacing-0;
      border-bottom: 2px solid var(--background-color);

      &.active {
        --tw-text-opacity: 1;
        border-bottom: 2px solid var(--primary);
        padding-bottom: $spacing-05;
        margin-bottom: calc($spacing-2 - $spacing-05);
        color: var(--text-base);
        font-weight: 700;
      }
    }

    div#picture {
      margin: 0 auto;
      height: 150px;
      width: 150px;
    }

    p {
      font-size: $font-small;
    }

    div#description {
      line-height: 1.5;
      font-size: $font-medium;
      padding-top: $spacing-3;
      padding-left: $spacing-4;
      padding-right: $spacing-4;

    }
  }

  p, ul {
    color: var(--text-base);
  }

  @media screen and (max-width: 768px) {
    padding: $spacing-3 0 $spacing-6;
    overflow-y: scroll;
      div#main {
      flex-direction: column;
    }
    article {
      div#prez {
        gap: $spacing-8;
        padding: $spacing-3;
        justify-content: center;
        flex-direction: row-reverse;
        margin-bottom: 0;
      }
      div#picture {
        margin: unset;
        height: 100px;
        width: 100px;
      }
    }
  }
}
</style>
