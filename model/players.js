// let jsonJogadores = [
//     {
//         tipoJogador: 'impulsivo',
//         coins: 300,
//         podeJogar: true,
//         elminado: false,
//         dice: null,
//         propriedades: 0,
//         quaisPropriedades: [],
//         casaQueEsta: 0,
//         rodouTabuleiro: 0,
//         qtoRecebeuDeAluguel: 0,
//         qtoGastouCAluguel: 0,
//         qtoGastouComCompra: 0

//     },
//     {
//         tipoJogador: 'exigente',
//         coins: 300,
//         podeJogar: true,
//         elminado: false,
//         dice: null,
//         propriedades: 0,
//         quaisPropriedades: [],
//         casaQueEsta: 0,
//         rodouTabuleiro: 0,
//         qtoRecebeuDeAluguel: 0,
//         qtoGastouCAluguel: 0,
//         qtoGastouComCompra: 0
//     },
//     {
//         tipoJogador: 'cauteloso',
//         coins: 300,
//         podeJogar: true,
//         elminado: false,
//         dice: null,
//         propriedades: 0,
//         quaisPropriedades: [],
//         casaQueEsta: 0,
//         rodouTabuleiro: 0,
//         qtoRecebeuDeAluguel: 0,
//         qtoGastouCAluguel: 0,
//         qtoGastouComCompra: 0
//     },
//     {
//         tipoJogador: 'aleatorio',
//         coins: 300,
//         podeJogar: true,
//         elminado: false,
//         dice: null,
//         propriedades: 0,
//         quaisPropriedades: [],
//         casaQueEsta: 0,
//         rodouTabuleiro: 0,
//         qtoRecebeuDeAluguel: 0,
//         qtoGastouCAluguel: 0,
//         qtoGastouComCompra: 0
//     }
// ]

// module.exports = jsonJogadores;

class Players {  
    constructor(type) {
        this.type = type;
        this.behaivor = Boolean;
        this.coins = 300;
        this.houses = 0;
        this.dice = null;
        this.elminado = false;
        this.casaQueEsta = 0;
        this.rodouTabuleiro = 0;
    }
    clear(){
        this.behaivor = Boolean;
        this.coins = 300;
        this.houses = 0;
        this.dice = null;
        this.elminado = false;
        this.casaQueEsta = 0;
        this.rodouTabuleiro = 0;
    }
}
module.exports = Players;



