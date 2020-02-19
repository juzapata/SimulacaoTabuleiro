class gameAttributes {
    constructor() {
        this.numberOfPlayers = 4;
        this.eliminados = [];
    }
    clear(){
        this.numberOfPlayers = 4;
        this.eliminados = []
    }
}

module.exports = gameAttributes;