<!-- <script setup>
import Card from './components/Card.vue'
</script>

<template>
  <Card>
    <h1>Hallo Welt</h1>
    <p>
      test
    </p>
  </Card>
</template> -->



<script setup>
import { onMounted } from 'vue'
import { useStocks } from './compasable/useStocks'
import Card from './components/Card.vue'

const { stocks, loading, error, loadStocks } = useStocks()

onMounted(() => {
  loadStocks().catch(() => {
    // Der Fehler steht bereits in error.value.
    
  })
})
</script>

<template>
  <main>
    <h1>Stock Dashboard</h1>

    <p v-if="loading">Aktien werden geladen ...</p>

    <p v-else-if="error">
      Fehler beim Laden: {{ error }}
      <button @click="loadStocks().catch(() => {})">
        Erneut versuchen
      </button>
    </p>

    <div v-else class="stock-grid">
      <Card
        v-for="(stock, index) in stocks"
        :key="stock.symbol ?? stock.Symbol ?? index"
        :stock="stock"
      />
    </div>
  </main>
</template>

<style scoped>
.stock-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
</style>
