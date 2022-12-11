const fs = require('fs');
const { default: test } = require('node:test');


const data = fs.readFileSync('../inputs/d8.txt').toString()
const list = data.split(/\r?\n/)
const testList = [
    '30373',
    '25512',
    '65332',
    '33549',
    '35390'
]


// console.log(('data', list))

//pass ele above
function checkAbove(arr, arrI, eleI, val){    
    if(arrI == 0){
        // console.log('tree has vision from above');
        return true
    }

    const newArrI = arrI - 1
    // const newPrev = arr[newI]

    if( val > arr[newArrI][eleI] && arrI > 0){
        // console.log(`vision past ${arrI} tree`);
        return checkAbove(arr, newArrI, eleI, val)
    } else {
        // console.log(`can't see past tree ${newArrI + 1}, tree is ${arr[newArrI]}, ${arr[newArrI][eleI]} is blocking`);
        return false
    }
}

function checkBelow(arr, arrI, eleI, val){    

    const nextArrI = arrI + 1

    if(nextArrI == arr.length){
        // console.log('tree has vision from below');
        return true
    }
    // const newPrev = arr[newI]
    // console.log('arr[arrI][eleI]', arr[nextArrI][eleI] );

    if( val > arr[nextArrI][eleI] && nextArrI <= arr.length ){
        // console.log(`vision past ${nextArrI} tree, ${arr[nextArrI]}`);
        return checkBelow(arr, nextArrI, eleI, val)
    } else {
        // console.log(`can't see past tree ${nextArrI}, tree is ${arr[nextArrI]}, ${arr[nextArrI][eleI]} is blocking ${arr[nextArrI]}`);
        return false
    }
}
//checkBelow(array, array index, element index, value)
// checkBelow(testList, 0, 1, 7)
// const testLeft = '3632045'

function checkLeft(str, eleI, val) {
    const nextEle = eleI - 1
    if(eleI == 0){return true}
    
    if(val > str[nextEle]) {
        // console.log(`not blocked by ${str[nextEle]}`);
        return checkLeft(str, nextEle, val)
    } else {
        // console.log(`blocked by ${str[nextEle]}`);
        return false
    }
}
// checkRight(testLeft,1,4)

function checkRight(str, eleI, val) {
    const nextEle = eleI + 1
    if(nextEle == str.length){return true}
    
    // console.log(`str[ele] ${val}, ${str[nextEle]}, ${str.length}`);
    
    if(val > str[nextEle]) {
        // console.log(`not blocked by ${str[nextEle]}`);
        return checkRight(str, nextEle, val)
    } else {
        // console.log(`blocked by ${str[nextEle]}`);
        return false
    }
}
// checkRight(testLeft,0,3)

function treeVision(arr) {
    //need to check row before and after
    let countVisions = 0
    arr.forEach((e,i)=> {
        //skipping first ele
        let j = 0
        if(arr.indexOf(e) == 0 || arr.indexOf(e) == arr.lenth - 1){
            countVisions = countVisions + e.length
        } else {
            while(j < e.length){
                if(checkAbove(arr, i, j, e[j]) || checkBelow(arr,i,j,e[j]) || checkLeft(e,j, e[j]) || checkRight(e,j,e[j])){countVisions ++}
                
                j++
            }
            
        }

    })

    console.log('count', countVisions);

}

treeVision(list)