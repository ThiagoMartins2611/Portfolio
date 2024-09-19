let body = document.querySelector('#body')
let sun = document.querySelector('#sun');
let maoEsquerda = document.querySelector("#maoAberta");
let maoDireita = document.querySelector('.maoSol');
let pegada = document.querySelector('.pegada');

let blockClick = 0;

sun.onclick = () =>{

    if(blockClick == 0){

        sun.textContent = ""

        function MaoSome(){
            maoEsquerda.id = 'handMove';
        }
        MaoSome()
    
        function maoAparece(){
            maoDireita.style.display = 'block';
            maoDireita.id = 'maoSusto';
        }
        setTimeout(maoAparece, 2000)
    
        function maoGira(){
            maoDireita.id = 'maoGiro';
        }
        setTimeout(maoGira, 7000)

        function aperto(){
            maoDireita.style.display = 'none';
            pegada.style.display = 'block';
        }
        setTimeout(aperto, 8000)

        function tremilique(){
            body.className = 'allTremelique'
        }
        setTimeout(tremilique, 9000)

        function Explode(){
            sun.style.animationName = 'Explodes'
            sun.style.animationIterationCount = 'unset';
            sun.style.animationFillMode = 'forwards';

            body.className = ""


        }
        setTimeout(Explode, 11000)
        
        function handSome(){
            pegada.style.display = 'none';
        }
        setTimeout(handSome, 12000)

        blockClick++;
    }

    
}