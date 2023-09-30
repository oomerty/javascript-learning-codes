'use strict';

/*
Let's continue with our football betting app! Keep using the 'game' variable from
before.

Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")

2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)

3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names

4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
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

// Challenge 1
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

// Challenge 2
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

// Challenge 3
