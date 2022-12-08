<template>
  <transition name="fade">
    <img
      :class="style"
      :src="src"
      :alt="alt"
      @load="loaded = true"
      v-show="loaded"
    />&nbsp;
  </transition>
</template>

<script setup lang="ts">
import { Spacings } from "@/style";
import { ref } from "@vue/reactivity";
import { cssRaw } from "typestyle";
import { imgStyle } from "../styles";

const props = withDefaults(
  defineProps<{
    src: string;
    alt: string;
    margin?: Spacings;
    width?: string;
    height?: string;
    transition?: string;
  }>(),
  {
    transition: "0.2s",
    margin: "no",
    width: "auto",
    height: "auto",
  }
);

const loaded = ref(false);

const style = imgStyle(props.margin, props.width, props.height);

cssRaw(`
.fade-enter-active {
  transition: opacity ${props.transition} ease-in-out;
}
.fade-enter-to{
  opacity: 1;
}
.fade-enter-from{
  opacity: 0;
}
`);
</script>
