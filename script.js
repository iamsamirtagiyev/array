// --------------> Part 1 <--------------

const array = [1, 2, 3, 4, 5]

const newArray = array.reverse()

console.log(newArray)

// --------------> Part 2 <--------------

const strArray = ["cat","mouse","panter","chicken"]

strArray.shift()
strArray.unshift("brid")

console.log(strArray)

// --------------> Part 3 <--------------

const array2 = [1,2,3,4,5]

for(let i = 0; i < 5; i++){
    array2.push(array2[i] ** 2)
}

console.log(array2);

// --------------> Part 4 <--------------

const array3 = [1, 2, 3, 4, 5, 6]
const newArray3 = []

for (let i = 0; i < array3.length; i++) {
    if(array3[i] % 2 == 0){
        newArray3.push(array3[i])
    }
}

console.log(newArray3)