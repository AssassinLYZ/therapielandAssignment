<template>
  <div class="list-warpper" :style="{ width: itemNumber * 146 + 16 + 'px' }">
    <div class="title" :style="{ width: itemNumber * 146 + 16 - 36 + 'px' }">
      <p v-if="moveNumber !== 0" class="btn" @click="moveLeft">&lt;</p>
      <p>{{ genre }}</p>
      <p v-if="moveNumber > -genres.length + itemNumber" class="btn" @click="moveRight">></p>
    </div>
    <div class="movie-list" :style="{ transform: `translateX(${moveNumber * 146}px)` }">
      <MovieItem v-for="(item, index) in genres" :key="index" :movie="item" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import MovieItem from './MovieItem.vue'
const moveNumber = ref(0)
const props = defineProps<{
  genre: string
  genres: Movie[]
  screenWidth: number
}>()

const itemNumber = computed(() => {
  const itemNumber = Math.floor((props.screenWidth - 116) / 146)
  return itemNumber
})
const moveLeft = () => {
  if (moveNumber.value >= 0) {
    return
  }
  moveNumber.value++
}
const moveRight = () => {
  if (moveNumber.value <= -props.genres.length + itemNumber.value) {
    return
  }
  moveNumber.value--
}
</script>
<style scoped lang="scss">
.list-warpper {
  margin: 0 auto;
  display: grid;
  border-radius: 12px;
  border: 1px solid #262626;
  background-color: #1a1a1a;
  padding: 16px;
  margin-bottom: 30px;
  overflow-x: hidden;
  .title {
    font-weight: 800;
    width: 400px;
    display: flex;
    justify-content: space-between;
    .btn {
      height: 20px;
      width: 20px;
      border: 1px solid gray;
      border-radius: 50%;
      text-align: center;
      line-height: 16px;
      cursor: pointer;
    }
    .btn:hover {
      color: red;
    }
  }
}
.movie-list {
  display: flex;
  gap: 16px;
  transition: all 0.5s;
  .cast-item {
    img {
      width: 100px;
      border-radius: 10px;
    }
  }
}
</style>
