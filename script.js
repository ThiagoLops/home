function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  // pega a tag img
  const img = document.querySelector("#perfil img")

  //substituir a imagem

  //if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
  //  img.setAttribute("src", "./arquivos/avatarTh.png")
 // } else {
    //se tiver light mode, manter a imagem normal.
  //  img.setAttribute("src", "./arquivos/avatarTh.png")
 // }

}
