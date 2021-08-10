let estrelas1 = document.getElementById('estrelas1')
let estrelas2 = document.getElementById('estrelas2')
let lua = document.getElementById('lua')
let text = document.getElementById('text')
let rocha = document.getElementById('rocha')
let tajMahal = document.getElementById('tajMahal')
let chão = document.getElementById('chão')
let header = document.getElementById('header')

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    estrelas1.style.bottom = value * 0.05 + "%";
    estrelas2.style.bottom = value * 0.05 + "%";
    lua.style.bottom = value * -0.5 + "px";
    rocha.style.bottom = value * -0.75 + "px";
    tajMahal.style.bottom = value * -0.15 + "px";

    text.style.right = -100 + value * 0.5 + "%";
    text.style.top = 50 + value * 0.1 + "%";

    header.style.top = value * 0.5 + "px"
})





function menuToggle(animation) {
    animation.classList.toggle("change");   
    animation.classList.toggle("active");  
}
