<template>
  <div class="person">
    <div :class="'person__avatar ' + bgColor">
      {{ avatarText }}
    </div>
    <div class="person__desc">
      <p class="person__desc__name">{{ person.name }}</p>
      <p class="person__desc__info">Height: {{ person.height }}cm</p>
      <p class="person__desc__info">Mass: {{ person.mass }}kg</p>
      <p class="person__desc__info">Gender: {{ person.gender }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { IPerson } from '../interfaces/star-war';

export default defineComponent({
  name: 'MoviePerson',
  props: {
    person: {
      required: true,
      type: Object as PropType<IPerson>
    }
  },
  setup(props) {
    const bgColor = ref<string>('');
    const bgColors = ['blue', 'red', 'purple'];
    const randomIndex = Math.floor(Math.random() * bgColors.length)
    bgColor.value = bgColors[randomIndex];

    const getAvatarText = (name: string): string => {
      let separator = '';
      let initial;
      name.includes(' ') && (separator = ' ');
      name.includes('-') && (separator = '-');

      const splittedName = name.split(separator);
      if (splittedName.length >= 2) {
        initial = splittedName[0][0] + splittedName[1][0]
      } else {
        initial = name;
      }
      return initial;
    }
    const avatarText = getAvatarText(props.person.name);
    return { bgColor, avatarText };
  }
})
</script>

<style lang="scss">
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

.person {
  padding: 20px;
  display: flex;
  align-items: start;

  &__avatar {
    background: $bg-blue;
    color: $white;
    height: 80px;
    width: 80px;
    border-radius: 4px;
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    &.blue {
      background-color: $bg-blue;
    }

    &.red {
      background-color: $bg-red;
    }

    &.purple {
      background-color: $bg-purple;
    }
  }

  &__desc {
    margin-left: 20px;

    &__name {
      font-weight: 500;
      font-size: 20px;
    }

    &__info {
      color: $text-grey;
      font-size: 16px;
    }
  }

  @include devices(tab-size) {
    padding: 10px;

    &__avatar {
      height: 60px;
      width: 60px;
      font-size: 30px;
    }

    &__desc {
      margin-left: 15px;

      &__name {
        font-size: 18px;
      }

      &__info {
      font-size: 14px;
      }
    }
  }

  @include devices(mobile-size) {
    padding: 5px;

    &__avatar {
      height: 40px;
      width: 40px;
      font-size: 20px;
    }

    &__desc {
      margin-left: 10px;

      &__name {
        font-size: 16px;
      }

      &__info {
      font-size: 12px;
      }
    }
  }
}
</style>