const mensagem = document.querySelector(".mensagem");
const formulario = document.getElementById("formulario");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

formulario.onsubmit = (evento) =>{

  
    let dados= JSON.parse(localStorage.getItem("dados"));
   
   dados.forEach(element => {
    if (element.email == email.value && element.senha == senha.value)
    {
        evento.preventDefault();
        mensagem.innerHTML= "aguarde..."
        setTimeout(()=> {
            window.location.assign("index02.html")
        },3000)
        return true;
    }
    else{
        evento.preventDefault();
        mensagem.innerHTML="senha ou email incorreto";
    }
    
   });
}

