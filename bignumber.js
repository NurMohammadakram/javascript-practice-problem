

const number = [ 190, 339, 203 ];
for (let i = 0; i< number.length; i++) {
    // console.log(number[i]);
    if (number[i] > number[i+1] && number[i] > number[i+2]) {
        console.log(number[i] + ' is the biggest number');
        break;
    }
    else if (number[i+1] > number[i] && number[i+1] > number[i+2]) {
        console.log(number[i+1] + ' is the biggest number');
        break;
    }
    else {
        console.log(number[i+2] + ' is the biggest number');
        break;
    }
}


