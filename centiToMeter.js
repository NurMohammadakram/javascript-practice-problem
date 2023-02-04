function centimeterTometer (input) {
    const meter = input / 100;
    console.log("Input centimeter: ", input, "cm");
    return meter;
};

const meter = centimeterTometer(100);
console.log('Result: ',meter, "meter");