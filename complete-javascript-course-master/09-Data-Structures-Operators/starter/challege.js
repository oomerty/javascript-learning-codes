'use strict';

/*
Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).

Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
*/

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
    ],
    [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// CHALLENGE: 1
/*
// 1
const players1 = [...game.players[0]];
const players2 = [...game.players[1]];

// 2
// const gk1 = players1[0];
// const fieldPlayers1 = [...players1];
// fieldPlayers1.shift(0);
const [gk1, fieldPlayers1] = [...players1]; //Better Solution

// const gk2 = players2[0];
// const fieldPlayers2 = [...players2];
// fieldPlayers2.shift(0);
const [gk2, fieldPlayers2] = [...players2]; //Better Solution

//3
const allPlayers = [...players1, ...players2];

//4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

//5
// const team1 = game.odds.team1; //1.33
// const team2 = game.odds.team2; //6.5
// const draw = game.odds.x; //3.25
const {
    odds: {team1, x: draw, team2},
} = game; //Better Solution

//6
function printGoals (...goalers) {
    for(let i = 0; i < goalers.length; i++) {
        console.log(goalers [i]);
    }
    console.log(`Horay! ${goalers .length} goals were scored this game.`);
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

//7
console.log(team1 < team2 && "Team 1 wins" || "Team 2 wins");*/

// CHALLENGE: 2
/*// 1
for (let [goalNmbr, scoredBy] of Object.entries(game.scored)) {
    console.log(`Goal ${Number(goalNmbr)+1}: ${scoredBy}`);
}

// 2
let oddAvg = 0;
for (let [teamName, oddRatio] of Object.entries(game.odds)) {
    oddAvg += oddRatio;
}
oddAvg = oddAvg / Object.entries(game.odds).length
console.log(oddAvg.toFixed(2));

// 3
for (let [team, oddRatio] of Object.entries(game.odds)) {
    console.log(`Odd of ${game[team] ? `victory ` + game[team] : `draw`}: ${oddRatio}`);
}

// 4
let scorers = {
}
for (let [goalNmbr, scoredBy] of Object.entries(game.scored)) {
    let playerGoal = 1;
    scorers[scoredBy] = scorers[scoredBy] ? playerGoal + 1 : 1;
}
console.log(scorers);*/

// CHALLENGE: 3
/*const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🟡 Yellow card'],
    [69, '🟥 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🟡 Yellow card'],
]);

// 1
// let eventsTemp = new Set();
// for (const [k, v] of gameEvents) {
//     eventsTemp.add(v);
// }
// let event = [...eventsTemp];
let event = [...new Set(gameEvents.values())]; //Better Solution
console.log(event);

// 2
gameEvents.delete(64);

// 3
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

// 4
for (const [min, event] of gameEvents) {
    console.log(`[${min <= 45 ? `FIRST` : `SECOND`} HALF] ${min}: ${event}`);
}*/

// CHALLENGE: 4
