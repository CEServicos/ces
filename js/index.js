document.getElementById("burguerId").addEventListener("click", function() {
    let menu = document.querySelector("#links");
    console.log("Cliquei");
    console.log(menu.style.display);
    if(menu.style.display == "none" || menu.style.display == ""){
        menu.style.display = "block";
    }
    else{
        menu.style.display = "none";
    }
})

window.addEventListener('scroll', function(){
    let scroll = document.querySelector('.topo');
    scroll.classList.toggle('active', window.scrollY > 600);
})

function mudaTamanho(){
    if(window.innerWidth >= 600){
        document.querySelector(".links").display = "block";
    }
    else
        document.querySelector(".links").display = "none";

}

document.getElementById("mao").onclick = () => {
    let frame = document.getElementById("imageFrame");
    let btn = document.getElementById("mao")
    if(frame.style.display == "none" || frame.style.display == ""){
        frame.style.display = "block";
        btn.innerHTML = "Fechar	&#10060;"
    } 
    else{
        frame.style.display = "none";
        btn.innerHTML = "Imagens Aqui&#128071;"
    }
}