let textoPessoa = document.getElementById("peopleText")
function menuON_OFF() {
    document.getElementById("menu").classList.toggle("show");
    document.getElementById("page").classList.toggle("onFocus");

    document.getElementById("menu").classList.contains("show") ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

};

const textos = [
    "demi", "fabio", "taina"
];

//const temasAmarelos = [];

function textoAleatorio() {
    textoA = textos[Math.floor(Math.random() * textos.length)]
    showPeopleText({ target: { id: textoA } });
};

textoAleatorio();

function showPeopleText(event) {
    document.getElementById("demi").classList.remove("selecionado");
    document.getElementById("fabio").classList.remove("selecionado");
    document.getElementById("taina").classList.remove("selecionado");
    document.getElementById("glaucia").classList.remove("selecionado");
    document.getElementById("peopleVideo").classList.add("hidden");

    switch (event.target.id) {
        case "demi":
            document.getElementById("demi").classList.add("selecionado");
            textoPessoa.innerHTML = `
            <h1><b>Demi Lovato</b></h1>
              <p>Demi Lovato revelou que teve pensamentos suicidas pela primeira vez aos 7 anos. Em entrevista ao programa Dr. Phil, a cantora – que levanta bandeiras em prol da saúde mental – confessou que, na infância, via no suicídio uma "saída" para seus problemas. "Eles eram impulsionados pela tristeza, solidão e depressão", afirmou ela.</p>
              <p>Hoje, Demi afirma que a depressão tem ido embora aos poucos e, na última sexta-feira, ela comemorou seis anos de sobriedade com uma publicação no Instagram: "Uma grande parte da minha recuperação foi aprender a me amar", escreveu ela.</p>
            `;
            break;
        case "fabio":
            document.getElementById("fabio").classList.add("selecionado");
            textoPessoa.innerHTML = `
  <h1><b>Fabio Porchat</b></h1>
    <p>Fabio Porchat é um conhecido humorista e apresentador brasileiro, e ele tem sido bastante aberto sobre suas experiências pessoais e desafios. Em uma entrevista de 2016, ele revelou que passou por um momento muito difícil e enfrentou pensamentos suicidas durante um período de grande estresse e depressão.</p>
    <p>Porchat discutiu como a pressão e o desgaste emocional acumulado o levaram a uma crise, e ele falou sobre a importância de buscar ajuda profissional e apoio. Ele usou sua experiência para aumentar a conscientização sobre a saúde mental e a necessidade de tratamento adequado para questões como depressão e ansiedade. Seu relato é um exemplo de como a vulnerabilidade e a abertura podem ajudar a desestigmatizar conversas sobre saúde mental e encorajar outras pessoas a procurar ajuda quando necessário.</p>

`;
            break;
        case "taina":
            document.getElementById("taina").classList.add("selecionado");
            textoPessoa.innerHTML = `
  <h1><b>Tainã de Oliveira Silva</b></h1>
    <p>A enfermeira obstetra Tainã de Oliveira Silva, 26 anos, viu sua vida ser tomada pela tristeza profunda há cinco anos. 
    Acometida por um quadro de depressão, ela tomou uma alta dose de tranquilizantes, desmaiou e foi internada em um hospital de Salvador.
    "Eu não quis tirar minha vida, mas me livrar da dor do que estava sentindo", relata a jovem, que foi diagnosticada com depressão moderada.</p>
    <p>Ao ser diagnosticada com depressão, ela foi acompanhada por um psiquiatra e passou a tomar medicamentos antidepressivos durante três meses.
    Também voltou a frequentar o centro espírita, buscando apoio de uma psicóloga comportamental e espiritual.</p>
    <p>Recuperada, Tainã casou e hoje celebra a vitória de conseguir viver tranquilamente. Ela não toma mais medicamentos antidepressivos e mantém um amor incondicional aos cachorrinhos de estimação, que também a ajudaram a recuperar a vontade de viver.</p>
`;
        case "glaucia":
            document.getElementById("glaucia").classList.add("selecionado");
            document.getElementById("peopleVideo").classList.remove("hidden");
            break;
    }

}

document.getElementById("page").addEventListener("click", function () {
    if (document.getElementById("menu").classList.contains("show")) {
        document.getElementById("menu").classList.remove("show");
        document.getElementById("page").classList.remove("onFocus");
        document.body.style.overflow = "auto"
    }

})

function fecharHistorias() {
    textoPessoa.textContent = "Selecione alguém ↴";
};

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