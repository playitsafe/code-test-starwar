<template>
  <div class="count">Result: {{ count }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ResultCount',
  props: {
    count: Number
  },
})
</script>

<style lang="scss">
@import '../styles/mixins.scss';

.count {
  font-size: 20px;
  padding: 10px 0;

  @include devices(tab-size) {
    font-size: 16px;
    text-align: center;
  }
}
</style>