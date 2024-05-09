<template>
  <div class="d-flex align-center">
    <Search />
    <SearchMovieList v-if="filterInput" :movies="filteredMovies" :screen-width="screenWidth" />
    <GenreMovieList
      v-for="(item, index) in allGenres"
      v-else
      :key="index"
      :genre="item"
      :genres="genreList[item]"
      :screen-width="screenWidth"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { movieStore } from '@/stores/movieStore'
import GenreMovieList from './components/GenreMovieList.vue'
import SearchMovieList from './components/SearchMovieList.vue'
import Search from './components/Search.vue'
import { storeToRefs } from 'pinia'
const screenWidth = ref(window.innerWidth)
const handleResize = () => {
  screenWidth.value = window.innerWidth
}
const movieDataStore = movieStore()
const { allGenres, genreList, filterInput, filteredMovies } = storeToRefs(movieDataStore)
import { debounce } from '@/utils/tool'
onMounted(async () => {
  await movieDataStore.fetchAllMovies()
  window.addEventListener('resize', handleResize)
})
watch(
  filterInput,
  debounce(async (newValue: string, oldValue: string) => {
    if (newValue !== '') {
      await movieDataStore.getFilteredMovies()
    } else {
      console.log('ok')
    }
  }, 500)
)
</script>
