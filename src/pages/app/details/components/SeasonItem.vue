<template>
  <div class="season-warpper">
    <div class="season-head">
      <div class="season-head-title">
        <h4>Season {{ seasonData?.number }}</h4>
        <span>{{ seasonData?.episodeOrder }} Episodes</span>
      </div>
      <div class="season-head-btn" @click="handleAccordion">
        <img :src="Icons.ArrowDownGrey" alt="" />
      </div>
    </div>
    <div v-if="isCollapsed">
      <EpisodeList :episodes-data="episodesData" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { movieStore } from '@/stores/movieStore'
import EpisodeList from './EpisodeList.vue'
const props = defineProps<{
  seasonData: any
}>()
const movieDataStore = movieStore()
const episodesData = computed(() => {
  return movieDataStore.selectShowEpisodes.filter(
    (item: any) => item.season == props.seasonData.number
  )
})

import { Icons } from '@/assets/icons'

const isCollapsed = ref(false)
const handleAccordion = () => {
  isCollapsed.value = !isCollapsed.value
}
</script>
<style scoped lang="scss">
.season-warpper {
  border-radius: 12px;
  border: 1px solid #262626;
  padding: 20px 30px;
  margin: 20px 0;
  padding: 16px 20px;
  background-color: #0f0f0f;
  .season-head {
    align-items: center;
    display: flex;
    justify-content: space-between;
    .season-head-title {
      align-items: center;
      display: flex;
      gap: 10px;
      span {
        font-size: 14px;
        line-height: 1.7;
        color: #999;
        font-weight: 400;
      }
    }
    .season-head-btn {
      display: flex;
      justify-content: center;
      border-radius: 100%;
      border: 1px solid #262626;
      background: #141414;
      width: 30px;
      height: 30px;
      cursor: pointer;
      img {
        width: 20px;
      }
      &:hover {
        border: 1px solid white;
      }
    }
  }
}
</style>
