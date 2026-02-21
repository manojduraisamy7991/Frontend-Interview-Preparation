// find-target-sum-index
// brute force solution 1
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
    const input = [2,7,11,15,5,4]
    const target = 9

function getArraySumIndex (arr,target ){
    let index = []
    
    for(let i=0;i< arr.length;i++){
        for(let j = i+1;j<arr.length;j++){
            const sum = arr[i]+  arr[j]
            if(sum === target){
              index.push([i, j])  
            }

        }
    }
    console.log(index)
}
getArraySumIndex(input, target)