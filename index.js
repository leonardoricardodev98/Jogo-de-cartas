
let jogador = {
    nome: "Leonardo",
    creditos: 205,
    saldacao: function() {
        console.log("Ola")
    }
}
jogador.saldacao()

let fezVinteUm = false
let aindaEstaNoJogo = false
let mensagem = ""
let mensagemElemento = document.getElementById("mensagemElemento")
let somarElemento = document.getElementById("somarElemento")
let elementoCartas = document.getElementById("elementoCartas")


let jogadorElemento = document.getElementById("elementoJogador")

jogadorElemento.textContent = jogador.nome + ": R$" + jogador.creditos

function pegarCartaAleatoria(){
    let numeroAleatorio =  Math.floor(Math.random()*13) + 1
    if(numeroAleatorio > 10) {
        return 10
    } else if (numeroAleatorio === 1){
        return 11
    } else{
        return numeroAleatorio
    }
}


function comecarJogo() {
    aindaEstaNoJogo = true
    let primeiraCarta = pegarCartaAleatoria()
    let segundacarta = pegarCartaAleatoria()
    pegarCartas = [primeiraCarta, segundacarta]
    soma = primeiraCarta + segundacarta
    carregarJogo()
}

function carregarJogo() {

    elementoCartas.textContent = "Cartas: " 

    for(let i = 0; i<pegarCartas.length; i++){
        elementoCartas.textContent += pegarCartas[i] + " "
    }


    somarElemento.textContent = "Soma: " + soma

    if(soma <= 20){
        mensagem = "Você quer pegar uma nova carta?"
    }else if(soma === 21) {
        mensagem = "Parabéns, você fez 21"
        fezVinteUm = true
    }else{
        mensagem = "Você está fora do jogo!!!"
        aindaEstaNoJogo = false
    }
    mensagemElemento.textContent = mensagem
}



function novaCarta() {
    if (aindaEstaNoJogo === true && fezVinteUm === false) {

    let carta = pegarCartaAleatoria()
    soma = soma + carta

    pegarCartas.push(carta)
    console.log(carta)

    carregarJogo()

    }


}




