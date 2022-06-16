<template>
  <div class="header">
    <h1>Star Wars</h1>
    <h2>May the force be with you</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SiteHeader'
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

.header {
  background: $bg-grey;
  padding: 20px 30px;

  h1, h2 {
    color: $text-white;
  }

  h1 {
    font-size: 60px;
  }

  h2 {
    font-size: 20px;
  }

  @include devices(tab-size) {
    text-align: center;

    h1 {
      font-size: 45px;
    }

    h2 {
      font-size: 18px;
    }
  }

  @include devices(mobile-size) {
    h1 {
      font-size: 38px;
    }

    h2 {
      font-size: 14px;
    }
  }
}
</style>
