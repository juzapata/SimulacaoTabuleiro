// modules
const fs = require('fs');

// métodos
const dice = require('./services/dice');
const getRandomInt = require('./services/getRandom');
// atributos
const Players = require('./model/players');
let jsonCasas = require('./data/gameConfig');
const gameAttributes = require('./model/gameAttributes');
const totalAttributes = require('./model/totalAttributes');
let arrayJogadores = [];

let impulsivo = new Players('impulsivo');
let exigente = new Players('exigente');
let cauteloso = new Players('cauteloso');
let aleatorio = new Players('aleatorio');
let atributosJogo = new gameAttributes();
let atributosTotal = new totalAttributes();
let contadorRodada = 0;


//console.log(jsonCasas);
for (let n = 0; n < 300; n++) {
    
    // iteração das partidas
    for (let i = 0; i < 1000; i++) {
        // iteração das rodadas
        if (atributosJogo.numeroDeJogadoresNoJogo === 1) {
            break;
        }
    for (let j = 0; j < jsonJogadores.length; j++) {
        let jogadores = jsonJogadores[j];

        arrayJogadores.push(jogadores.tipoJogador);
        if (jogadores.podeJogar === true) {
            jogadores.dice = dice.roll();
            jogadores.casaQueEsta += jogadores.dice;

            if (jogadores.casaQueEsta > 19) {
                // lógica para que o jogador rode o tabuleiro
                jogadores.casaQueEsta = (jogadores.casaQueEsta - 19);
                jogadores.coins += 100;
                jogadores.rodouTabuleiro += 1;
            }
        }
        for (let k = 0; k < jsonCasas.length; k++) {
            // acessando o json das casas
            const casaTab = jsonCasas[k];
            if (casaTab.dono === jogadores.tipoJogador && casaTab.presisaReceber === true) {
                // lógica para caso o jogador precisar receber aluguel no começo da sua vez
                jogadores.coins += casaTab.qToPrecisaReceber;
                jogadores.qtoRecebeuDeAluguel += casaTab.qToPrecisaReceber;
                casaTab.presisaReceber = false;
                casaTab.qToPrecisaReceber = 0;
            }
            if (jogadores.casaQueEsta === (k + 1) && jogadores.podeJogar === true) {
                // Aqui jogadores começam a jogar, cada condição corresponde a uma vez do jogador, onde ele pode comprar, ou pagar aluguel ou não tomar nenhuma ação
                if (jogadores.tipoJogador === 'impulsivo') {
                    if (casaTab.comprada === true && casaTab.dono !== 'impulsivo') {
                        jogadores.coins = jogadores.coins - casaTab.aluguel;
                        jogadores.qtoGastouCAluguel += casaTab.aluguel
                        casaTab.presisaReceber = true;
                        casaTab.qToPrecisaReceber += casaTab.aluguel;
                        casaTab.quemPagouAluguel.push(jogadores.tipoJogador);
                    } else if (jogadores.coins >= casaTab.compra && casaTab.comprada === false) {
                        // jogadores.qtoGastouComCompra += casaTab.compra;
                        jogadores.coins = jogadores.coins - casaTab.compra;
                        // jogadores.quaisPropriedades.push(casaTab.numCasa);
                        // jogadores.propriedades += 1
                        casaTab.comprada = true;
                        casaTab.dono = jogadores.tipoJogador;
                    }
                }
                if (jogadores.tipoJogador === 'exigente') {
                    if (casaTab.comprada === true && casaTab.dono !== 'exigente') {
                        jogadores.coins = jogadores.coins - casaTab.aluguel;
                        casaTab.qToPrecisaReceber += casaTab.aluguel;
                        jogadores.qtoGastouCAluguel += casaTab.aluguel
                        casaTab.presisaReceber = true;
                        casaTab.quemPagouAluguel.push(jogadores.tipoJogador);
                    } else if (jogadores.coins >= casaTab.compra && casaTab.comprada === false && casaTab.aluguel > 50) {
                        jogadores.coins = jogadores.coins - casaTab.compra;
                        jogadores.qtoGastouComCompra += casaTab.compra;
                        jogadores.quaisPropriedades.push(casaTab.numCasa);
                        jogadores.propriedades += 1
                        casaTab.comprada = true;
                        casaTab.dono = jogadores.tipoJogador;
                    }
                }
                if (jogadores.tipoJogador === 'cauteloso') {
                    if (casaTab.comprada === true && casaTab.dono !== 'cauteloso') {
                        // console.log('cauteloso vai pagar aluguel');
                        jogadores.coins = jogadores.coins - casaTab.aluguel;
                        casaTab.qToPrecisaReceber += casaTab.aluguel;
                        jogadores.qtoGastouCAluguel += casaTab.aluguel
                        casaTab.presisaReceber = true;
                        casaTab.quemPagouAluguel.push(jogadores.tipoJogador);
                    }
                    else if (jogadores.coins >= casaTab.compra && casaTab.comprada === false && (casaTab.compra - jogadores.coins >= 80)) {
                        // console.log('cauteloso vai comprar');
                        jogadores.coins = jogadores.coins - casaTab.compra;
                        jogadores.qtoGastouComCompra += casaTab.compra;
                        jogadores.quaisPropriedades.push(casaTab.numCasa);
                        jogadores.propriedades += 1
                        casaTab.comprada = true;
                        casaTab.dono = jogadores.tipoJogador;
                    }
                }
                if (jogadores.tipoJogador === 'aleatorio') {
                    let random = getRandomInt(0, 100);
                    // console.log('numero aleatorio:', random)
                    if (casaTab.comprada === true && casaTab.dono !== 'aleatorio') {
                        // console.log('aleatorio vai pagar aluguel');
                        jogadores.coins = jogadores.coins - casaTab.aluguel;
                        casaTab.qToPrecisaReceber += casaTab.aluguel;
                        jogadores.qtoGastouCAluguel += casaTab.aluguel
                        casaTab.presisaReceber = true;
                        casaTab.quemPagouAluguel.push(jogadores.tipoJogador);
                    } else if (jogadores.coins >= casaTab.compra && casaTab.comprada === false && random < 50) {
                        // console.log('aleatorio vai comprar');
                        jogadores.coins = jogadores.coins - casaTab.compra;
                        jogadores.qtoGastouComCompra += casaTab.compra;
                        jogadores.quaisPropriedades.push(casaTab.numCasa);
                        jogadores.propriedades += 1
                        casaTab.comprada = true;
                        casaTab.dono = jogadores.tipoJogador;
                    }
                }
            }
            // lógica para verificar se o jogador está com coins negativos, e assim eliminá-lo da partida
            if (jogadores.coins < 0 && jogadores.elminado === false) {
            
                atributosJogo.elminados.push(jogadores.tipoJogador);
                atributosJogo.numeroDeJogadoresNoJogo -= 1;
                jogadores.elminado = true;
                jogadores.podeJogar = false
            }
            // lógica para 'colocar' as propriedades jo jogador eliminado a venda de novo
            if (jogadores.elminado === true && casaTab.dono === jogadores.tipoJogador) {
                casaTab.comprada = false;
                casaTab.dono = 'sem dono';
            }
        }
    }
    // no final de cada rodada é somado um ao contadorRodada
    contadorRodada += 1;
}
if (contadorRodada === 1000) {
    // lógica para verificação se a partida terminou por timeOut, e fazer o desempate do jogadores que sobraram, com base no seu número de coins, e identificar o vencedor
    atributosTotal.contadorTimeOut += 1;
    let diferença = arrayJogadores.filter(el => { return atributosJogo.elminados.indexOf(el) === -1 });
    let ganhador;
    let arrayCoins = [];
    for (let i = 0; i < jsonJogadores.length; i++) {
        const jogadores = jsonJogadores[i];
        for (let j = 0; j < diferença.length; j++) {
            const jogadoresQueFicaram = diferença[j];
            if (jogadores.tipoJogador === jogadoresQueFicaram) {
                arrayCoins.push(jogadores.coins);
            }
        }
    }
    let arrayCoinsSorted = arrayCoins.sort().reverse();
    for (let i = 0; i < jsonJogadores.length; i++) {
        const jogadores = jsonJogadores[i];
        if (jogadores.coins === arrayCoinsSorted[0]) {
            ganhador = jogadores.tipoJogador;
        }
    }
    // identificando o ganhador
    if (ganhador === 'impulsivo') {
        atributosTotal.contadorImpulsivo += 1;
    } else if (ganhador === 'exigente') {
        atributosTotal.contadorExigente += 1;
    } else if (ganhador === 'cauteloso') {
        atributosTotal.contadorCauteloso += 1;
    } else if (ganhador === 'aleatorio') {
        atributosTotal.contadorAleatorio += 1;
    }

} else if (contadorRodada < 1000 && atributosJogo.numeroDeJogadoresNoJogo === 1) {
    // lógica para verificar caso algum jogador ganhou a partida antes do time out
    let ganhador = arrayJogadores.filter(el => { return atributosJogo.elminados.indexOf(el) === -1 });
    // identificando o ganhador
    if (ganhador[0] === 'impulsivo') {
        atributosTotal.contadorImpulsivo += 1;
    } else if (ganhador[0] === 'exigente') {
        atributosTotal.contadorExigente += 1;
    } else if (ganhador[0] === 'cauteloso') {
        atributosTotal.contadorCauteloso += 1;
    } else if (ganhador[0] === 'aleatorio') {
        atributosTotal.contadorAleatorio += 1;
    }
}

atributosTotal.totalRodadas += contadorRodada;
// limpando todos os atributos para a próxima partida
contadorRodada = 0;
jsonJogadores.map(el => {
    el.coins = 300
    el.podeJogar = true
    el.elminado = false
    el.dice = null
    el.propriedades = 0
    el.quaisPropriedades = []
    el.casaQueEsta = 0
    el.rodouTabuleiro = 0
    el.qtoRecebeuDeAluguel = 0
    el.qtoGastouCAluguel = 0
    el.qtoGastouComCompra = 0
});
atributosJogo.numeroDeJogadoresNoJogo = 4
atributosJogo.elminados = [];
jsonCasas.map(el => {
    el.comprada = false;
    el.dono = 'sem dono';
    el.presisaReceber = false;
    el.qToPrecisaReceber = 0;
    el.quemPagouAluguel = [];
});
}
// lógica para exibir os resultados pedidos
console.log('RESULTADO');
console.log(`${atributosTotal.contadorTimeOut} partidas terminaram por "time out"`);
console.log(`${(atributosTotal.totalRodadas / 300).toFixed(2)} turnos em média demoram uma partida`);
// calculando a porcentagem de partidas vencidas de cada jogador
let porcImpulsivo = (atributosTotal.contadorImpulsivo * 100) / 300;
let porcExigente = (atributosTotal.contadorExigente * 100) / 300;
let porcCauteloso = (atributosTotal.contadorCauteloso * 100) / 300;
let porcAleatorio = (atributosTotal.contadorAleatorio * 100) / 300;
console.log(`Impulsivo ganhou ${porcImpulsivo} % das vezes`);
console.log(`Exigente ganhou ${porcExigente} % das vezes`);
console.log(`Cauteloso ganhou ${porcCauteloso} % das vezes`);
console.log(`Aleatorio ganhou ${porcAleatorio} % das vezes`);
// calculando através da porcentagem qual jogador venceu mais
let porcentagemVencedores = [
    {
        jogador: 'impulsivo',
        porcentagem: porcImpulsivo.toFixed(2)
    },
    {
        jogador: 'exigente',
        porcentagem: porcExigente.toFixed(2)
    },
    {
        jogador: 'cauteloso',
        porcentagem: porcCauteloso.toFixed(2)
    },
    {
        jogador: 'aleatorio',
        porcentagem: porcAleatorio.toFixed(2)
    }

]
let maiorPorcentagem = Math.max(porcImpulsivo.toFixed(2), porcExigente.toFixed(2), porcCauteloso.toFixed(2), porcAleatorio.toFixed(2));
let grandeGanhador = porcentagemVencedores.filter(el => { return parseFloat(el.porcentagem) === maiorPorcentagem })
console.log(`O comportamento ${grandeGanhador[0].jogador} vence mais vezes`);
