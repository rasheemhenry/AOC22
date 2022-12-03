const fs = require('fs');

fs.readFile('../inputs/12-2-22-input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
//   console.log('txt file', data)

// A Rock     X     1 
// B Paper    Y     2
// C Scissors Z     3

// L 0
// T 3
// W 6

// =>
// X Lose
// Y Draw
// Z Win


  let games = data.split(/\r?\n/)
  let listOfOut = []

  const key = {
    'A': 1,
    'B': 2,
    'C': 3,
    'X': 1,
    'Y': 2,
    'Z': 3
  }

  const oppKey = {
    'Rock': 1,
    'Paper': 2,
    'Scissors': 3
  }

  const tieLetter = {
    'A': 'Rock',
    'B': 'Paper',
    'C': 'Scissors',
    'X': 'Rock',
    'Y': 'Paper',
    'Z': 'Scissors'
  }

  const winRules = {
    'Rock': 'Scissors',
    'Paper': 'Rock',
    'Scissors': 'Paper',
  }

  const loseRules = {
    'Rock': 'Paper',
    'Paper': 'Scissors',
    'Scissors': 'Rock',
  }

  const drawRules = {
    'Rock': 'Rock',
    'Paper': 'Paper',
    'Scissors': 'Scissors',
  }

  const pickRule = {
    'X': 'loseRules',
    'Y': 'drawRules',
    'Z': 'winRules'
  }

  games.forEach(e => {
    // let userCall = key[e[2]]
    let p1Call = tieLetter[e[0]]    
    let p2Call;

    if(pickRule[e[2]] == 'loseRules'){
        p2Call = oppKey[winRules[p1Call]]
        p2Call = p2Call + 0
    } else if (pickRule[e[2]] == 'drawRules'){
        p2Call = oppKey[drawRules[p1Call]]
        p2Call = p2Call + 3
    } else if (pickRule[e[2]] == 'winRules'){
        p2Call = oppKey[loseRules[p1Call]]
        p2Call = p2Call + 6
    }

    //lose
    // if(loseRules[tieLetter[e[2]]] == tieLetter[e[0]]){
    //     userCall = userCall + 0
    //     //draw
    // } else if (drawRules[tieLetter[e[2]]] == tieLetter[e[0]]){
    //     userCall = userCall + 3
    //     //draw
    // } else if (winRules[tieLetter[e[2]]] == tieLetter[e[0]]){
    //     userCall = userCall + 6
    // }
    //  console.log('calling', userCall)
    listOfOut.push(p2Call)
  })
//   console.log('list of outcomes', listOfOut)
//   console.dir(listOfOut, {maxArrayLength: null})
  //1 = > 10994
//   console.log('total', listOfOut.reduce((a,b) => a+b,0))

  //2 => 12526
  console.log('total', listOfOut.reduce((a,b) => a+b,0))
});
