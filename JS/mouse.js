const cell = document.getElementById("Cell");
const telefone = document.getElementById("Telefone");

window.addEventListener("mousemove", (event) => {
   
    const width = window.innerWidth;
    const height = window.innerHeight;

    
    const rotateY = ((event.clientX / width) - 0.5) * 50; 
    const rotateX = ((event.clientY / height) - 0.5) * -50;

    
    cell.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    telefone.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});