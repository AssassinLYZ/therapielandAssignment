<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="wrapper">
    <SeasonList />
    <div class="detail-block">
      <h4 class="detail-block-title">Description</h4>
      <div class="content" v-html="description"></div>
    </div>
    <Cast />
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { movieStore } from '@/stores/movieStore'
import SeasonList from './SeasonList.vue'
import Cast from './Cast.vue'
const movieDataStore = movieStore()
const description = computed(() => movieDataStore.selectShowDescription)
</script>
<style lang="scss" scoped>
.wrapper {
  width: 70%;

  .detail-block {
    background-color: #1a1a1a;
    border: 1px solid #262626;
    border-radius: 12px;
    margin-bottom: 30px;
    padding: 16px;
    .detail-block-title {
      margin-bottom: 20px;
    }
  }
  .content {
    font-size: 16px;
    line-height: 1.7;
    color: #999;
    font-weight: 400;
  }
}
@media screen and (max-width: 786px) {
  .wrapper {
    width: 100%;
  }
}
</style>
