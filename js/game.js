//variaveis globais utilizadas
var altura = 0, largura = 0, vidas = 1;

//cirando um espaço na tela para gerar os elementos html;
function palco(){
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(altura, largura);
}

//executando o metodo para capturar os valores de pixls das telas
palco();
//setInterval usado para dar um intervalo de tempo em milissegundos
//recebe como argumento a função utilizada, e a quantidade tempo de intervalo (intervalo para criar outro elemento html)
setInterval(
    function mosquitos(){
        if(document.getElementById('mosquito')) {
            document.getElementById('mosquito').remove()
            if(vidas < 5){
                document.getElementById('v' + vidas).src='img/coracao_vazio.png';
                vidas++;
            }else{
                window.location.href = 'gamer_over.html';
            }
        }
        //gerando uma posição aleatória para criar elementos html
        var positionX = Math.floor(Math.random()*largura) - 90;
        var positionY = Math.floor(Math.random()*altura) - 90;
        positionX = positionX < 0 ? 0 :positionX;
        positionY = positionY < 0 ? 0 :positionY;
        console.log(positionX, positionY);

        //gerando mosquitinho aleatório 
        var mosquito = document.createElement('img');
        mosquito.src = 'img/mosquito.png';
        mosquito.className = tamanhos() + ' ' + lados();
        mosquito.style.left = positionX+'px';
        mosquito.style.top = positionY+'px';
        mosquito.style.position = 'absolute';
        mosquito.id = 'mosquito'
        mosquito.onclick = function(){
            this.remove();
        }

        document.body.appendChild(mosquito);
    }
, 1380);
//adicionando diferentes calsses aos elementos html para tamanhos variados
function tamanhos(){
    var classe = Math.floor(Math.random() * 3);
    
    switch(classe){
        case 0:
            return 'tamanho_1';
        case 1:
            return 'tamanho_2';
        case 2:
            return 'tamanho_3';
    }
}

//metodo para modificar o lado que o mosquito vai olhar
function lados(){
    var lados = Math.floor(Math.random() * 3);
    switch(lados){
        case 0:
            return '';
        case 1:
            return 'lado_b';
        
    }
}
