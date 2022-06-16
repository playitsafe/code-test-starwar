<template>
  <div class="people">
    <ResultCount :count="response.count" />
    <MoviePerson v-for="(person, i) in response.results" :key="i" :person="person" />
    <div class="people__btns">
      <button @click="onPrevPage" class="btn prev" :disabled="!response.previous" :class="{disabled: !response.previous}">Previous</button>
      <button @click="onNextPage" class="btn next" :disabled="!response.next" :class="{disabled: !response.next}">Next</button>
    </div>
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
    MoviePerson,
  },
  setup() {
    const currentPage = ref<number>(0);
    const response = ref<IResponse>({
      count: 0,
      next: null,
      previous: null,
      results: []
    });

    onMounted(() => {
      fetchPeople(currentPage.value + 1);
      currentPage.value++;
    })

    const fetchPeople = (pageNum: number) => {
      fetch('https://swapi.dev/api/people/?page=' + pageNum)
        .then((res) => res.json())
        .then(data => {
          response.value = data;
        })
    }

    const onPrevPage = () => {
      if (response.value.previous && currentPage.value > 1) {
        fetchPeople(currentPage.value - 1);
        currentPage.value--;
      }
    }

    const onNextPage = () => {
      if (response.value.next) {
        fetchPeople(currentPage.value + 1);
        currentPage.value++;
      }
    }

    return { currentPage, response, onPrevPage, onNextPage }
  }
})
</script>

<style lang="scss">
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

.people {
  &__btns {
    padding: 10px 0 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    .btn {
      font-size: 18px;
      color: $white;
      min-height: 40px;
      min-width: 120px;
      border: none;
      background: $bg-blue;
      border-radius: 5px;
      margin-left: 15px;
      padding: 15px 25px;
      cursor: pointer;

      &.disabled {
        background: $bg-blue-disabled;
        cursor: not-allowed;
      }
    }
  }

  @include devices(tab-size) {
    &__btns {
      display: flex;
      flex-direction: row;

      .btn {
        width: 50%;
        margin: 10px auto;
        font-size: 16px;
        padding: 12px 22px;
      }
    }
  }

  @include devices(tab-size) {
    &__btns {
      flex-direction: column;
      padding: 0 10px;
      .btn {
        font-size: 14px;
        min-height: 30px;
        min-width: 100%;
        padding: 12px 22px;
      }
    }
  }
}
</style>