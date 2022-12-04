const fs = require('fs');

function findRange(beginNum, endNum){
    let list = []
    for (let i = beginNum ; i <= endNum ; i++) {
        list.push(i);
    }
    return list
}

fs.readFile('../inputs/d4.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    // console.log('txt file', data)

    const list = data.split(/\r?\n/)
    let coveredCount = 0

    list.forEach(e => {
        let splitPairs = e.split(',')
        let elf1 = splitPairs[0].split('-')
        let elf2 = splitPairs[1].split('-')
        let iscovering = false

        let elf1range = findRange(parseInt(elf1[0]), parseInt(elf1[1]))
        let elf2range = findRange(parseInt(elf2[0]), parseInt(elf2[1]))

        elf1range.forEach(x => {
            if(elf2range.includes(x)){
                iscovering = true
            }
        })

        if(iscovering){coveredCount ++}
    })
    console.log('covered count', coveredCount);
});
