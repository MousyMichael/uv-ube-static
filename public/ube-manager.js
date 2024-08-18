console.log("Modified for UnblockedEverything's Search feature.")
console.log("Powered By Ultraviolet - TN")

//

window.onload = () => {
  const sp = new URLSearchParams(window.location.search)
  
  const engine = sp.get("e")
  const search = sp.get("s")
  
  const engineInput = document.getElementById("uv-search-engine")
  const searchInput = document.getElementById("uv-address")
  const form = document.getElementById("uv-form")
  
  engineInput.setAttribute("value", engine)
  searchInput.setAttribute("value", search)
  
  form.submit()
}
