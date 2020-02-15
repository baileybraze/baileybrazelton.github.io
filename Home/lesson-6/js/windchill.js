const t = parseFloat(document.getElementById("tempHigh").textContent)
const s = parseFloat(document.getElementById("windSpeed").textContent)
document.getElementById("windChill").textContent = (35.74 + (0.6215 * t) - 35.75 * Math.pow(s, .16) + (.4275 * t * Math.pow(s, .16))).toFixed(0)