function biggestnum(arr) {
    let biggest;
    for(let i =0; i < arr.length; i++) {
        if (arr[i] > arr[i+1] && arr[i] > arr[i+2]) {
            biggest = arr[i];
            break;
        }
        else if (arr[i+1] > arr[i] && arr[i+1] > arr[i+2]) {
            biggest = arr[i+1];
            break;
        }
        else {
            biggest = arr[i+2];
            break;
        }
    }
    return biggest + ' is the biggest num';
}
const biggestnumber = biggestnum([123, 22, 997]);
console.log(biggestnumber);