<template>
  <div class="warpper">
    <p>Cast</p>
    <div v-if="castData?.length" class="cast-list">
      <div v-for="(item, index) in castData" :key="index" class="cast-item">
        <img :src="item?.person?.image?.medium" alt="" />
      </div>
    </div>
    <div v-else>No Data</div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { movieStore } from '@/stores/movieStore'
const movieDataStore = movieStore()
const castData = computed(() => movieDataStore.selectShowCast)
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
.cast-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  .cast-item {
    img {
      width: 100px;
      border-radius: 10px;
    }
  }
}
</style>
