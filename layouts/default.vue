<template>
  <div :class="b()">
    <nuxt />
  </div>
</template>

<script lang="ts">
  import { Component } from 'nuxt-property-decorator';
  import Vue from 'vue';

  @Component({
    name: 'default-layout'
  })
  export default class DefaultLayout extends Vue {}
</script>

<style lang="scss" scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: sans-serif;
  background-color: white;

  body {
    margin: 0;
    padding: 0;
  }
}
</style>
