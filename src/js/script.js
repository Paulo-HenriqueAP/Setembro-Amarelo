let textForPersonTag = document.getElementById("peopleText")//  a tag responsável por armazenar o texto
let videoDiv = document.getElementById("videoHub");// a div que fica o player do Youtube
let videoLink = document.getElementById("setVideoURL");// o elemento para definir o link
//let textForAI = document.getElementById("chatInput").value;
//let aiText = document.getElementById("AIsay");

function menuON_OFF() {
    document.getElementById("menu").classList.toggle("show");
    document.getElementById("page").classList.toggle("onFocus");

    document.getElementById("menu").classList.contains("show") ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

};//basicamente, ela tira e coloca a classe "show" do menu

const stuffsFromPeople = [
    {
        id: "demi", text: `
        <h1>Demi Lovato</h1>

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
        <h1>Fabio Porchat</h1>

            <p>Fabio Porchat é um conhecido humorista e apresentador brasileiro, e ele tem sido bastante aberto sobre suas experiências pessoais e desafios.
            Em uma entrevista de 2016, ele revelou que passou por um momento muito difícil e enfrentou pensamentos suicidas durante um período de grande estresse e depressão.</p>
            <p>Porchat discutiu como a pressão e o desgaste emocional acumulado o levaram a uma crise, e ele falou sobre a importância de buscar ajuda profissional e apoio.
            Ele usou sua experiência para aumentar a conscientização sobre a saúde mental e a necessidade de tratamento adequado para questões como depressão e ansiedade.
            Seu relato é um exemplo de como a vulnerabilidade e a abertura podem ajudar a desestigmatizar conversas sobre saúde mental e encorajar outras pessoas a procurar ajuda quando necessário.</p>
    `
    },

    {
        id: "taina", text: `
         <h1>Tainã de Oliveira Silva</h1>

            <p>A enfermeira obstetra Tainã de Oliveira Silva, 26 anos, viu sua vida ser tomada pela tristeza profunda há cinco anos. 
            Acometida por um quadro de depressão, ela tomou uma alta dose de tranquilizantes, desmaiou e foi internada em um hospital de Salvador.
            "Eu não quis tirar minha vida, mas me livrar da dor do que estava sentindo", relata a jovem, que foi diagnosticada com depressão moderada.</p>
            <p>Ao ser diagnosticada com depressão, ela foi acompanhada por um psiquiatra e passou a tomar medicamentos antidepressivos durante três meses.
            Também voltou a frequentar o centro espírita, buscando apoio de uma psicóloga comportamental e espiritual.</p>
            <p>Recuperada, Tainã casou e hoje celebra a vitória de conseguir viver tranquilamente.
            Ela não toma mais medicamentos antidepressivos e mantém um amor incondicional aos cachorrinhos de estimação, que também a ajudaram a recuperar a vontade de viver.</p>
    `
    },

    { id: "glaucia", text: '<h1><b>Glaucia</b></h1>' },//quando é um vídeo, definimos somente o título com o nome

    {
        id: "mike", text: `
        <h1>Mike Emme</h1>

            <p>Conhecido como "Mustang Mike", era um jovem americano de Westminster, Colorado, apaixonado por seu carro Ford Mustang amarelo, que ele mesmo restaurou. Em 1994, aos 17 anos, Mike tirou a própria vida dentro de seu carro, deixando um bilhete para seus pais pedindo que não se culpassem</p>
            <p>A tragédia levou seus pais a iniciar uma campanha de conscientização sobre a prevenção do suicídio. No funeral de Mike, amigos e familiares distribuíram cartões presos a fitas amarelas com a mensagem "Se você precisar, peça ajuda". Esse gesto inspirou a criação da organização Yellow Ribbon, que promove a conscientização e prevenção do suicídio, ajudando milhares de pessoas ao redor do mundo.</p>
    `
    },

    {
        id: "maria", text: `
        <h1>Maria</h1>
        <p>Já pensei inúmeras vezes em me suicidar. Nunca tentei de fato.</p>
        <p>Aos 8 anos, fui diagnosticada com depressão por um farmacêutico que me passou alguns remédios que tomei por alguns meses. Não foi o diagnóstico ideal, mas compreendam: eu morava na zona rural de uma cidade minúscula do interior, onde era difícil conseguir um médico, que dirá um psicólogo. Esse farmacêutico era a salvação da minha família, e foi para eles que correram quando viram a filha sempre chorando sem motivo. Naquela idade, me sentia muito sozinha, e lembro de incontáveis tardes em que fiquei no quintal pensando em formas de me matar.</p>
        <p>E assim eu cresci. Numa luta eterna entre a certeza de que não importava o que os outros pensavam de mim e a vontade de ser aceita, uma vontade comum especialmente na adolescência. Sempre fui tímida, e algumas vezes para me soltar nas festas, tomava bebidas alcoólicas. E eu me soltava, mas depois me arrependia das bobagens que fazia ou falava enquanto estava bêbada. Aí vinha a vergonha e o arrependimento, duas forças muito perigosas para quem já tinha pensamentos depressivos.</p>
        <p>A escola era um paraíso e um inferno. Um paraíso onde eu tinha amigos e sentia que era boa em alguma coisa, onde tinha um propósito para existir: aprender. Mas também era um inferno onde eu podia ser ignorada ou ridicularizada.</p>
        <p>Em 2010, depois de terminar o Ensino Médio, comecei esse blog e descobri que também poderia ter voz. Depois de conhecer alguns blogs literários, em 2012, decidi voltar a ler. Sempre gostei de livros, mas no mundo em que eu vivia, era um "luxo" desnecessário. Aí eu comecei a ler, comprava alguns livros pela internet ou na revista da Avon, pedia pro meu namorado no aniversário, pegava emprestado num grupo na internet (o que me forçava a ter que sair da comodidade da minha casa ou da loja onde trabalhava e ir até a agência dos Correios fazer o envio para devolver o livro), comecei a conseguir parcerias com autores e editoras... Pouco a pouco, fui me abrindo enquanto o mundo também se abria para mim.</p>
        <p>Em 2013, eu li o livro "As vantagens de ser invisível" do Stephen Chbosky. E acredito que foi nesse ponto que a maior mudança da minha vida ocorreu. Até então, eu tentava me proteger de tudo, deixava de sentar na calçada para não sujar a roupa, deixava de comer as coisas na rua por achar que poderia sujar o rosto, não cantava por medo de me sentir ridícula, não lia livros tristes nem via filmes de drama para não chorar, sufocava minhas vontades por medo... Aí eu conheci o Charlie, protagonista do livro, e foi como se eu encontrasse a explicação para tudo o que estava dentro de mim e eu não consegui explicar.</p>
        <p>"As vantagens de ser invisível" me fez pensar em me matar, afinal, por quê não? Mas também me fez pensar em viver, afinal, por quê não? "Talvez seja bom colocar as coisas em perspectiva, mas às vezes acho que a única perspectiva é estar aqui. Como disse a Sam. Porque não há problema em sentir as coisas. E ser quem você é." Essa citação da página 221 e outras tantas do livro me fizeram aceitar quem eu sou, com tudo o que eu já fui e com o que eu posso ser.</p>
        <p>Depois de "As vantagens de ser invisível", eu entrei para a faculdade (que se Deus quiser terminarei esse ano), encarei os estágios, casei, escrevi e publiquei três contos em antologias, comecei um canal no YouTube, me tornei feminista (o que me ajudou a não sentir culpa por não seguir o padrão opressor que a sociedade impõe), e estou seguindo em frente a cada dia.</p>
        <p>Li muitos outros livros com a depressão e o suicídio como temas. Posso citar "Perdão, Leonard Peacock", onde o personagem ia cometer um assassinato e depois se suicidar, mas antes teve a presença confortadora de um professor que estava lá quando ele precisou, sorte que a Hannah de "Os 13 porquês" não teve, mas que, assim como o livro do Leonard e tantos outros lidos, deixou como lição a importância que as nossas palavras podem ter na vida dos outros. Palavras que podem matar especialmente aqueles que já estão feridos, mas que também podem ajudar a despertar a cura naqueles que precisam se sentir parte de algo, que precisam de algum lugar onde se apoiar num momento difícil.</p>
        <p>Eu nunca passei grandes dificuldades, nunca tive grandes perdas, não tenho nenhum trauma que eu me lembre. Não dá para encontrar nada que justifique a depressão, a ansiedade, a falta de ânimo e de vontade de viver que já experimentei. Antes que alguém cogite "falta de Deus", minha relação com ele vai "muito bem, obrigada!", tanto que entendi que ele não me abandonou nas tantas vezes em que o busquei, mas que nada conseguirá florescer sem antes eu cuidar do solo.</p>
        <p>No último ano eu tive dias de muito choro, onde novamente a vontade de acabar comigo apareceu, mas essas duas décadas e meia de existência me ensinaram que esses momentos passam para mim. E quando dias difíceis chegam, eu deixo as lágrimas saírem e espero, penso em tudo o que há na Terra e que eu amo: a minha família, os meus livros, as histórias que eu ainda quero ler e escrever. Diversas vezes já esqueci momentaneamente minhas tristezas nas páginas de alguma trama que eu nunca viveria, mas que me distraiam. Mantenho um diário, pois me lembrar do que aconteceu nos anos anteriores me ajuda a ver o quanto já sobrevivi. Leio de tudo, pois tanto um livro de terror quanto um romance podem despertar emoções em mim; ouço todo tipo de música, pois cada uma pode mexer uma parte do meu corpo; experimento todos os tipos de sorvete e de comidas, ainda que tenha meus preferidos. Quando bate a ansiedade, penso no pior e no melhor que pode acontecer, e me lembro que o que importa é tentar (confesso que sempre tento ter um plano B).</p>
        <p>Eu não sei exatamente o que viverei nos próximos anos. Não sei se há uma cura definitiva. Como o Wolf de "A Montanha" tem como lema: sei que "haverá oscilações", sei que posso novamente me sentir muito triste e cansada, sei que posso ter semanas terríveis onde o fim pode parecer a saída mais fácil. Mas enquanto esses dias não chegam, vou me abastecendo de pedacinhos de felicidade, vou traçando objetivos que parecem irreais para o meu lado pessimista, mas que podem acontecer se eu for atrás nessa era cheia de possibilidades, tento me limpar dos pensamentos e sentimentos ruins e tecer uma corda, não como uma forca, mas como algo para me prender à vida.</p>
        <p>Se você conhece alguém que pode estar pensando em suicídio, esteja atento, esteja presente. Acompanhamento médico/psicológico pode ajudar muito, mas para isso é preciso que ele seja buscado. Se você cogita a possibilidade do suicídio, acredite que SEMPRE há outras alternativas, sempre há algo que valerá a pena viver para ver. Nossa vida importa, tem valor, temos um espaço no mundo, podemos fazer a diferença.</p>
        `
    },

    {
        id: "eriko", text: `
        <h1>Eriko Kobayashi</h1>
        <p>Eu transformei minha experiência de tentativa de suicídio em um mangá chamado "Diário dos Meus Fracassos Cotidianos" para ajudar outras pessoas a entenderem que há uma saída para sentimentos ruins. Desde jovem, enfrentei problemas de saúde mental e dificuldades financeiras, o que me levou a tentar o suicídio várias vezes. Sofri bullying na escola e enfrentei dificuldades financeiras após terminar a universidade durante a "Era do Gelo do Emprego" no Japão. O suicídio é um problema global, com cerca de 800 mil pessoas morrendo por suicídio a cada ano. No Japão, o suicídio é uma das principais causas de morte entre crianças de 10 a 14 anos. Continuo a lutar contra pensamentos suicidas, mas desenvolvi estratégias para lidar com eles, como dormir bem, comer doces e evitar ficar sozinha. Acredito que compartilhar experiências pessoais pode ser uma forma útil de ajudar pessoas contemplando suicídio, além das táticas tradicionais como aconselhamento e medicação. A pandemia ensinou às pessoas a importância de não se esforçarem demais e de levar uma vida mais gentil com o corpo e a mente.</p>
        <p>Problemas com a minha saúde mental e dificuldades financeiras me levaram a tentar o suicídio algumas vezes desde que tinha 21 anos. Acho que meus problemas começaram na infância — sofri com violência e abusos quando cresci. No mangá, discuto meus "demônios", incluindo detalhes de minhas internações em hospital. As coisas chegaram a um ponto em que eu não conseguia mais dormir e tinha pesadelos constantes. Meus pais me levaram a vários médicos, mas nada parecia ajudar.</p>
        <p>Sofri com bullying na escola. Meu pai não trazia muito dinheiro para dentro de casa, então eu mal conseguia pagar pelos uniformes escolares. No inverno, eu tinha que vestir as mesmas roupas sempre, o que me transformou em um alvo fácil para as demais crianças.</p>
        <p>Terminei meus estudos universitários nos anos 1990, em uma época de poucas oportunidades de emprego para jovens no Japão — uma época que chegou a ser conhecida como Era do Gelo do Emprego. Quando finalmente consegui um emprego em uma editora em Tóquio, depois de meses recebendo benefícios do governo, entrei em uma rotina de longas jornadas e baixos salários. Minhas finanças estavam em situação perigosa e cheguei a roubar comida de um supermercado para me sustentar. Foi quando tentei me matar pela primeira vez.</p>
        <p>Por sorte, uma amiga me encontrou desacordada no meu apartamento e me levou para um hospital. Só acordei três dias depois.</p>
        <p>Quando me sinto solitária ou as coisas não vão bem no trabalho, ainda sinto que quero morrer. Continuo recebendo ajuda psiquiátrica e desenvolvi uma rotina para lidar com meus pensamentos. Quando eles chegam, tento dormir bem, comer doces e sentir odores bons que me fazem sentir melhor. Também tento não ficar sozinha por muito tempo.</p>
        <p>Descobri que é importante para mim sair, ver meus colegas de trabalho e conversar com meus amigos. Seu desejo por morrer diminui só de falar e rir com alguém.</p>
        <p>Espero que a pandemia tenha ensinado às pessoas a importância de não se esforçarem demais e de levar uma vida mais gentil com o corpo e a mente. As coisas podem melhorar se todos pararmos de tentar atingir o topo e nos acostumarmos com uma vida que é mais gentil com o corpo e com a mente.</p>
        `},
    { id: "barbosa", text: '<h1><b>Barbosa Paulo André</b></h1>' },//quando é um vídeo, definimos somente o título com o nome
];//Armazenamos todos os ids das imgs que estão nos botoes e seus recursos > links, textos.. 

