<template>
  <section class="search-input">
    <div class="input">
      <input v-model="filterInput" type="text" placeholder="Search Name ..." />
      <button v-if="filterInput.length === 0" class="filter-button" type="button">
        <img class="input-icon" :src="Icons.Search" alt="" />
      </button>
      <button v-else class="filter-button" type="button" @click="filterInput = ''">
        <img class="input-icon" :src="Icons.Close" alt="" />
      </button>
    </div>
  </section>
</template>
<script setup lang="ts">
import { Icons } from '@/assets/icons'
import { storeToRefs } from 'pinia'
import { movieStore } from '@/stores/movieStore'

const _movieStore = movieStore()
const { filterInput } = storeToRefs(_movieStore)
</script>

<style scoped>
.search-input {
  border-bottom: 1px solid var(--color-background-grey);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
}
.input-icon {
  color: #666;
  height: 20px;
}
.search-input input[type='text'] {
  background-color: var(--color-background-grey);
  border: none;
  outline: none;
  color: #ffffff;
  font-weight: 600;
  font-size: 13px;
  width: 100%;
  padding: 0 50px 0 10px;
  margin: 0;
  height: 40px;
  line-height: 40px;
  border: 2px solid #6b6b6b;
  border-radius: 20px;
  outline: none;
  background-color: transparent;
  font-size: 15px;
}
.input {
  width: 80%;
  max-width: 400px;
  position: relative;
}
.filter-button {
  position: absolute;
  padding-top: 10px;
  color: #666;
  top: 0;
  right: 10px;
  height: 30px;
  line-height: 30px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  height: 20px;
}
</style>
