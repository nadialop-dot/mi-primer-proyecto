// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigo=[]

// Aqui crearemos la funcion del boton

function agregarAmigo(){
    let inputAmigo=document.getElementById("amigo");
    let nombreAmigo=inputAmigo.value;
 //asegurandonos de que marque 'error' si no se ingresa ningun valor   
    if (!nombreAmigo){
        alert('Debes ingresar un nombre');
        return;
    }
//agregando amigos a nuestra lista
    amigo.push(nombreAmigo);
    console.log(amigo)
    inputAmigo.value = "";
    inputAmigo.focus();
    renderizarAmigos()
}
//asegurandonos que los nombres no se repitan
function renderizarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML="";

    for ( let i = 0; i < amigo.length; i++){
        let item = document.createElement ("li");
        item.textContent=amigo[i];
        listaAmigos.appendChild(item)
    }
}
//funcion para sortear los amigos
function sortearAmigo(){
  //mostrar alerta si no ha sido ingresado ningun nombre
    if (amigo.length === 0){
        alert("No has ingresado ningun amigo");
        return;
    }
    if (amigo.length < 3){
        alert("Debes ingresar por lo menos 3 nombres");
        return;
    }
    let amigoSorteado = amigo [Math.floor(Math.random() * amigo.length)];
   //mostrando el resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es ${amigoSorteado}`
}