//const temasAmarelos = [];

/*setRandomText();//chamamos a função parar gerar o texto aleatorio

function setRandomText() {
    randomText = stuffsFromPeople[Math.floor(Math.random() * stuffsFromPeople.length)]// estamos gerando um número aleatorio entre o primeiro e último elemento da array

    showPeopleText({ target: { id: randomText.id } })//abre a funcao showPeopleText passando como parâmetro a id do número gerado aleatoriamente
    //ele está criando um objeto que "simula" o click no botão
};
*/
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
        case "barbosa":
            videoDiv.classList.remove("hidden");
            videoLink.setAttribute("src", "https://www.youtube.com/embed/nOiQBA1dZ-s")
            break;
        default:
            videoDiv.classList.add("hidden");
            videoLink.setAttribute("src", "")//removemos a url ao sair da pessoa selecionada

    };
    document.getElementById("peopleText").scrollIntoView({ behavior: "smooth", block: "start" })
    document.getElementById("peoplesHub").scrollIntoView({ behavior: "smooth", block: "start" })
    //caso o "texto" da pessoa for um video, definimos a ULR e mostramos a div responsável por mostrar o player do Youtube
};

document.getElementById("page").addEventListener("click", function () {
    if (document.getElementById("menu").classList.contains("show")) {
        menuON_OFF()
    }

})//evento de click na aba que contém todos os textos, se o menu estiver em aberto, ele abre a função  menuON_OFF()

