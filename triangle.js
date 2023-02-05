function TriangleArea (firstArm, secondArm, thirdArm) {
    // somobahu tribuj
    if ((firstArm === secondArm && secondArm === thirdArm) || (firstArm !== undefined && secondArm === undefined && thirdArm === undefined)) {
        const totalArea = ((Math.sqrt(3)/4) * firstArm * firstArm);
        const result = totalArea.toFixed(2);
        console.log('somobahu tribuj: ' , 'first arm: ',firstArm, 'second arm: ',secondArm, 'third arm',thirdArm)
        return parseFloat(result);
    }

    // bisomobahu tribuj
    else if ((firstArm !== secondArm && secondArm !== thirdArm && thirdArm !== firstArm) && (firstArm !== undefined && secondArm !== undefined && thirdArm !== undefined)) {
        // ordoporisima = s
        const s = (firstArm + secondArm + thirdArm) / 2;
        const totalArea = Math.sqrt(s *(s - firstArm) * (s - secondArm) * (s - thirdArm));
        const result = totalArea.toFixed(2);
        console.log("bisomobahu tribuj: ", 'first arm: ',firstArm, 'second arm: ',secondArm, 'third arm',thirdArm);
        return parseFloat(result);
    }

    // somokoni tribuj
    else if (firstArm !== undefined && secondArm !== undefined && thirdArm === undefined) {
        const totalArea = (0.5 * (firstArm * secondArm));
        const result = totalArea.toFixed(2);
        console.log("somokoni tribuj or any tribuj: ", 'first arm: ',firstArm, 'second arm: ',secondArm, 'third arm',thirdArm)
        return parseFloat(result);
    }
    
    // somodibahu tribuj
    else if ((firstArm === secondArm || firstArm === thirdArm || secondArm === thirdArm) && (thirdArm !== undefined)) {
        let base =  0;
        let equalArm = 0;
        if (firstArm !== secondArm && firstArm !== thirdArm) {
            base = firstArm;
            equalArm = thirdArm;
        }
        else if (firstArm !== secondArm && secondArm !==thirdArm) {
            base = secondArm;
            equalArm = thirdArm;
        }
        else {
            base = thirdArm;
            equalArm = firstArm;
        }
        console.log('somodibahu tribuj: ', 'base: ',base, 'equal arm: ',equalArm)
        const totalArea = (base/ 4 * Math.sqrt((4 * (equalArm)* (equalArm)) - base));
        const result = totalArea.toFixed(2);
        return parseFloat(result);
    }
}



const area = TriangleArea(5, 6, 4);
console.log( area, 'squire meter');

const area2 = TriangleArea(6, 6, 4);
console.log( area2, 'squire meter');

const area3 = TriangleArea(5, 3);
console.log( area3, 'squire meter');

const area4 = TriangleArea(5, 5, 5);
console.log( area4, 'squire meter');

const area5 = TriangleArea(3, 4);
console.log( area5, 'squire meter');

const area6 = TriangleArea(6, 4, 6);
console.log( area6, 'squire meter');

const area7 = TriangleArea(6);
console.log( area7, 'squire meter');

const area8 = TriangleArea(6, 6);
console.log( area8, 'squire meter');