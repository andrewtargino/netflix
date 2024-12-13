console.log("oi")
alert("BEM VINDO")
const nome="idioma";
const botao=document.getElementById("btn").textContent
console.log(botao)
const linguagens=document.querySelector("linguagens")
const idiomaescolhido=document.querySelectorAll("PT")
const movies=document.getElementByIs("movies");

const translations={
    en:{
        texto:"movies and series"
    },
    pt:{
        texto:"filmes e séries"
    }
}
botao.addeventlistener('click',
    ()=>{
      linguagens.classList.toggle("mostrar")  
    }
) 
idiomaescolhido.forEach((idioma) =>{
    idioma.addeventlistener("click", () => {
        const lang= idioma.getAttribute("data-lang");
        movies.textContent=translations[lang].texto
        linguagens.classList.remove("mostrar")
    })
}
    
    
)   
