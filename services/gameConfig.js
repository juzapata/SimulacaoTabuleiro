const fs = require('fs');


const readGameConfig = fs.readFileSync('gameConfig.txt', 'utf8');

// lendo o documento de entrada - gameConfig
const jsonCasas = readGameConfig.split(/\n|\r\n/).map((data, index) => {
    let values = data.split(' ');
    if (values[1] === '') {
        values.splice(1, 1);
    }
    return obj = {
        numCasa: index + 1,
        compra: parseInt(values[0]),
        aluguel: parseInt(values[1]),
        comprada: false,
        dono: 'sem dono',
        presisaReceber: false,
        qToPrecisaReceber: 0,
        quemPagouAluguel: []
    }
});

module.exports = jsonCasas;
