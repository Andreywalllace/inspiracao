$(window).scroll(function() {
    navbarBackground();
});


function navbarBackground(){
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
    } else {
        $('.nav').removeClass('affix');
    }

    var alturaHome = $("#home")[0].clientHeight;
    if ($(document).scrollTop() > alturaHome) {
        setTextPrincipal();
    }

}


$('.navTrigger').click(function () {
    $(this).toggleClass('active');

    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});



function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
}





function setBG(){
    /** BACKGROUND **/

    imageActuelle = 0;
    imagesBG = new Array();
    imagesBG[0]='img/bg/07.png';
    imagesBG[1]='img/bg/02.png';
    imagesBG[2]='img/bg/01.png';
    imagesBG[3]='http://www.veterinaire-alliance.fr/wp-content/themes/alliance-1.1/images/services/fond-medecine-interne.jpg';
    imagesBG[4]='http://www.veterinaire-alliance.fr/wp-content/themes/alliance-1.1/images/services/fond-medecine-interne-2.jpg';

    textureBg ='https://i.imgur.com/5HldDuP.png';


    $('.home').css('background','linear-gradient(to right, rgb(18, 111, 158, 0.74), rgba(255, 106, 0, 0.64)), repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 10px, rgba(0, 0, 0, 0.3) 10px, rgba(0, 0, 0, 0.3) 20px), url('+imagesBG[randomInt(0,3)]+')'); 



    $('.home').css('background-repeat','no-repeat, no-repeat');
    $('.home').css('background-size','auto, auto, cover');
}


function setTextPrincipal(){
    imageActuelle = 0;
    frase = new Array();
    frase[0]='A SEGURANÇA DA SUA REDE DE GÁS PASSA POR AQUI';
    frase[1]='RESOLVER O SEU PROBLEMA É NOSSA MELHOR SOLUÇÃO';
    frase[2]='FAZEMOS ENGENHARIA ORIENTADA EM RESOLVER PROBLEMAS';
    frase[3]='MAIS PROTEÇÃO E SEGURANÇA PARA SUA FAMÍLIA';
    frase[3]='';

    $('#textohome').text(frase[randomInt(0,4)]);
}




function centralizarFilhoVerticalHorizontal(pai,filho){
    centralizarFilhoVertical(pai,filho);
    centralizarFilhoHorizontal(pai,filho);


}


function centralizarFilhoVertical(pai,filho){
    var alturaPai  = pai[0].clientHeight;   
    var alturafilho = filho[0].clientHeight; 
    var top = (alturaPai/2) - (alturafilho/2);
    filho.css({top: top});
}

function centralizarVertical(elemento1,elemento2){

    qtdElmentos = elemento1.children.length;
    var alturaElemento1 = 0;
    var alturaElemento2 = elemento2[0].clientHeight;

    for (var i = 0; i < qtdElmentos; i++) {

        alturaElemento1 = alturaElemento1 +  elemento1[0].children[i].clientHeight;
    }

    var top = (alturaElemento2/2) - (alturaElemento1/2);
    elemento1.css({"padding-top": top});
}




function centralizarFilhoHorizontal(pai,filho){
    var larguraPai = pai[0].clientWidth;
    var largurafilho = filho[0].clientWidth;
    var left = (larguraPai/2) - (largurafilho/2);
    filho.css({left: left});
}

function configurarTela(){
    centralizarFilhoVerticalHorizontal($("#home"), $("#textohome"));
    centralizarFilhoHorizontal($("#home"), $("#btnscrool"));

    if ($(window).width() >= 992)
    {
        centralizarVertical($("#propositoText"), $("#imgProposito"));
        centralizarVertical($("#terceirizarTexto"),$("#terceirizarFoto"));
        centralizarVertical($("#atendimentoText"),$("#atendimentoImg"));
        //  centralizarVertical($("#footerTexto"),$("#footerFoto"));
    }
    else if( ($(window).width() < 992 ) && ($(window).width() > 768 )  ) {
        $("#propositoText").css({"padding-top": 0});
         $("#terceirizado").css({"margin-top": 0});
         $("#terceirizarTexto").css({"padding-top": 200});
    } 
    else if ($(window).width() <= 768)
    {
        $("#terceirizarTexto").css({"padding-top": 200});
        $("#terceirizado").css({"margin-top": -170});
        $("#footer").css({"margin-top": -150});
        $(".footerTexto").css({"margin-top": 0});
        
    }

    $('#prime').css({height: $('#prime-container')[0].clientHeight+150});

    $("#btnscrool").css({top: $("#home")[0].clientHeight -150 });

    backgroundGridNumeros();
    lojinha();

}


