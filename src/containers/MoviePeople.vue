<template>
  <div class="people">
    <ResultCount :count="22" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ResultCount from '../components/ResultCount.vue';

export default defineComponent({
  name: 'MoviePeople',
  components: {
    ResultCount
  }
})
</script>

<style lang="scss">
@import '../styles/variables.scss';

.people {
  padding: 0 30px;
  background-color: $bg-light-grey;
}
</style>