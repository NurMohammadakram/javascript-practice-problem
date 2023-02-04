const numberArray = [2, 42, 0, 472, 0, 8, 8, -3, 73, 3, 13, -77]

let positiveNumber = [];
for(number of numberArray) {
    if (number > 0) {
        positiveNumber.push(number)
    }
    else if ( number === 0) {
        continue;
    }
    else {
        break;
    }
}

console.log(positiveNumber);