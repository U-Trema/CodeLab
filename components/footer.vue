<script setup lang="ts">
import { Box } from '#components';

const route = useRoute();
</script>

<template>
  <footer>
    <nav class="nav">
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
  </footer>
</template>

<style scoped lang="scss">
a {
  transition: $transition-color;

  &.active-link {
    color: var(--primary);
    transition: $transition-color;
  }
}

nav.nav {
  @include flex;
  background-color: var(--almost-white);
  flex-direction: row;
  gap: $spacing-1;
  justify-content: center;
  margin-top: -$spacing-1;
  padding-top: $spacing-2;
  position: relative;

  &:before {
    background: linear-gradient(transparent, var(--almost-white) 70%);
    content: "";
    display: block;
    height: $spacing-4;
    position: absolute;
    top: -$spacing-4;
    width: 100%;
  }
}

</style>
