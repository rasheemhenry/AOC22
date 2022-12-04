const fs = require('fs');

fs.readFile('../inputs/d4.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const list = data.split(/\r?\n/)
    let fullyCovered = 0

    list.forEach(e => {
        let splitPairs = e.split(',')
        let elf1 = splitPairs[0].split('-')
        let elf2 = splitPairs[1].split('-')

        if(parseInt(elf1[0]) <= parseInt(elf2[0]) && parseInt(elf1[1]) >= parseInt(elf2[1])){
            fullyCovered ++
        } else if (parseInt(elf2[0]) <= parseInt(elf1[0]) && parseInt(elf2[1]) >= parseInt(elf1[1])){
            fullyCovered ++
        }
    })
    console.log('fully covered', fullyCovered);
});
