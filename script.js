console.log("oi")
//alert("BEM VINDO")
const nome="idioma";
// precisa tirar o .textContent pra usar a funçao abaixo;
const botao=document.getElementById("btn")
console.log(botao)
const linguagens=document.querySelector(".linguagens")
const idiomaescolhido=document.querySelectorAll(".PT")

//tudo que for mudado precisa ter um get ElementbYiD E UM CONTEUDO EM PT E EM EN
const movies=document.getElementById("movies");
const movies1=document.getElementById("movies1");
const movies2=document.getElementById("movies2");

const translations={
    en:{
        texto:"Unlimeted movies,",
        texto2: "TV shows,",
        texto3: "and more"
    },
    pt:{
        texto:"filmes e séries"
    }
}
//renomear o addEventListener
botao.addEventListener('click',
    ()=>{
      linguagens.classList.toggle("mostrar")  
    }
) 
//renomear o addEventListener; 
idiomaescolhido.forEach((idioma) =>{
    idioma.addEventListener("click", () => {
        const lang=idioma.getAttribute("data-lang");
      
        botao.textContent = idioma.textContent;


        //textp que vai ser mudado. 
        movies.textContent=translations[lang].texto
        // mais conteudo que vai ser mudado ...
        movies1.textContent=translations[lang].texto2
        movies2.textContent=translations[lang].texto3
        linguagens.classList.remove("mostrar")
    })
}   
)   

