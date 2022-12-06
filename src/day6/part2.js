const fs = require('fs');


const data = fs.readFileSync('../inputs/d6.txt').toString()
const list = data.split(/\r?\n/)

// console.log(('data', list))

const checkIfTwins = (arr) => arr.length !== new Set(arr).size

function popAndLock(arr){
    let currentMarker = []
    let trackPos = []
    testArr = ['mjqjpqmgbljsphdztnvjfqwrcgsmlb']

    arr[0].split('').forEach((e,i) => {
        if(currentMarker.length < 14) {
            currentMarker.push(e)
            trackPos.push(e)
        } else if(checkIfTwins(currentMarker) && currentMarker.length == 14){
            currentMarker.shift()
            currentMarker.push(e)
            trackPos.push(e)
        } 
    })
    console.log('finalMark', currentMarker);
    console.log('trackpost', trackPos.length);
}

popAndLock(list)