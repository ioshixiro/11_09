// n1
let arr = ["1", "qwerty", "-", " ", 2, "-5", 0, "0i", "#", "array", "i could", "1000"];
let c = 0;

function countArray (number) {
    if (+number > 0) {
        return 1;
    }
    return 0;
}

for (let i = 0; i < arr.length; i++) {
    if (countArray[arr[i]]) {
        c++;
    }
}

console.log("musbat sonlar:", c);

// n2

let index_len = 0;
let b_word = "";

function getLength (word) {
    if (word.length > b_word.length) {
        return 1;
    }
    return 0;
}

for (let i = 1; i < arr.length; i++) {
    if (getLength(arr[i])) {
        b_word = arr[i];
    }
}

console.log(b_word)