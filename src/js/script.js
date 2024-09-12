function menuON_OFF() {
    document.getElementById("menu").classList.toggle("show")
    console.log("OI")
    document.getElementById("page").classList.toggle("onFocus")
}



/*document.addEventListener('mousemove', function(event) {
    const menu = document.getElementById('menu');
    const mouseX = event.clientX;
    
    if (mouseX < 50) {
        menu.classList.add('show');//adiciona a classe show

    } else {
        if (!menu.matches(':hover') && mouseX > 250) {
            menu.classList.remove('show');
        }//remove a classe show 
    }
});

document.getElementById('menu').addEventListener('mouseover', function() {
    this.classList.add('show');
});//menu aberto com o mouse em cima

document.getElementById('menu').addEventListener('mouseout', function(event) {
    if (!event.relatedTarget || !this.contains(event.relatedTarget)) {
        this.classList.remove('show');
    }
});//fecha menu quando mouse sai
*/