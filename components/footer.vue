<script setup lang="ts">
import { Box, Switch } from '#components';

const route = useRoute();
const { changeMode } = defineProps({
  changeMode: Function,
});

const test = () => {
  setTimeout(() => changeMode?.(), 475)
}
</script>

<template>
  <footer>
    <nav class="nav">
      <Switch class="switch" @mouseup="test"/>
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
footer {
  transition: $xtra-long-transition-all;
}
a {
  //transition: $transition-color;

  &.active-link {
    color: var(--primary);
    transition: $transition-color;
  }
}

nav.nav {
  @include flex;
  background-color: var(--background-color);
  flex-direction: row;
  gap: $spacing-2;
  justify-content: center;
  margin-top: -$spacing-1;
  padding: $spacing-2 $spacing-4;
  position: relative;

  &:before {
    background: linear-gradient(transparent, var(--background-color) 70%, var(--background-color));
    content: "";
    display: block;
    height: $spacing-4;
    position: absolute;
    top: -$spacing-4;
    width: 100%;
  }

  .switch {
    align-self: center;
    flex: 1;
  }
}

</style>
