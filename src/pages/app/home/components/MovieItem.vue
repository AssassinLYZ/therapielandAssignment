<template>
  <div class="movie-item" @click="router.push('/app/details/' + movie.id)">
    <img :src="movie.image?.medium ? movie.image.medium : Images.NoImage" alt="no cover" />
    <p class="title">{{ movie.name }}</p>
    <p class="rate">
      <img :src="Icons.Star" alt="" />
      {{ movie.rating.average ? movie.rating.average : 'no rate' }}
    </p>
  </div>
</template>
<script setup lang="ts">
import { Icons } from '@/assets/icons'
import { Images } from '@/assets/image'
import { useRouter } from 'vue-router'

defineProps<{
  movie: Movie
}>()

const router = useRouter()
</script>
<style scoped lang="scss">
.movie-item {
  width: 130px;
  max-width: 160px;
  min-width: 100px;
  padding: 9px;
  cursor: pointer;
  .title {
    font-size: 12px;
  }
  img {
    width: calc(100%);
  }
  .rate {
    font-size: 14px;
    color: orange;
    img {
      width: 10px;
    }
  }
}
.movie-item:hover {
  border-color: greenyellow;
}
</style>
