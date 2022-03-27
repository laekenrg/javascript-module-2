const jumButtom = document.querySelector('.jumbotron')
const primaryButtom = document.querySelector('.btn-lrg')
const secundaryButtom = document.querySelector('.btn-secondary')
console.log(primaryButtom);

const blueButton = document.querySelector('#blueBtn')
blueButton.addEventListener('click',()=>{
    jumButtom.style.backgroundColor = '#588fbd'
    primaryButtom.style.backgroundColor = '#ffa500'
    secundaryButtom.style.backgroundColor = 'black'
    secundaryButtom.style.color = 'white'
} )

const orangeButton = document.querySelector('#orangeBtn')
orangeButton.addEventListener('click',()=>{
    jumButtom.style.backgroundColor = '#f0ad4e'
    primaryButtom.style.backgroundColor = '#5751fd'
    secundaryButtom.style.backgroundColor = '#31b0d5'
    secundaryButtom.style.color = 'white'
} )

const greenButton = document.querySelector('#greenBtn')
greenButton.addEventListener('click',()=>{
    jumButtom.style.backgroundColor = '#87ca8a'
    primaryButtom.style.backgroundColor = 'black'
    secundaryButtom.style.backgroundColor = '#8c9c08'
} )