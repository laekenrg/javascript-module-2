/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6*/
const paragraphElements = document.querySelectorAll("p");
console.log(paragraphElements);

/*2. the first div element node
    --> should log the ".site-header" node*/
    const firstDiv = document.querySelector('.site-header')
    console.log(firstDiv);

/*3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node*/
    const elementJum = document.querySelector('#jumbotron-text')
    console.log(elementJum);


/*4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

const primaryContent = document.querySelector('.primary-content').querySelectorAll('p')

console.log(primaryContent);
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
const alertButton = document.querySelector('#alertBtn')
alertButton.addEventListener('click',() =>{
    return alert ("Thanks for visiting Bikes for Refugees!")
})
/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let colorPosition = 0
const colorPage = document.querySelector('#bgrChangeBtn')
colorPage.addEventListener('click',() =>{
    const fondoTotal = document.querySelector('body')
    fondoTotal.style.backgroundColor = colors [colorPosition]; 
    colorPosition++
    if (colorPosition === colors.length) {
        colorPosition = 0
    }
})
/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
const textoNuevo = (contenidoParrafo)=> {
    const newParagraph = document.createElement('p')
    mainArticles.appendChild(newParagraph)
    newParagraph.innerText = contenidoParrafo
}
const textoPredeterminado = 'Un refugiado es una persona que se encuentra fuera de su país de origen, o bien donde reside, debido al temor de ser perseguido por razones relacionadas a su etnia, religión, nacionalidad, grupo social u opiniones políticas, y que no puede o no quiere reclamar la protección de su país para poder volver.'
const addParagraph= document.querySelector('#addTextBtn')
addParagraph.addEventListener('click',() => {textoNuevo(textoPredeterminado)})
/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
const growLinks = document.querySelector('#largerLinksBtn')
growLinks.addEventListener('click',()=> {
  const largerLinks = document.querySelectorAll('a')
   largerLinks.forEach(a => a.style.fontSize = '30px' )
})
/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
const agregarParrafo= document.querySelector('#addArticleBtn')
const imputAdd = document.querySelector('.form-control')
agregarParrafo.addEventListener('click',() => {
    textoNuevo(imputAdd.value);
    imputAdd.value = ''
})
/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/
const colors = ['blue','red','yellow','orange','green','pink','purple']

