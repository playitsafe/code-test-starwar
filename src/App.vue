<template>
  <SiteHeader/>
  <MoviePeople />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SiteHeader from './components/SiteHeader.vue';
import MoviePeople from './containers/MoviePeople.vue';

export default defineComponent({
  name: 'App',
  components: {
    SiteHeader,
    MoviePeople
  }
});
</script>

<style lang="scss">
@import './styles/base.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
