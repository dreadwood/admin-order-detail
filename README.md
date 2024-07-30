# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

## Shortcut

```less
button {
  .transition(background-color);
  display: block;
  width: max-content;
  margin: 0;
  padding: 0;
  font-family: @font-default;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  text-align: left;
  color: @color-signal-blue;
  text-transform: none;
  background-color: transparent;
  border: 0;
  cursor: pointer;
}
svg {
  display: block;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
}
```

```vue
<script setup lang="ts">
import { ref } from 'vue'

import iconCheck from '@icons/dropdown-check.svg'

defineProps<{ text: string }>()

const isActv = ref<boolean>(false)
</script>

<template>
  <div></div>
</template>

<style lang="less" scoped>
@import '@style/index.less';
//
</style>
```
