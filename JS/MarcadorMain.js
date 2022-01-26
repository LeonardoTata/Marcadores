const contador = document.getElementById("contar");
const incrementar = document.getElementById("inc");
const decrecer = document.getElementById("dec");
const reset = document.getElementById("reset");

let numero = 0;

incrementar.addEventListener("click", ()=>{
    numero++;
    contador.innerHTML = numero
})

decrecer.addEventListener("click", ()=>{

    if(numero==0){}
    else{numero--
    contador.innerHTML = numero
    }
})

reset.addEventListener("click", ()=>{
    numero = 0;
    contador.innerHTML = numero
})

// segundo contador

const contador2 = document.getElementById("contar2");
const incrementar2 = document.getElementById("inc2");
const decrecer2 = document.getElementById("dec2");
const reset2 = document.getElementById("reset2");

let numero2 = 0;

incrementar2.addEventListener("click", ()=>{
    numero2++;
    contador2.innerHTML = numero2
})

decrecer2.addEventListener("click", ()=>{

    if(numero2==0){}
    else{numero2--
    contador2.innerHTML = numero2
    }
})

reset2.addEventListener("click", ()=>{
    numero2 = 0;
    contador2.innerHTML = numero2
})



