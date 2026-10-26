
import { ref } from 'vue'
import { getStocks } from '../services/stockServices'

// Gemeinsamer reaktiver Zustand für alle Komponenten
const stocks = ref([])
const loading = ref(false)
const error = ref(null)

// Verhindert parallele, doppelte API-Aufrufe
let requestPromise = null

async function loadStocks() {
  if (stocks.value.length > 0) return stocks.value
  if (requestPromise) return requestPromise

  loading.value = true
  error.value = null

  requestPromise = getStocks()
    .then((data) => {
    console.log('Stocks geladen:', data);
      stocks.value = data
      return data
    })
    .catch((err) => {
      error.value = err.message || 'Daten konnten nicht geladen werden.'
      console.log('Leider beim laden ist ein Fehler aufgetrrten:', this.data);
      throw err
      
    })
    .finally(() => {
      loading.value = false
      requestPromise = null
    })

  return requestPromise
}

export function useStocks() {
  return {
    stocks,
    loading,
    error,
    loadStocks,
  }
}
