<script setup lang="ts">
import { Box } from '#components';
import { Home } from 'lucide-vue-next';

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
      <NuxtLink v-for="dev in developers" class="box-container" :to="`/about/${dev.name}`">
        <Box :active="route.path === `/about/${dev.name}`">
          {{ dev.name }}
        </Box>
      </NuxtLink>
    </nav>
  </header>
</template>

<style scoped lang="scss">
a {
  transition: $transition-color;

  &.active-link {
    color: var(--primary);
    transition: $transition-color;
  }
}

header {
  background-color: var(--almost-white);
}

nav.nav {
  @include flex;

  justify-content: flex-end;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: $spacing-2;
  position: relative;
  padding-bottom: $spacing-2;

  &:before {
    background: linear-gradient(var(--almost-white), transparent 70%);
    content: "";
    display: block;
    height: $spacing-4;
    position: absolute;
    bottom: -$spacing-4;
    width: 100%;
  }

  .home {
    flex-grow: 1;
  }
}

</style>
