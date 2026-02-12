const card = document.getElementById('cabecaCompleta');
const container = document.querySelector('.astroHead');

document.addEventListener('mousemove', (e) => {
    
    const { width, height, left, top } = container.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const mouseX = (e.clientX - centerX) / (width / 2);
    const mouseY = (e.clientY - centerY) / (height / 2);

    const rotateX = mouseY * -25; 
    const rotateY = mouseX * 25;
    
   
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});


