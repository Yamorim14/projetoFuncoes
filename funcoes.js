function multiplicar(){
    //pegando do documento HTML
    let res = document.getElementById('resul')
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');

    //transformando para tipo Number
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);

    //validando as entradas
    if(n1 == 0|| n2 == 0){
        res.innerText = 'Preencha os campos corretamente'
    }else{ 
        //multiplicando
        let multi = n1 * n2;

        //exibindo em tela o resultado
        res.innerText = `A multiplicação entre ${n1} e ${n2} é ${multi}`;
    }
};

function fatorial(){
    //pegando do arquivo HTMl
    let resul = document.getElementById('resultado');
    let num3 = document.getElementById('num3');

    //transformando para tipo Number
    let n3 = Number(num3.value);

    //iniciando a variavel para iniciar a fatoração
    let fato = 1;

    //condição para multiplicar decrementando
    for(let cont = n3; cont > 1; cont--){
        //multiplicando
        fato = fato * cont;
        //exibindo em tela
        resul.innerText = `O resultado do fatorial de ${n3} é ${fato}`;
    }
}