/*
Objetivo 1 - qnd o usuario clicar no botao de ver trailer, devemos abrir o modal com o video do trailer 
-Passo 1, pegar o elemento que representa o botao na tela usando o js
-Passo 2 , identificar qnd o usuario clicar no botao
-Passo 3, pegar o elemento da modal no js
-Passo 4, abrir a modal na tela.

Objetivo 2 - Qnd o usuario clicar no X devemos fechar a modal
-Passo 1, pegar o elementi de fechar modal usando js
-Passo 2, identificar qnd o usuario clicar no X 
-Passo 3, fechar a modal

*/

//Passo 1
const botaoTrailer = document.querySelector(".botao-trailer")

//Passo 3
const video = document.getElementById("video")
const modal = document.querySelector(".modal")
const linkDoVideo = video.src
//Passo 2
botaoTrailer.addEventListener("click", () => {
  //Passo 4
  modal.classList.add("aberto")
  video.setAttribute("src", linkDoVideo)
})

//Objetivo2 Paso 1
const botaoFecharModal = document.querySelector(".fechar-modal")

//Passo 2
botaoFecharModal.addEventListener("click", () => {
  //passo 3
  modal.classList.remove("aberto")
  video.setAttribute("src", "")
})
