<template>
  <div class="list-warpper" :style="{ width: itemNumber * 146 + 18 + 'px' }">
    <div class="title" :style="{ width: itemNumber * 146 - 20 + 'px' }">
      <p>Search Result</p>
    </div>
    <div class="movie-list">
      <MovieItem v-for="(item, index) in movies" :key="index" :movie="item.show" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, defineProps, ref } from 'vue'
interface SelectedMovie {
  show: Movie
}
const props = defineProps<{
  movies: SelectedMovie[]
  screenWidth: number
}>()
import MovieItem from './MovieItem.vue'
const itemNumber = computed(() => {
  const itemNumber = Math.floor((props.screenWidth - 116) / 146)
  return itemNumber
})
</script>
<style scoped lang="scss">
.list-warpper {
  border-radius: 12px;
  min-height: 800px;
  border: 1px solid #262626;
  background-color: #1a1a1a;
  padding: 16px;
  margin-bottom: 30px;
  margin: 0 auto;
  .title {
    font-weight: 800;
    width: 400px;
    display: flex;
    justify-content: space-between;
  }
}
.movie-list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  transition: all 0.5s;
  .cast-item {
    img {
      width: 100px;
      border-radius: 10px;
    }
  }
}
</style>