function closeText() {
    videoDiv.classList.add("hidden");
    textForPersonTag.textContent = "Selecione alguém ↴";
    cleanYellowBorder();
    videoDiv.classList.add("hidden");
    videoLink.setAttribute("src", "")
};// se clicar duas vezes no texto, ele apaga o texto atual





































/*
function AIchat() {
    const textForAI = document.getElementById("chatInput").value;
    const aiText = document.getElementById("AIsay");
    aiText.innerHTML = "";

    (async function chat() {
        try {
            const resp = await puter.ai.chat('<instruções> Seu nome é SETEMBRINHO você é uma persona do Setembro Amarelo, Prevenção ao Suicídio. Só diga seu nome se te perguntarem ou se for importante no contexto da mensagem. Já tem um título te apresentando, não diga "Olá" toda hora</instruções> Responda: <inicioTextoUsuario>' + textForAI + "</fimTextoUsuario>", { model: 'claude', stream: true });
            console.log(textForAI);
            for await (const part of resp) {
                aiText.innerHTML += part?.text?.replace(/\n/g, '<br>');
            }
        } catch (error) {
            aiText.innerHTML = "Desculpe, ocorreu um erro inesperado. Não foi possível processar sua solicitação no momento. Por favor, tente novamente mais tarde ou entre em contato com o suporte se o problema persistir. Lembre-se, sua saúde mental é importante e existem pessoas dispostas a ajudar. Se precisar de apoio imediato, não hesite em buscar ajuda profissional ou ligar para o CVV (Centro de Valorização da Vida) no número 188.";
        }
    })();
}
*/

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
