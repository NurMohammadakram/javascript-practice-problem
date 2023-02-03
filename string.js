/* let stringIteration = 'aalkke';

console.log(stringIteration.length);
// console.log(stringIteration.toUpperCase())
// console.log(stringIteration.toLowerCase());
console.log(stringIteration[stringIteration.length - 1]);

const splitString = stringIteration.split('');
console.log(splitString);

let joinString = '';
for(let i = 0; i < splitString.length; i++) {
    // joinString += splitString[i];
    joinString = splitString.join('');
}
console.log(joinString);
stringIteration = 'EAkekLkU' + 'avXc'
// console.log(stringIteration.toLowerCase());
 */


const bigString = 'my name is kasem. I am a developer'
const fullSentence = bigString.split('. ');
console.log(fullSentence);
const wordSplit = bigString.split(' ');
console.log(wordSplit);