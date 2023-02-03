const examNumber = [ 85, 60, 93, 120, 35, 80, 79, 62, 50, 70, 111, 30, 59 ];
let total = 0;
let passedSubject = 0;
let failSubject = 0;
let average = 0;
let wrongInput = 0;

for (let j = 0; j < examNumber.length; j++) {
    if (examNumber[j] >=33 && examNumber[j] <= 100)  {
        total += examNumber[j];
        passedSubject++;
        average = (total / passedSubject).toFixed(2);
    }
    else if (examNumber[j] > 0 && examNumber[j] < 33) {
        failSubject++;
    }
    else {
        wrongInput++;
    }
};

for (let i = 0; i < examNumber.length; i++) {
    if (examNumber[i] >= 80 && examNumber[i] <= 100) {
        console.log("Congratulations. You get A+ grade");
    }
    else if (examNumber[i] >= 70 && examNumber[i] < 80) {
        console.log("Congratulations. You get A grade");
    }
    else if (examNumber[i] >= 60 && examNumber[i] < 70) {
        console.log("Congratulations. You get A- grade");
    }
    else if (examNumber[i] >= 50 && examNumber[i] < 60) {
        console.log("Congratulations. You get B grade");
    }
    else if (examNumber[i] >= 40 && examNumber[i] < 50) {
        console.log("Congratulations. You get C grade");
    }
    else if (examNumber[i] >= 33 && examNumber[i] < 40) {
        console.log("Congratulations. You get D grade");
    }
    else if (examNumber[i] < 33 && examNumber[i] >=0) {
        console.log("You are failtush");
    }
    else {
        console.log('You input a wrong number');
    }
};
console.log('Total subject: ' + examNumber.length);
console.log('Passed subject ' + passedSubject);
console.log('Failed subject ' + failSubject);
console.log('Wrong input ' + wrongInput);
console.log('Total sum of passed and correctly inputed number: ' + parseInt(total));
console.log(parseFloat(average));