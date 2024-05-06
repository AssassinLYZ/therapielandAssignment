<template>
  <div>
    <Banner />
    <div class="detail-content">
      <MainData />
      <Metadata />
    </div>
  </div>
</template>

<script setup lang="ts">
import Metadata from './components/MetaData.vue'
import MainData from './components/MainData.vue'
import Banner from './components/Banner.vue'
import { movieStore } from '@/stores/movieStore'

const movieDataStore = movieStore()
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

onMounted(async () => {
  await movieDataStore.getSelectedMovie(Number(route.params.id))
  console.log(movieDataStore.selectedShowSeasons)
})
</script>

<style scoped lang="scss">
.detail-content {
  display: flex;
  margin-top: 60px;
  column-gap: 20px;
  padding: 0px 16px;
}
@media screen and (max-width: 786px) {
  .detail-content {
    flex-direction: column;
  }
}
</style>
