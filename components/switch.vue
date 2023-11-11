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
  box-shadow: -8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6, 4px 4px 4px 0px #d1d9e6 inset, -4px -4px 4px 0px #ffffff inset;
  box-shadow: var(--box-shadow-active);
}

.toggle-state {
  display: none;
}

.indicator {
  height: 100%;
  width: 200%;
  background: var(--almost-white);
  //background: #ecf0f3;
  border-radius: 15px;
  transform: translate3d(-75%, 0, 0);
  transition: transform .45s cubic-bezier(0.85, 0.05, 0.18, 1.35);
  box-shadow: -8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6;
  box-shadow: var(--box-shadow-m);
  //inset 14px 14px 12px 0 rgba(196, 206, 218, 0.14), inset -3px -3px 5px 0 $white, inset 2px 2px 5px 0 rgba(196, 206, 218, 0.78), inset 1px 1px 16px -13px #6f8197;

  //box-shadow: var(--box-shadow-active);
  //box-shadow: var(--box-shadow-m);

  position: relative;
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
  position: absolute;
  left: 80%;
  top: 7px;

  appearance: none;
  outline: none;
  cursor: pointer;

  --size: 16px;
  width: var(--size);
  height: var(--size);
  border-radius: 999px;
  transition: all .45s cubic-bezier(0.85, 0.05, 0.18, 1.29);
  --ray-size: calc(var(--size) * -0.4);
  --offset-orthogonal: calc(var(--size) * 0.65);
  --offset-diagonal: calc(var(--size) * 0.45);

  transform: scale(0.75);
  //color: hsl(40, 100%, 50%);
  color: hsl(40deg 97.78% 67.55%);
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
  --bg: hsl(240, 100%, 10%);
  background: var(--bg);
  position: fixed;
  height: 100vh;
  width: 100vw;
  transition: background 500ms;
}

.icon {
  z-index: 1;
  &:checked {
    & ~ .background {
      --bg: white;
    }
  }
}
</style>
