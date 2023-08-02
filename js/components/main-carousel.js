// 1 acessar a janela (browser)
// 2 pegar html todo 
// 4 saber que esta sendo clicado no botão
// 3 pegar o botão 


//5 pegar janela
//6 pegar html
//7 pegar o elements
//8 mover o element para direita 

//

const btnRight = window.document.querySelector('.button-arrow.-right')
const btnLeft = window.document.querySelector('.button-arrow.-left')

const elements = window.document.querySelector('.elements')
let pixels = 100

btnRight.addEventListener('click', function () {
    pixels = pixels + 100;
    elements.style = `transform: translateX(${pixels}px)`;
});


btnLeft.addEventListener('click', function () {
    pixels = pixels - 100;
    elements.style = `transform: translateX(${pixels}px)`;
});









//console.log(btnRight)