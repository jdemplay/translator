var msc = false;
var erros = 0;
var tempo = 10;

$(document).ready(function(){
    musica = new Audio("./msc/musica.mp3");
    musica.volume = 0.2;
    $("section").hide();
    $("section.inicio").show();
});

$("#btn_inicio").on('click',function(){
    $("section").hide();
    $("section.jogo").show();

    setInterval(function(){ 
        $("#tempo").text(tempo);
        tempo--;
        if(tempo < 0){
            $("section").hide();
            $("section.perde").show();
        }
    }, 1000);
    
    geraPergunta();
    
});

$(".som").on('click',function(){
    if(msc == true){
        $(this).text("volume_off");
        musica.pause();
        msc = false;
    } else{
        $(this).text("volume_up");
        musica.play();
        msc = true;
    }
});

const perguntas = [
    {
        pergunta: "Qual o significado de 'Horse'?",
        opcoes:[
            'Animal',
            'Vaca',
            'Chave',
            'Porta',
            'Porque',
            'Cavalo'
        ],
        resposta:"Cavalo"
    },
    {
        pergunta: "Qual o significado de 'Entrepreneurship'?",
        opcoes:[
            'Administração',
            'Cinema',
            'Faculdade',
            'Empreendedorismo',
            'Carreira',
            'Empreendedor'
        ],
        resposta:"Empreendedorismo"
    },
    {
        pergunta: "Qual o significado de 'Unbeknownst'?",
        opcoes:[
            'Cachorro',
            'Compreensão',
            'Televisão',
            'Sem o conhecimento de..',
            'Rato',
            'Porta-Aviões'
        ],
        resposta:"Sem o conhecimento de.."
    }
];

var index = [];
var cont = [];

for (let i=0;i<perguntas.length;i++) {
    index.push(i);
}

for (index, i = index.length; i--; ) {
    var embaralha = index.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
    cont.push(embaralha);
}

n = cont[0];
a=0;

function geraPergunta() {
if(a == perguntas.length){
    $("section").hide();
    $("section.ganha").show();
    musica = new Audio("./msc/")
} else{
    $(".quiz").empty();
    $("#perg").text(perguntas[n].pergunta);

    for(let i=0;i<perguntas[n].opcoes.length;i++){
        $(".quiz").append("<span class='alternativa'>"+perguntas[n].opcoes[i]+"</span>");
    }

    $(".alternativa").on('click',function(){
        if(perguntas[n].resposta == $(this).text()){
            tempo = 10;
            a++;
            n = cont[a];
            geraPergunta();
        } else{
            erros++;
            $("#erros").text(erros);
            if(erros == 5){
                $("section").hide();
                $("section.perde").show();
            }
        }
    });
}
    
}