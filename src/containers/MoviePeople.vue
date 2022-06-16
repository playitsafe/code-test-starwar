<template>
  <div class="people">
    <ResultCount :count="22" />
    <MoviePerson v-for="(person, i) in response.results" :key="i" :person="person" :index="i" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { IResponse } from '../interfaces/star-war';
import ResultCount from '../components/ResultCount.vue';
import MoviePerson from '../components/MoviePerson.vue';

export default defineComponent({
  name: 'MoviePeople',
  components: {
    ResultCount,
    MoviePerson
  },
  setup() {
    const currentPage = ref<number>(0);
    const response = ref<IResponse>({
      count: 82,
      next: "https://swapi.dev/api/people/?page=2",
      previous: null,
      results: [{
        mass: "77",
        name: "Luke Skywalker",
        gender: "male",
        height: "172"
      }]
    });

    onMounted(() => { fetchPeople() })

    const fetchPeople = () => {
      // fetch('https://swapi.dev/api/people/?page=' + currentPage.value + 1)
      //   .then((res) => res.json())
      //   .then(data => {
      //     response.value = data;
      //     currentPage.value++;
      //     console.log(data);
      //   })
    }

    return { currentPage, response }
  }
})
</script>

<style lang="scss">
@import '../styles/variables.scss';

</style>