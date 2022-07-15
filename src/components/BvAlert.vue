<template>
  <div class="alert alert-danger" v-if="show">
    <button type="button" class="close" @click="show = false">
      <span aria-hidden="true">&times;</span>
    </button>
    <slot/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(true)
</script>

<style lang="scss" scoped>

</style>