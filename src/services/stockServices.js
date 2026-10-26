
const API_URL = 'https://sheetdb.io/api/v1/ucwek783fgv2d'

export async function getStocks() {
  const response = await fetch(
    `${API_URL}?sheet=${encodeURIComponent('$AAPL')}`
  )

  if (!response.ok) {
    throw new Error(`API-Fehler: ${response.status}`)
  }

  return await response.json()

  
}
