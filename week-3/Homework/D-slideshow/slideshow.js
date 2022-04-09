// Write your code here
const imagenesEquipos = ["https://www.futbox.com/img/v1/d0d/0cd/3cd/af3/6462fa1917d3cb7a7d2b.png",
"https://www.futbox.com/img/v1/aed/a66/cef/950/d0cdc76d0ca7fd5e57ae.png",
"https://www.futbox.com/img/v1/0c6/534/793/2da/d1972bbd5460343ca646.png",
"https://www.futbox.com/img/v1/a77/fb8/b71/f55/cb36b8bceb9a6f764f85.png",
"https://www.futbox.com/img/v1/d77/bd0/7c0/af8/3fbdd41f564463c90895.png",
"https://www.futbox.com/img/v1/226/e5c/26a/256/5119a0064ae5e5c652fd.png"]

console.log(imagenesEquipos);
const btnAutoBack = document.querySelector('#autoBackButton')
const btnAnterior = document.querySelector('#backButton')
const btnStop = document.querySelector('#stopButton')
const btnSiguiente = document.querySelector('#nextButton')
const btnAutoNext = document.querySelector('#autoNextButton')
const espacioImagenes = document.querySelector('#equiposEscudos')
const index = 0

espacioImagenes.src= imagenesEquipos[index]

btnSiguiente.addEventListener('click',()=>adelante())
btnAnterior.addEventListener('click',()=>atras())

function adelante() {
    if (index == imagenesEquipos.length -1) {index = 0 ;
        index++;
    }
    espacioImagenes.src = imagenesEquipos [index];
    console.log(imagenesEquipos[index]);
}

function atras (){
    if(index <= 1){
        index = imagenesEquipos.length -1
    }
    index --
    espacioImagenes.src = imagenesEquipos[index]
    console.log(index, imagenesEquipos[index]);
}