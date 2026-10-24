<template>
  <div class="card">
    <slot />
  </div>
</template>

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
