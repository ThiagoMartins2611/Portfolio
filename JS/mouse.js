const head = document.getElementById('cabecaCompleta');
const container = document.querySelector('.astroHead');

const olhos = document.getElementsByClassName('olho');
const pupila = document.getElementsByClassName('pupila');

const arrayOlhos = Array.from(olhos);
const arrayPupilas = Array.from(pupila);

let mouseDown = false;


function faceFeliz(){

    if(mouseDown){
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



