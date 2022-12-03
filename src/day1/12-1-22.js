const fs = require('fs');

fs.readFile('../inputs/12-1-22-1-input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let entireCalList = data.split(/\r?\n/)
  let res = []
  let runningNum = 0
  entireCalList.forEach((e,i) =>{
    if(e !== ''){
        runningNum = runningNum + Number(e)
    } else {
        res.push(runningNum)
        runningNum = 0
    }
  })
  //#1 Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?
  console.log('final list?', res.sort((a,b) => {return b-a})[0])
  
  //#2 Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?
  let topThree = res.slice(0,3)
  console.log('top3', topThree.reduce((a,b) => a+b,0))
});
