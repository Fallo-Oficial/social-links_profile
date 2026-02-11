function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar as tags que vamos mudar
  const img = document.querySelector("#profile img")
  const p = document.querySelector("#profile p")

  // Lógica de substituição
  if (html.classList.contains("light")) {
    // Modo Light: Foto do rosto e nome real
    img.setAttribute("src", "./assets/Avatar.png")
    p.innerText = "José Lucas"
  } else {
    // Modo Dark: Foto de perfil e nome artístico
    img.setAttribute("src", "./assets/Fallo Night.png")
    p.innerText = "@Fallo_Oficial"
  }
}
