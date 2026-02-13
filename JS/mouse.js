const head = document.getElementById('cabecaCompleta');
const container = document.querySelector('.astroHead');

const olhos = document.getElementsByClassName('olho');
const pupila = document.getElementsByClassName('pupila');

const arrayOlhos = Array.from(olhos);
const arrayPupilas = Array.from(pupila);

const joinha = document.getElementById('joinha');

let mouseDown = false;
let mouseOverInstagram = false;
let mouseOverEmail = false;


const opEmail = document.getElementById('email');
const opInstagram = document.getElementById('instag');


function faceFeliz(){

    if(mouseDown || mouseOverInstagram){
        arrayOlhos.forEach(olho => {
            olho.className = 'olho feliz';
        });

        arrayPupilas.forEach(pupila => {
            pupila.style.display = 'none';
        });
    }
 
}

function resetarFace(){
    arrayOlhos.forEach(olho => {
        olho.className = 'olho';
    });


    arrayPupilas.forEach(pupila => {
        pupila.style.display = 'block';
    });
}

function reactAtivar(){
    if(mouseOverEmail){
        joinha.className = 'react ativo';
    }
}

function reactDesativar(){
    joinha.style.className = 'react desativo';
}

document.addEventListener('mousemove', (e) => {
    
    const { width, height, left, top } = container.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const mouseX = (e.clientX - centerX) / (width / 2);
    const mouseY = (e.clientY - centerY) / (height / 2);

    const rotateX = mouseY * -25; 
    const rotateY = mouseX * 25;

    arrayPupilas.forEach(pupila => {
        pupila.style.transform = `translateX(${mouseX * 10}px) translateY(${mouseY * 20}px)`;
    });


   
    head.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});


head.addEventListener('mousedown', () => {

    mouseDown = true;

    setTimeout(() => {
        faceFeliz();
    }, 500); 

});

document.addEventListener('mouseup', () => {
    mouseDown = false;
    resetarFace();
});





opEmail.addEventListener('mouseover', () => {
    mouseOverEmail = true;
    reactAtivar();
});

opEmail.addEventListener('mouseout', () => {
    mouseOverEmail = false;
    reactDesativar();
});



opInstagram.addEventListener('mouseover', () => {
    mouseOverInstagram = true;
    faceFeliz();
});

opInstagram.addEventListener('mouseout', () => {
    mouseOverInstagram = false;
    resetarFace();
});


