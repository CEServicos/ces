document.getElementById("cadastro").onsubmit = (e) => {
    let nome = document.querySelector("#nome");
    let email = document.querySelector("#email");
    let senha = document.querySelector("#senha");

    console.log(nome.value);
    console.log(email.value);
    console.log(senha.value);
    // TODO: class 
    e.preventDefault();
}