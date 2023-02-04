function paperRequirements (firstquantity, secondquantity, thirdquantity) {
    const firstBookPaper = 100;
    const secondBookPaper = 200;
    const thirdBookPaper = 300;
    const firstBookTotalPaper = 100 * firstquantity;
    const secondBookTotalPaper = 200 * secondquantity;
    const thirdBookTotalPaper = 300 * thirdquantity;
    const sum = firstBookTotalPaper + secondBookTotalPaper + thirdBookTotalPaper;
    return sum;
};
const totalpaperRequire = paperRequirements(3, 2, 1);
console.log('Total paper require: ',totalpaperRequire, "pages");