const fs = require('fs');


const data = fs.readFileSync('../inputs/d7.txt').toString()
const list = data.split(/\r?\n/)

// actions to track
// cd ,cd /, cd .., # letter ls, dir 
console.log(('data', list))

function traverse(list){
    let dirList = {}
    const numPat = new RegExp(/\d/g)
    let currentDir = ''
    let currentDirList = []
    list.forEach(e => {
        let ls = false
        if(e == '$ cd /'){
            currentDir = '/'
            currentDirList.push(currentDir)
            dirList[currentDir] = {}
        } else if (e.includes('$ cd') && !e.includes('..')){
            currentDir = e.split(' ')[2]
            currentDirList.push(currentDir)

        }else if(e == '$ ls'){
            ls = true
        } else if(e.includes('dir ') && ls){
            dirList[currentDir] = {e:{}}
            //can cause issue
        } else if(numPat.test(e)){
            dirList[currentDir]
        }
    })

}