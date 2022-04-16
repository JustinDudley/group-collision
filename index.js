const array676 = [...Array(676).keys()];

const array0_29 = array676.slice(0, 30);
const array30_59 = array676.slice(30, 60);
const array60_89 = array676.slice(60, 90);
const array90_119 = array676.slice(90, 120);
const array120_149 = array676.slice(120, 150);

// console.log(array0_29);
// console.log(array30_59);
// console.log(array60_89);
// console.log(array90_119);
// console.log(array120_149);

// Generates random integer, includes min and max
const getRandInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

let goodCount = 0;
let badCount = 0;

for (var i = 0; i < 10000; i++) {
    const starterArr = [5, 5, 5, 5];
    const fourTools = starterArr.map((el) => getRandInt(0, 675));

    const arrayWords = fourTools.map((el) => {
        if (array0_29.includes(el)) {
            return 'zero';
        } else if (array30_59.includes(el)) {
            return 'thirty';
        } else if (array60_89.includes(el)) {
            return 'sixty';
        } else if (array90_119.includes(el)) {
            return 'ninety';
        } else if (array120_149.includes(el)) {
            return 'onetwenty';
        } else return el;
    });

    if (arrayWords.length == [...new Set(arrayWords)].length) {
        // console.log('same, we are good');
        goodCount += 1;
    } else {
        // console.log('BAD dup');
        badCount += 1;
    }
}

console.log(badCount);
console.log(goodCount);
console.log(badCount / goodCount);
