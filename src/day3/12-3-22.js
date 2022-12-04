const fs = require('fs');
fs.readFile('../inputs/12-3-22-input.txt', 'utf8', (err, data) => {
    if (err) {
    console.error(err);
    return;
    }
    // console.log('txt file', data)

    // make alpha list array a != A
    // array to hold result 

    // split entry 
    // look at both entries for overlapping letter
    //find number that it reps
    // sum list of numbers in list

    let packList = data.split(/\r?\n/)
    let testPackList2 = ['vJrwpWtwJgWrhcsFMMfFFhFp','jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL','PmmdzqPrVvPwwTWBwg','wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn','ttgJtRGJQctTZtZT','CrZsJsPPZsGzwwsLwLmpwMDw']
    const alph = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let res = []
    let matchLetter = []
    // console.log('pack list', packList)
    let i = 0

    //p2
    while(i + 3 <= packList.length){
        let elf1 = packList[i]
        let elf2 = packList[i+1]
        let elf3 = packList[i+2]
        
        let trackElf1 = []
        elf1.split('').forEach(x => {
            if(elf2.split('').includes(x) && elf3.split('').includes(x) && !trackElf1.includes(x)){
                //can have multi in one half
                trackElf1.push(x)
                matchLetter.push(x)
            }
        })
        i = i + 3
    }
    //p1
    // testPackList2.forEach(e => {
    //     let lenOfE = e.length
    //     //get compartments
    //     let comp1 = e.slice(0, lenOfE/2)
    //     let comp2 = e.slice(lenOfE/2, lenOfE)
    //     let trackComp1 = []

    //     console.log('e',e);
    //     console.log('comp1', comp1);
    //     console.log('comp2', comp2);

    //     //compare compartments
    //     comp1.split('').forEach(x => {
    //         if(comp2.split('').includes(x) && !trackComp1.includes(x)){
    //             //can have multi in one half
    //             trackComp1.push(x)
    //             matchLetter.push(x)
    //         }
    //     })
    // })

    matchLetter.forEach(q => {
        res.push(alph.indexOf(q) + 1)
    })
    //1 => 7446
    console.log('matchres', matchLetter);
    console.log('res', res);
    console.log('total', res.reduce((a,b) => a + b, 0));

    //2 => 2646
    console.log('matchres', matchLetter);
    console.log('res', res);
    console.log('total', res.reduce((a,b) => a + b, 0));
});