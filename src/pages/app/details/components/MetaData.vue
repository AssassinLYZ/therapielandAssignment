<template>
  <div class="meta-wrapper">
    <div class="detail-block">
      <div class="detail-block-item">
        <div class="block-item-title">
          <span class="title-icon">
            <img :src="Icons.CalendarGrey" alt="" />
          </span>
          <span class="title-text">Released Date</span>
        </div>
        <div class="block-item-body">
          <div class="block-item-pill text-md">{{ metaData?.premiered }}</div>
        </div>
      </div>

      <div class="detail-block-item">
        <div class="block-item-title">
          <span class="title-icon">
            <img :src="Icons.LanguageGrey" alt="" />
          </span>
          <span class="title-text">Available Laguage</span>
        </div>
        <div class="block-item-body">
          <div class="block-item-pill text-md">{{ metaData?.language }}</div>
        </div>
      </div>

      <div class="detail-block-item">
        <div class="block-item-title">
          <span class="title-icon">
            <img :src="Icons.StarGrey" alt="" />
          </span>
          <span class="title-text">Ratings</span>
        </div>
        <div class="block-item-body">
          <div class="block-item-pill text-md">{{ metaData?.rating?.average || 0 }} / 10</div>
        </div>
      </div>

      <div class="detail-block-item">
        <div class="block-item-title">
          <span class="title-icon">
            <img :src="Icons.GridGrey" alt="" />
          </span>
          <span class="title-text">Genres</span>
        </div>
        <div class="block-item-body flex items-center flex-wrap">
          <div v-for="(item, index) in metaData?.genres" :key="index" class="block-item-pill">
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { movieStore } from '@/stores/movieStore'
import { Icons } from '@/assets/icons'
const movieDataStore = movieStore()
const metaData = computed(() => movieDataStore.selectShowMetadata)
</script>

<style scoped lang="scss">
.meta-wrapper {
  width: 30%;
  margin-bottom: 30px;
  .block-item-title {
    column-gap: 8px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    .title-icon {
      min-width: 24px;
      width: 24px;
    }
  }
  .detail-block {
    display: grid;
    row-gap: 20px;
    border-radius: 12px;
    border: 1px solid #262626;
    background-color: #1a1a1a;
    padding: 16px;
  }
  .block-item-body {
    gap: 8px;
  }
  .block-item-pill {
    display: inline-block;
    border-radius: 8px;
    border: 1px solid #262626;
    background: black;
    padding: 6px 12px;
  }
}
@media screen and (max-width: 786px) {
  .meta-wrapper {
    width: 100%;
  }
}
</style>
