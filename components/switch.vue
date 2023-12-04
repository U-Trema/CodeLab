<script setup lang="ts">
import { ref } from 'vue';

const isChecked = ref(false);
</script>

<template>
  <label class="label" v-bind=$attrs>
    <span class="toggle">
      <input v-model="isChecked" class="toggle-state" type="checkbox" name="check" value="check" />
      <span class="indicator"><span class="icon"/></span>
    </span>
  </label>
</template>

<style scoped lang="scss">
span {
  display: block;
}

label.label {
  cursor: pointer;
}

span.toggle {
  isolation: isolate;
  position: relative;
  height: $spacing-5;
  width: $spacing-9;
  border-radius: $radius-4;
  overflow: hidden;
  box-shadow: var(--shadow-in-out);
}

input.toggle-state {
  display: none;
}

span.indicator {
  background: var(--almost-white);
  border-radius: 15px;
  box-shadow: var(--shadow-drop);
  height: 100%;
  position: relative;
  transform: translate3d(-75%, 0, 0);
  transition: transform .45s cubic-bezier(0.85, 0.05, 0.18, 1.35);
  width: 200%;
}

.toggle-state:checked ~ .indicator {
  transform: translate3d(25%, 0, 0);
}

.toggle-state:checked ~ .indicator .icon {
  box-shadow: inset calc(var(--size) * 0.33) calc(var(--size) * -0.25) 0;
  color: hsl(240, 100%, 95%);
  left: 5%;
}


.icon {
  appearance: none;
  border-radius: 999px;
  color: hsl(40deg 97.78% 67.55%);
  cursor: pointer;
  left: 81%;
  outline: none;
  position: absolute;
  top: 8px;
  transform: scale(0.75);
  transition: all .45s cubic-bezier(0.85, 0.05, 0.18, 1.29);

  --offset-diagonal: calc(var(--size) * 0.45);
  --offset-orthogonal: calc(var(--size) * 0.65);
  --ray-size: calc(var(--size) * -0.4);
  --size: 16px;

  width: var(--size);
  height: var(--size);
  box-shadow:
      inset 0 0 0 var(--size),
      calc(var(--offset-orthogonal) * -1) 0 0 var(--ray-size),
      var(--offset-orthogonal) 0 0 var(--ray-size),
      0 calc(var(--offset-orthogonal) * -1) 0 var(--ray-size),
      0 var(--offset-orthogonal) 0 var(--ray-size),
      calc(var(--offset-diagonal) * -1) calc(var(--offset-diagonal) * -1) 0 var(--ray-size),
      var(--offset-diagonal) var(--offset-diagonal) 0 var(--ray-size),
      calc(var(--offset-diagonal) * -1) var(--offset-diagonal) 0 var(--ray-size),
      var(--offset-diagonal) calc(var(--offset-diagonal) * -1) 0 var(--ray-size);
}

.background {
  background: var(--background-color);
  height: 100vh;
  position: fixed;
  transition: background 500ms;
  width: 100vw;
}
</style>
