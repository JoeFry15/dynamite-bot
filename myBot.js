class Bot {
    makeMove(gamestate) {


        const lastRound = gamestate.rounds[gamestate.rounds.length - 1];

        const p1DCount = gamestate.rounds.reduce((a, b) => b.p1 === 'D' ? a + 1 : a, 0);


        if (gamestate.rounds.length > 1 && gamestate.rounds[gamestate.rounds.length - 1].p2 === 'D' && gamestate.rounds[gamestate.rounds.length - 2].p2 === 'D') {
            return 'W';
        }


        else if ((p1DCount < 100) && lastRound && (lastRound.p1 === lastRound.p2)) {
            return 'D';
        }

        else if ((p1DCount < 100) && (gamestate.rounds.length > 1000)) {
            let randomIndex = Math.floor(4 * Math.random());
            return ['R', 'P', 'S', 'D'][randomIndex];
        }

        else {
            let randomIndex = Math.floor(3 * Math.random());
            return ['R', 'P', 'S'][randomIndex];
        }
    }
}

module.exports = new Bot();