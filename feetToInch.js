function feetToInch (feet) {
    const inch =  feet * 12;
    const result = inch.toFixed(2)
    return parseFloat(result);
}
const result = feetToInch(5.35);
console.log(result);