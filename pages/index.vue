<template>
  <main class="container">
    <AnimatedText class="text"/>
  </main>
</template>

<style scoped lang="scss">
main.container {
  @include flex;
  align-items: center;
  flex: 1;
  justify-content: center;
}

div.text {
  font-size: $font-maximum;
  text-align: center;
}
</style>
