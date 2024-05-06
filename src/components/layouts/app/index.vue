<template>
  <div class="d-flex flex-column">
    <div elevation="0" class="header">
      <header>Welcome</header>
    </div>

    <div class="content">
      <slot></slot>
    </div>

    <div elevation="0" class="footer">
      <header>Footer</header>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header {
  padding-block: 0.6rem;
  width: 100%;
  text-align: center;
  position: fixed;
  background-color: black;
  height: 50px;
  top: 0px;
  border-bottom: 1px solid rgb(var(--v-theme-gray-200));
  z-index: 999;
}
.content {
  margin-top: 50px;
  min-height: 90vh;
}
.footer {
  padding-block: 0.6rem;
  padding-right: 100px;
  width: 100%;
  text-align: right;
  border-top: 1px solid rgb(49, 49, 49);
  // position: fixed;

  background-color: balck;
  line-height: 50px;
  bottom: 0px;
  border-bottom: 1px solid rgb(var(--v-theme-gray-200));
}
</style>
