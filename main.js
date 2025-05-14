import Chart from 'chart.js/auto'

const yearsInput = document.getElementById('years')
const capexInput = document.getElementById('capex')
const licenseInput = document.getElementById('license')
const unityColorInput = document.getElementById('color-unity')
const baseColorInput = document.getElementById('color-base')

const yearsVal = document.getElementById('years-val')
const capexVal = document.getElementById('capex-val')
const licenseVal = document.getElementById('license-val')

const chartCanvas = document.getElementById('chart')
let chart = null

function simulateYield(years, license) {
  const panels = 194000
  const baseYield = 500 * 1.25
  const pricePerKWh = 0.08
  const annualLicenseCost = panels * license

  let unityRevenue = []
  let baseRevenue = []

  let unityKWh = baseYield * panels
  let baseKWh = 500 * panels

  for (let y = 1; y <= years; y++) {
    unityRevenue.push((unityKWh * pricePerKWh) - annualLicenseCost)
    baseRevenue.push(baseKWh * pricePerKWh)

    unityKWh *= 0.99
    baseKWh *= y === 1 ? 0.99 : 0.98
  }

  return { unityRevenue, baseRevenue }
}

function updateChart() {
  const years = parseInt(yearsInput.value)
  const license = parseFloat(licenseInput.value)
  const unityColor = unityColorInput.value
  const baseColor = baseColorInput.value

  yearsVal.textContent = years
  capexVal.textContent = capexInput.value
  licenseVal.textContent = license

  const labels = Array.from({ length: years }, (_, i) => `Year ${i + 1}`)
  const { unityRevenue, baseRevenue } = simulateYield(years, license)

  if (chart) chart.destroy()

  chart = new Chart(chartCanvas, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: 'With UNITY',
          data: unityRevenue.map(v => v / 1_000_000),
          backgroundColor: unityColor
        },
        {
          label: 'Without UNITY',
          data: baseRevenue.map(v => v / 1_000_000),
          backgroundColor: baseColor
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          title: {
            display: true,
            text: 'Revenue (M USD)'
          }
        }
      }
    }
  })
}

yearsInput.oninput = updateChart
capexInput.oninput = updateChart
licenseInput.oninput = updateChart
unityColorInput.oninput = updateChart
baseColorInput.oninput = updateChart

updateChart()