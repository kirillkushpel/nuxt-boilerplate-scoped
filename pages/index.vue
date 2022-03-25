<template>
  <div :class="b()">
    <h1 :class="b('title-new', {red: true})">
      Hello world
    </h1>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';

  @Component({
    name: 'home-page'
  })
  export default class extends Vue {
  }
</script>

<style lang="scss" scoped>
  .home-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;

    &--red {
      color: red;
    }

    &__title {
      color: blue;
    }
  }
</style>
