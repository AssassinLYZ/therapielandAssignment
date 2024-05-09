<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="episode-wrapper">
    <div v-for="(item, index) in episodesData" :key="index" class="episode-item">
      <img :src="item?.person?.image?.medium" alt="" />
      <div class="">
        {{ item?.number < 10 ? '0' + item?.number : item?.number }}
      </div>
      <div class="episode-full">
        <div class="episode-header">
          <a :href="item?.url" target="_blank">
            <img :src="item?.image?.medium" alt="" />
          </a>
          <h4 class="text-xl episode-title">{{ item?.name }}</h4>
        </div>
        <div class="episode-body">
          <div class="episode-head">
            <p class="episode-summary text-gray60" v-html="item?.summary"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  episodesData: Episodes[]
}>()
</script>
<style scoped lang="scss">
.episode-wrapper {
  padding: 20px 0px;

  .episode-item {
    display: flex;
    padding: 20px 0;
    border-top: 1px solid #262626;
    .episode-full {
      width: 100%;
      margin-left: 10px;
      gap: 10px;
      .episode-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        a {
          display: flex;
          color: white;
          justify-content: space-between;
          img {
            width: 150px;
          }
        }
      }
    }
    .episode-body {
      .episode-summary {
        font-size: 14px;
        color: #999;
      }
    }
  }
}
</style>
