const repeat = function (text, times) {
    for(let i = 0; i < times; i++) {
        console.log(text);
    }
}

/* repeat('ajk amr mon valo nai', 39);
repeat('tumi gas khao', 3);
 */

const average = arr => {
    let total = 0;
    for(let i =0; i < arr.length; i++) {
        total += arr[i];
    }
    const averageNum = (total / arr.length).toFixed(2);
    return parseFloat(averageNum);
}

const showAverage = average([2939, 992, 9292, 1299, 882, 20]);;
// console.log(showAverage);

const evenNumbers = arr => {
    let evenArray =[];
    let oddArray = [];
    for (let i =0; i < arr.length; i++) {
        if (arr[i] > 0 && arr[i] % 2 === 0) {
            evenArray.push(arr[i]);
        }
        else {
            oddArray.push(arr[i]);
        }
    }
    return [evenArray, oddArray] ;
}

const showEvenNumbers = evenNumbers([12, 388, 73, 82, 534,72, 64, 884, 263, 473, 85, 33, 84, 930, 48, 94, 323]);
console.log('Even Numbers: ' + showEvenNumbers[0]);

console.log( 'Odd Number: ' + showEvenNumbers[1] );