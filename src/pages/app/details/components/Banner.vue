<!-- eslint-disable vue/no-v-html -->
<template>
  <div v-if="showData" class="show-banner">
    <div
      class="banner-img"
      :style="{
        background: `linear-gradient(0deg, rgb(20, 20, 20) 0%, rgba(20, 20, 20, 0) 100%), url(${showData?.image?.original}) center center / cover no-repeat fixed`,
      }"
    >
      <div class="banner-content">
        <h3 class="banner-title">{{ showData?.name }}</h3>
        <div class="summary-text" v-html="showData?.summary?.substring(0, 240) + ' ...'"></div>
        <div class="link">
          <a :href="showData?.officialSite" target="_blank" rel="noopener noreferrer">
            Visit Official Site
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { movieStore } from '@/stores/movieStore'
const movieDataStore = movieStore()
const showData = computed(() => movieDataStore.selectedMovie)
</script>
<style scoped lang="scss">
.show-banner {
  height: 50vh;
  margin-top: 50px;

  .banner-img {
    height: 100%;
    align-items: flex-end;
    display: flex;
    justify-content: center;
  }
  .banner-content {
    text-align: center;
    width: 80%;
    .banner-title {
      margin-top: 16px;
      margin-bottom: 8px;
      font-weight: 700;
      color: #fff;
      line-height: 1.4;
    }
    .summary-text {
      font-size: 16px;
    }
    .link {
      width: 200px;
      height: 60px;
      background-color: rgba(243, 4, 4, 0.521);
      margin: 30px auto;
      cursor: pointer;

      a {
        color: white;
        text-align: 60px;
        text-decoration: none;
        line-height: 60px;
      }
      &:hover {
        background-color: rgba(233, 153, 153, 0.521);
      }
    }
  }
}
</style>
