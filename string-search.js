const desiSong = 'Rate chander alo Jhore bondu Tomar o gore';
const stringToCheck = 'Chander';

// const stringChecker = desiSong.toLowerCase().includes('Rate'.toLowerCase());
// const stringChecker = desiSong.toLowerCase().includes(stringToCheck.toLowerCase());
// console.log(stringChecker);

// console.log(desiSong.startsWith('rate'));
// console.log(desiSong.endsWith('gore'));

const stringArray = desiSong.split(' ');
stringArray.push('. ');
const joinString = stringArray.join(' ');
// const trimString = joinString.trim();
const secondString = 'hay alo j jhore na bondu ami akta andare';
const concatedsecondString = secondString.concat('.');
const concatString = joinString.concat(concatedsecondString);
console.log(concatString);

// console.log(desiSong);

/* 
const getCheckString = (mainString, stringToCheck) => {
    const lowerCaseString = mainString.toLowerCase();
    const lowerCaseStringToCheck = stringToCheck.toLowerCase();
    return lowerCaseString.includes(lowerCaseStringToCheck);
}

console.log(getCheckString(desiSong, stringToCheck)); 
*/

