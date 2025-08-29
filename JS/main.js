let body = document.querySelector('#body')
let sun = document.querySelector('#sun');
let maoEsquerda = document.querySelector("#maoAberta");
let maoDireita = document.querySelector('.maoSol');
let pegada = document.querySelector('.pegada');
let SolarSystem = document.querySelector('.SolarSystem');
let ChangeWord = document.querySelector('#ChangeWord');
let star = document.getElementsByClassName('star');

let blockClick = 0;

// sun animation

sun.onmousedown = () => {
    if(blockClick == 0){
    sun.style.transform = 'scale(2)';
    }
}

sun.onmouseup = () =>{

    if(blockClick == 0){
        sun.style.transform = 'scale(1)';
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

        
        function RetornOfSun(){
            SolarSystem.style.display = 'flex'
            sun.style.display = 'none'
            ChangeWord.className = 'Universe'
            star[0].style.display = 'block'
            star[1].style.display = 'block'
            star[2].style.display = 'block'

            ChangeWord.textContent = "";
            ChangeWord.textContent = "Universe";

            maoEsquerda.id = 'maoAberta';
            

        }
        setTimeout(RetornOfSun, 13000)




        blockClick++;
    }

    
}

// conhecimentos list

async function listarConhecimentos(){

    try {
        
    const res = await fetch('./JSON/conhecimentos.json')
    const data = await res.json()

        const contentConhecimento = document.querySelector('.contentConhecimentos');

        data.map(conhecimento => {

            const cardC = document.createElement('div');
            cardC.className = 'cardC';

            const contentC = document.createElement('div');
            contentC.className = 'contentC';

            const logoC = document.createElement('div');
            logoC.className = 'logoC';
            const img = document.createElement('img');
            img.src = conhecimento.logo;
            img.alt = conhecimento.nome;
            

            const textoC = document.createElement('div');
            textoC.className = 'textoC'

            const tituloC = document.createElement('div');
            tituloC.className = 'tituloC'
            const h2 = document.createElement('h2');

            h2.innerText = conhecimento.nome;

            const descricaoC = document.createElement('div');
            descricaoC.className = "descricaoC";
            const p = document.createElement('p');

            p.innerText = conhecimento.descricao;


            logoC.appendChild(img);
            tituloC.appendChild(h2);
            textoC.appendChild(tituloC);
            descricaoC.appendChild(p);
            textoC.appendChild(descricaoC);

            contentC.appendChild(logoC);
            contentC.appendChild(textoC);

            cardC.appendChild(contentC);

            contentConhecimento.appendChild(cardC);
        
        })


    } catch (error) {
        console.log("erro ao encontrar o documento contendo os conhecimentos", error)
    }
   

}

//projetos list


listarConhecimentos();