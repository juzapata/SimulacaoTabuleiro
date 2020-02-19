class totalAtt {
    constructor() {
        this.contadorTimeOut = 0;
        this.totalRodadas = 0;
        this.contadorImpulsivo = 0;
        this.contadorExigente = 0;
        this.contadorCauteloso = 0;
        this.contadorAleatorio = 0;
    }
    clear() {

        this.contadorTimeOut = 0;
        this.totalRodadas = 0;
        this.contadorImpulsivo = 0;
        this.contadorExigente = 0;
        this.contadorCauteloso = 0;
        this.contadorAleatorio = 0;
    }
}

module.exports = totalAtt;