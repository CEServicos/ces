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

document.body.onresize = () => {
    let menu = document.querySelector("#links");
    if(window.innerWidth >= 610){
        menu.style.display = "block";
    }
    else{
        menu.style.display = "none";
    }
}

window.onscroll = () => {
    let top = document.getElementById("top");

    if(document.documentElement.scrollTop >= 100){
        top.style.display = "block";
    }
    else{
        top.style.display = "none";
    }
}