<script setup lang="ts">
import { Home } from 'lucide-vue-next';
import { Box } from '#components';

const route = useRoute();

const developers = [
  { id: 1, name: 'Masis' },
  { id: 2, name: 'Cedric' }
];

</script>

<template>
  <header>
    <nav class="nav">
      <NuxtLink to="/" class="home">
        <Box :active="route.path === '/'">
          <Home :size="20" class="home-icon"/>
        </Box>
      </NuxtLink>
      <NuxtLink class="box-container" :to="`/about/team`">
        <Box :active="route.path === `/about/team`">
          Team
        </Box>
      </NuxtLink>
      <NuxtLink class="box-container" to="/services">
        <Box :active="route.path === '/services'">
          Services
        </Box>
      </NuxtLink>
      <NuxtLink class="box-container" to="/contact">
        <Box :active="route.path === '/contact'">
          Nous contacter
        </Box>
      </NuxtLink>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: var(--background-color);
  transition: $xtra-long-transition-all;

  //transition: $xtra-long-transition-all;

  //transition: $transition-color;
  //transition: $transition-all;


  a {
    //transition: $transition-color;

    &.active-link {
      color: var(--primary);
      //transition: $transition-color;
    }
  }

  nav.nav {
    @include flex;
    justify-content: flex-end;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: $spacing-2;
    position: relative;
    padding: $spacing-2 $spacing-4;
    //transition: $transition-color;

    &:before {
      background: linear-gradient(var(--background-color), transparent 70%, transparent);
      bottom: -$spacing-4;
      content: "";
      display: block;
      height: $spacing-4;
      left: 0;
      position: absolute;
      //transition: $transition-color;
      //transition: $transition-all;

      //transition: $xtra-long-transition-all;
      width: 100%;
    }

    .home {
      flex-grow: 1;
    }
  }
}

</style>
