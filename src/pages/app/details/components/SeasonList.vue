<template>
  <div class="warpper">
    <p>Seasons and Episodes</p>
    <div class="cast-list">
      <div v-for="(item, index) in seasonsData" :key="index" class="cast-item">
        <SeasonItem :season-data="item" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { movieStore } from '@/stores/movieStore'
import SeasonItem from './SeasonItem.vue'
const movieDataStore = movieStore()
const seasonsData = computed(() => movieDataStore.selectedShowSeasons)
</script>
<style scoped lang="scss">
.warpper {
  width: 100%;
  display: grid;
  row-gap: 20px;
  border-radius: 12px;
  border: 1px solid #262626;
  background-color: #1a1a1a;
  padding: 16px;
  margin-bottom: 30px;
}
</style>
