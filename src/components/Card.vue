<!-- <template>
  <div class="card">
    <slot />
  </div>
</template> -->

<style lang="scss" scoped>
.card {
  box-sizing: border-box;
  width: 714px;
  max-width: 100%;
  height: 352px;
  padding: 20px 32px;
  border-radius: 16px;
  background-color: rgba(1, 31, 53, 1);
}
</style>



<script setup>
defineProps({
  stock: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="stock-card">
    <pre>{{ stock }}</pre>
  </article>
</template>

<style scoped>
.stock-card {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow-wrap: anywhere;
}
</style>
