const fs = require('fs');


const data1 = fs.readFileSync('../inputs/d5-1.txt').toString()
const list1 = data1.split(/\r?\n/)

const data2 = fs.readFileSync('../inputs/d5-2.txt').toString()
const list2 = data2.split(/\r?\n/)


console.log('data', list1)

function organizeCrates(cratesArr){
    const re = new RegExp("[A-Za-z]")
    let crateObj = {}

    cratesArr.forEach(e => {

        
        e.split('').forEach((x,j) => {
            
            if(re.test(x) && crateObj[j]){
                
                crateObj[j] = crateObj[j] + x
            } else if(re.test(x)){
                crateObj[j] = x
            }
        })
    })

    for(const prop in crateObj){
        crateObj[prop] = crateObj[prop].split('')
    }
    console.log('orgs', crateObj);
    return crateObj
}


function justMoves(list){
    let numRe = new RegExp('\d')
    let nList = []

    list.forEach(e => {
        let track = []
        e.split(' ').forEach(x => {
            if(parseInt(x)){
                track.push(parseInt(x))
            }
        })
        nList.push(track)
    })
    return nList
}

function moveCrates(moveList){
    //amount - from - to
    let objOfC =  organizeCrates(list1)
    let list = justMoves(moveList)
    let testList = [
        [ 1, 3, 5 ],  [ 2, 2, 8 ],  [ 4, 1, 3 ],  [ 2, 1, 4 ],  [ 1, 7, 1 ],
        [ 2, 9, 7 ],  [ 4, 5, 9 ]]

    let key = {
        1: '1',
        2: '5',
        3 : '9',
        4: '13',
        5: '17',
        6: '21',
        7: '25',
        8: '29',
        9: '33'
    }
    list.forEach((e,i) => {
        let boxesToMove = objOfC[key[e[1]]].slice(0,e[0])

        objOfC[key[e[1]]].splice(0,e[0])
        
        objOfC[key[e[2]]].splice(0,0, ...boxesToMove)

    })
    console.log('final obj', objOfC);
}

moveCrates(list2)