function backgroundGridNumeros(){

    var grid = $("#grid-numeros")[0];
    qtdElmentos = $("#grid-numeros")[0].children.length;

    colorBG = new Array();
    colorBG[0]='#213d6c';
    colorBG[1]='#2a4f8e';
    colorBG[2]='#3664b3';
    colorBG[3]='#4277d4';
    colorBG[4]='#4b85ea';
    colorBG[5]='#568dec';
    // Indice usado para trocar a cor de fundo
    var j = 0;


    for (var i = 0; i < qtdElmentos; i++) {
        var filhoClass = grid.children[i].className;
        var filho = grid.children[i];
        // verifico se tem a classe topico na div 
        if(  filhoClass.match("topico") ){
            // verifico a posicao

            if(i > 0)
            {
                if( filho.offsetTop == grid.children[i-1].offsetTop ){
                    j++;      
                }else
                {
                    j =0;
                }
            }
            filho.style.backgroundColor = colorBG[j];


        }
    }
}


function mouseCardServicoIn(texto){

    texto.style.visibility = "hidden";    
}

function mouseCardServicoOut(texto){

    texto.style.visibility = "visible";
}



function lojinha()
{  


    neonPosicaoLojinha($("#img1"),"esquerda");
    neonPosicaoLojinha($("#img2"),"esquerda");
    neonPosicaoLojinha($("#img3"),"direita");
    neonPosicaoLojinha($("#img4"),"direita");
}

function neonPosicaoLojinha(element, orientacao)
{
    var altura  = $("#loja")[0].clientHeight;
    var largura = $("#loja")[0].clientWidth; 


    var rotacao = getRndInteger(25,45 ); 
    element.css({'transform' : 'rotate('+ rotacao +'deg)'});


    if(orientacao == "direita"){
        var maxWidth = getRndInteger((largura*0.03) , (largura*0.08) );
        element.css({maxWidth: maxWidth }); 

        if($(window).width() < 992)
        {
            element.css({display: "none" });
        }else{
            element.css({display: "block" });
        }

        var marginLeft = getRndInteger((largura*0.90) , (largura+65) ); 
        element.css({marginLeft: 0 });  

        var marginRight =  getRndInteger((largura*0.06) , (largura*0.04) ); 
        element.css({marginRight: marginRight }); 


        element.css({float: "right" });  


    } 
    else 
    {

        var maxWidth = getRndInteger((largura*0.15) , (largura*0.20) );
        element.css({maxWidth: maxWidth }); 

        var marginLeft = -1 * getRndInteger((largura*0.10) , (largura*0.15) ); 
        element.css({marginLeft: marginLeft });  


        element.css({float: "left" });  
    }




}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}



autoPlayYouTubeModal();

//FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
function autoPlayYouTubeModal() {
    var trigger = $("body").find('[data-toggle="modal"]');
    trigger.click(function () {
        var theModal = $(this).data("target"),
            videoSRC = $(this).attr("data-theVideo"),
            videoSRCauto = videoSRC + "?autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        var alturaFrame = $(window).height()/1.5;
        $(".frame").css({height: alturaFrame+"px" });  

        $(theModal + ' button.close').click(function () {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
    });
}







window.onload = function() {
    //   setBG();   
    navbarBackground();
    setTextPrincipal();
    configurarTela();



};

window.onresize = function(){
    configurarTela();

}







