
/** Exhibition of  coding */


// Section id 1
const retrievingData = 'document.getElementById("data-localisation-id").innerHTML.toUpperCase()';

// Section id 2
const deepDataCopy = '[... data]';

// Section id 3
const mappingAndFiltering = 'data.map(element => Number(element)).filter(Number)';

// Section id 4
const numberConvertedInString = `const numberArray = [];

for (i = 0; i < 10; i++) {
    numberArray.push(i)
}

for (i = 0; i < 10; i++) {
    const numStr = numberArray[i].toString();
    numberArray.push(numStr)
}`;

// Section Id 5
const comparatingDataWithNumberArray = 'const stringArray = data.filter(x => !numberArray.includes(x)).sort()';

// section Id 6
const alphabetArrayAndComparaingWithStringArray = `var alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split('');
var alphabetPosition = () => stringArray.map(x => alphabet.indexOf(x) + 1);
const alphaPosition = alphabetPosition(stringArray);`;

// Section id 7

const splitingForRunningModulo = `alphaPosition.filter((element) => { return element > 9; });

alphaPosition.filter((element) => { return element < 10; });`;

// Section Id 8
const applyingModuloForNumberNotUnity = 'setModulable.map( element => element % 10 )'

const scalableArray = `existingUnitiesArray.filter(element => {
    if(element > 6) {
        return element;
    }
    
})
.map(element => element += 3)
.map(element => element %= 10);`;

// section Id 9

const reassemblyingArrays = `existingUnities.filter(
    element => {
        if(element < 7 ) {
            return element;
        }
        
})

.concat(secondaryArrays, firstArray);`;

// Section id 10

const newString = `const dataSize = data.length

const promo = newArray.join('').concat(dataSize);`

// Section id 11

const websiteCompleted = `const promoCode = 'https://formation.yoandev.co/?coupon=' + promo;`

// Creating an array from all code for exhibiting

const exhibitedCodeArray = [
        retrievingData,
        deepDataCopy,
        mappingAndFiltering, 
        numberConvertedInString,
        comparatingDataWithNumberArray,
        alphabetArrayAndComparaingWithStringArray,
        splitingForRunningModulo,
        applyingModuloForNumberNotUnity,
        scalableArray,
        reassemblyingArrays,
        newString,
        websiteCompleted
    ]





