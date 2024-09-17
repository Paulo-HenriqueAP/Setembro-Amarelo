let textForPersonTag = document.getElementById("peopleText")//  a tag responsável por armazenar o texto
let videoDiv = document.getElementById("videoHub");// a div que fica o player do Youtube
let videoLink = document.getElementById("setVideoURL");// o elemento para definir o link

function menuON_OFF() {
    document.getElementById("menu").classList.toggle("show");
    document.getElementById("page").classList.toggle("onFocus");

    document.getElementById("menu").classList.contains("show") ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

};//basicamente, ela tira e coloca a classe "show" do menu

const stuffsFromPeople = [
    {
        id: "demi", text: `
        <h1><b>Demi Lovato</b></h1>

            <p>Demi Lovato revelou que teve pensamentos suicidas pela primeira vez aos 7 anos.
            Em entrevista ao programa Dr. Phill, a cantora – que levanta bandeiras em prol da saúde mental – confessou que, na infância, via no suicídio uma “saída” para seus problemas.
            “Eles eram impulsionados pela tristeza, solidão e depressão”, afirmou ela.</p>
            <p>Ela associa os sentimentos a “questões mal resolvidas” em relação ao pai biológico, que abandou a família quando a cantora era criança.
            Patrick Lovato morreu em 2013, e sofria de distúrbios mentais.
            “Agora que eu cresci e passei pelo luto de sua morte, consegui entender que ele era doente e não me abandonou porque queria.
            Eu pude superar a perda dele e entender onde tudo deu errado”.</p>
            <p>Em 2010, a ex-estrela da Disney deu entrada em um centro de reabilitação por problemas com álcool e drogas.
            Desde a infância, ela luta contra distúrbios alimentares, depressão e bipolaridade, e aproveita sua fama e visibilidade para conscientizar as pessoas quanto ao cuidado com a saúde mental.
            Pouco menos de três anos depois da internação, ela lançou o livro de autoajuda Demi Lovato: 365 Dias do Ano, com frases motivacionais e reflexões sobre a vida.</p>
            <p>Hoje, Demi afirma que a depressão tem ido embora aos poucos e, na última sexta-feira, ela comemorou seis anos de sobriedade com publicação no Instagram: “Uma grande parte da minha recuperação foi aprender a me amar”, escreveu ela.</p>   
    `
    },

    {
        id: "fabio", text: `
        <h1><b>Fabio Porchat</b></h1>

            <p>Fabio Porchat é um conhecido humorista e apresentador brasileiro, e ele tem sido bastante aberto sobre suas experiências pessoais e desafios.
            Em uma entrevista de 2016, ele revelou que passou por um momento muito difícil e enfrentou pensamentos suicidas durante um período de grande estresse e depressão.</p>
            <p>Porchat discutiu como a pressão e o desgaste emocional acumulado o levaram a uma crise, e ele falou sobre a importância de buscar ajuda profissional e apoio.
            Ele usou sua experiência para aumentar a conscientização sobre a saúde mental e a necessidade de tratamento adequado para questões como depressão e ansiedade.
            Seu relato é um exemplo de como a vulnerabilidade e a abertura podem ajudar a desestigmatizar conversas sobre saúde mental e encorajar outras pessoas a procurar ajuda quando necessário.</p>
    `
    },

    {
        id: "taina", text: `
         <h1><b>Tainã de Oliveira Silva</b></h1>

            <p>A enfermeira obstetra Tainã de Oliveira Silva, 26 anos, viu sua vida ser tomada pela tristeza profunda há cinco anos. 
            Acometida por um quadro de depressão, ela tomou uma alta dose de tranquilizantes, desmaiou e foi internada em um hospital de Salvador.
            "Eu não quis tirar minha vida, mas me livrar da dor do que estava sentindo", relata a jovem, que foi diagnosticada com depressão moderada.</p>
            <p>Ao ser diagnosticada com depressão, ela foi acompanhada por um psiquiatra e passou a tomar medicamentos antidepressivos durante três meses.
            Também voltou a frequentar o centro espírita, buscando apoio de uma psicóloga comportamental e espiritual.</p>
            <p>Recuperada, Tainã casou e hoje celebra a vitória de conseguir viver tranquilamente.
            Ela não toma mais medicamentos antidepressivos e mantém um amor incondicional aos cachorrinhos de estimação, que também a ajudaram a recuperar a vontade de viver.</p>
    `
    },

    { id: "glaucia", text: '<h1><b>Glaucia</b></h1>' }//quando é um vídeo, definimos somente o título com o nome
];//Armazenamos todos os ids das imgs que estão nos botoes e seus recursos > links, textos.. 

//const temasAmarelos = [];

setRandomText();//chamamos a função parar gerar o texto aleatorio

function setRandomText() {
    randomText = stuffsFromPeople[Math.floor(Math.random() * stuffsFromPeople.length)]// estamos gerando um número aleatorio entre o primeiro e último elemento da array

    showPeopleText({ target: { id: randomText.id } })//abre a funcao showPeopleText passando como parâmetro a id do número gerado aleatoriamente
    //ele está criando um objeto que "simula" o click no botão
};

function cleanYellowBorder() {
    stuffsFromPeople.forEach(whatId => {
        document.getElementById(whatId.id).classList.remove("addBorderToElement")
    });//buscamos o id de todos os elementos da array 
    //e removemos a borda amarela de todos (aquela que mostra que está selecionado)
}
function showPeopleText(event) {
    cleanYellowBorder();
    videoDiv.classList.add("hidden");
    let selectedPerson = stuffsFromPeople.find(lookFor => lookFor.id == event.target.id)// buscamos a id do botão selecionado e armazenamos este valor na var selectedPerson
    document.getElementById(selectedPerson.id).classList.add("addBorderToElement");// colocamos a borda amarela ao redor, indicando qual pessoa está selecionada

    textForPersonTag.innerHTML = selectedPerson.text// atribuímos o valor da var com o texto da pessoa selecionada

    switch (selectedPerson.id) {
        case "glaucia":
            videoDiv.classList.remove("hidden");
            videoLink.setAttribute("src", "https://www.youtube.com/embed/bmVC8HuMMYM?si=lOe51HH21xODVN98")
            break;
        default:
            videoDiv.classList.add("hidden");
            videoLink.setAttribute("src", "")//removemos a url ao sair da pessoa selecionada

    }//caso o "texto" da pessoa for um video, definimos a ULR e mostramos a div responsável por mostrar o player do Youtube
}

document.getElementById("page").addEventListener("click", function () {
    if (document.getElementById("menu").classList.contains("show")) {
        menuON_OFF()
    }

})//evento de click na aba que contém todos os textos, se o menu estiver em aberto, ele abre a função  menuON_OFF()

function fecharHistorias() {
    videoDiv.classList.add("hidden");
    textForPersonTag.textContent = "Selecione alguém ↴";
    cleanYellowBorder()
};// se clicar duas vezes no texto, ele apaga o texto atual















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
