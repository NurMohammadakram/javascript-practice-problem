function centimeterToMeter (input) {
    const meter = input / 100;
    console.log("Input centimeter: ", input, "cm");
    return meter;
};

const meter = centimeterToMeter(100);
console.log('Result: ',meter, "meter");