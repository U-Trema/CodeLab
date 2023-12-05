<template>
  <div id="output-Container" v-bind="$attrs" ref="textToAnimate" class="heading">
    <slot/>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

import { generateCharacterList, randomChar } from "~/utils/text.utils.ts";

onMounted(async () => {
  await next();
});

onBeforeUnmount(() => {
  cancelAnimationFrame(frameRequest);
});

const textToAnimate = ref(null);

const arabicDigits = generateCharacterList(0x0030, 0x0039);
const hiraganas = generateCharacterList(0x3041, 0x3096, true);
const symboles = generateCharacterList(0x0021, 0x002F) + '!<>-_\\/[]{}—=+*^?#________ ';
const chars = arabicDigits + hiraganas + symboles;
const phrases = [
  'Developpeurs informatique',
  "Applications",
  'Web',
  'Mobile',
  'Site internet',
  'Responsive',
];

let frameRequest;
let frame = 0;
const queue = [];
let resolve;
let counter = 0;

const next = async () => {
  await setText(phrases[counter]);
  setTimeout(next, 1500);

  counter = (counter + 1) % phrases.length;
};

const setText = (newText) => {
  const oldText = textToAnimate.value.innerText;
  const length = Math.max(oldText.length, newText.length);
  const promise = new Promise((r) => (resolve = r));
  queue.length = 0;

  for (let i = 0; i < length; i++) {
    const from = oldText[i] || '';
    const to = newText[i] || '';
    const start = Math.floor(Math.random() * 50);
    const end = start + Math.floor(Math.random() * 35);
    queue.push({ from, to, start, end });
  }

  cancelAnimationFrame(frameRequest);
  frame = 0;
  update();
  return promise;
};

const update = () => {
  let output = '';
  let complete = 0;

  for (let i = 0, n = queue.length; i < n; i++) {
    let { from, to, start, end, char } = queue[i];

    if (frame >= end) {
      complete++;
      output += to;
    } else if (frame >= start) {
      if (!char || Math.random() < 0.5) {
        char = randomChar(chars);
        queue[i].char = char;
      }
      output += `<span class="temp-char">${char}</span>`;
    } else {
      output += from;
    }
  }

  textToAnimate.value.innerHTML = output;

  if (complete === queue.length) {
    resolve();
  } else {
    frameRequest = requestAnimationFrame(update);
    frame++;
  }
};
</script>

<style lang="scss">
@media screen and (max-width: 768px) {
  div#output-Container {
    font-size: $font-large;
  }
}
span.temp-char {
  color: var(--light-blue);
}
</style>
