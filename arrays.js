// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!

const pushFront = (arr, value) => {
    let new_arr = [value]
    arr.forEach(index_value => {
        new_arr.push(index_value)
    });
    return new_arr
}
// Examples:

// pushFront([5,7,2,3], 8) => [8,5,7,2,3]
// pushFront([99], 7) => [7,99]


// Pop Front
// Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!

const popFront = (arr) => {
    for (let i = 0; i < arr.length-1; i++) {
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i+1] = temp
    }
    let num = arr.pop()
    console.log(arr)
    return num
}

// Examples:
// popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
// popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function


// Insert At
// Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!


// Examples:
const insertAt = (arr,index,value) => {
    arr.push(value)
    for (let i = arr.length - 1; i > index; i--) {
        let temp = arr[i]
        arr[i] =  arr[i-1]
        arr[i-1] = temp
    }
    return arr
}
// insertAt([100,200,5], 2, 311) => [100,200,311,5]
// insertAt([9,33,7], 1, 42) => [9,42,33,7]


// BONUS: Remove At
// Given an array and an index into array, remove and return the array value at that index. Prove the value is removed from the array by printing it. Think of popFront(arr) as equivalent to removeAt(arr,0).

const removeAt = (arr, index) => {
    let new_arr = []
    for (let i = 0; i < arr.length; i++) {
        if (i == index) {
            continue
        }
        new_arr.push(arr[i])
    }
    console.log(new_arr)
    return arr[index]
}
// Examples:
// removeAt([1000,3,204,77], 1) => 3 returned, with [1000,204,77] printed in the function
// removeAt([8,20,55,44,98], 3) => 44 returned, with [8,20,55,98] printed in the function

// BONUS: Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element.

const swapPairs = arr => {
    for (let i = 0; i < arr.length; i+=2) {
        if(!arr[i+1]){break}
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
    }
    return arr
}
// Examples:
// swapPairs([1,2,3,4]) => [2,1,4,3]
// swapPairs(["Brendan",true,42]) => [true,"Brendan",42]

// BONUS: Remove Duplicates
// Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. If you already made the Remove At function, you are welcome to use that! If you solved this using nested loops, for an extra challenge, try to do it without any nested loops!

const removeAt2 = (arr, index) => {
    let new_arr = []
    for (let i = 0; i < arr.length; i++) {
        if (i == index) {
            continue
        }
        new_arr.push(arr[i])
    }
    return new_arr
}

const removeDupes = arr =>{
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == arr[i+1]){
            arr = removeAt2(arr, i)
            i--
        }
        
    }
    return arr
}
// Examples:
// removeDupes([-2,-2,3.14,5,5,10]) => [-2,3.14,5,10]
// removeDupes([9,19,19,19,19,19,29]) => [9,19,29]