const fs = require('fs');


const data = fs.readFileSync('../inputs/d8.txt').toString()
const list = data.split(/\r?\n/)
const testList = [
    '30373',
    '25512',
    '65332',
    '33549',
    '35390'
]



function checkAbove(arr, arrI, eleI, val, count){
    if(arrI == 0){
        return count
    }

    const newArrI = arrI - 1

    if( val > arr[newArrI][eleI] && arrI > 0){
        count = count + 1
        return checkAbove(arr, newArrI, eleI, val, count)
    } else {
        return count = count + 1
    }
}

function checkBelow(arr, arrI, eleI, val,count){    

    const nextArrI = arrI + 1

    if(nextArrI == arr.length){
        return count
    }

    if( val > arr[nextArrI][eleI] && nextArrI <= arr.length ){
        count = count + 1
        return checkBelow(arr, nextArrI, eleI, val,count)
    } else {
        return count = count + 1
    }
}

function checkLeft(str, eleI, val,count) {
    const nextEle = eleI - 1
    if(eleI == 0){return count}
    
    if(val > str[nextEle]) {
        count = count + 1
        return checkLeft(str, nextEle, val, count)
    } else {
        return count ++
    }
}

function checkRight(str, eleI, val,count) {
    const nextEle = eleI + 1
    if(nextEle == str.length){return count}
    
    
    if(val > str[nextEle]) {
        count = count + 1
        return checkRight(str, nextEle, val, count)
    } else {
        return count = count + 1
    }
}

function treeVision(arr) {
    let runningProd = []
    arr.forEach((e,i)=> {
        let j = 0
            while(j < e.length){
                let above = checkAbove(arr, i, j, e[j],0)
                let below = checkBelow(arr,i,j,e[j],0)
                let left = checkLeft(e,j, e[j],0) 
                let right = checkRight(e,j,e[j],0)

                let prod = above * below * left * right
                runningProd.push(prod)
                
                j++
            }
    })

    console.log('count', runningProd.sort((a,b) => {return b - a}));
}

treeVision(list)