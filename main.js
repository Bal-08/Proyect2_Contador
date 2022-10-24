const Contador = document.getElementById("valor");
const sumar = document.getElementById("aument");
const reiniciar = document.getElementById("reiniciar");
const restar = document.getElementById("decrem");

let num = 0;

sumar.addEventListener("click", ()=>{
    num++;
    if(num > 0) {
        valor.style.color = '#008000';
      }
    Contador.innerHTML =num;
    
});

restar.addEventListener("click", ()=>{
        num--;
        if(num < 0) {
            valor.style.color = '#ba215a';
          }
        Contador.innerHTML =num;
    
});


reiniciar.addEventListener("click", ()=>{
    num = 0;
        valor.style.color = '#000000' 
    Contador.innerHTML = num;
}); 

