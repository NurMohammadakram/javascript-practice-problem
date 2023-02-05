function isLeapYear(year) {
    let result = false;
    if ((year % 400 === 0 ) || (year % 4 === 0 && year % 100 !== 0)) {
        return result = true;
    }
    return result;
}

const myYear = isLeapYear(2024);
console.log(myYear);