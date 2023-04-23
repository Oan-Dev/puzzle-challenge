
/** Exhibition of  coding */

const exhibitingOfCoding = {
// Section id 1
 'retrievingData' :                 'document.getElementById("data-localisation-id").innerHTML.toUpperCase()',

// Section id 2
 'deepDataCopy' :                   '[... data]',

// Section id 3
 'mappingAndFiltering' :            'data.map(element => Number(element)).filter(Number)',

// Section id 4
 'numberConvertedInString' :            `const numberArray = [];

                                        for (i = 0; i < 10; i++) {
                                            numberArray.push(i)
                                        }

                                        for (i = 0; i < 10; i++) {
                                            const numStr = numberArray[i].toString();
                                            numberArray.push(numStr)
                                        }`,

// Section Id 5
 'comparatingDataWithNumberArray' :     'const stringArray = data.filter(x => !numberArray.includes(x)).sort()',

// section Id 6
 'alphabetArrayAndComparaingWithStringArray' : 
                                        `var alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split('');
                                        var alphabetPosition = () => stringArray.map(x => alphabet.indexOf(x) + 1);
                                        const alphaPosition = alphabetPosition(stringArray);`,

// Section id 7

 'splitingForRunningModulo' :           `alphaPosition.filter((element) => { return element > 9; });

                                         alphaPosition.filter((element) => { return element < 10; });`,

// Section Id 8
 'applyingModuloForNumberNotUnity' :    'setModulable.map( element => element % 10 )',

 'scalableArray' :                      `existingUnitiesArray.filter(element => {
                                            if(element > 6) {
                                                return element;
                                            }
                                            
                                        })
                                        .map(element => element += 3)
                                        .map(element => element %= 10);`,

// section Id 9

 'reassemblyingArrays' :                `existingUnities.filter(
                                        element => {
                                            if(element < 7 ) {
                                                return element;
                                            }
                                            
                                    })

                                    .concat(secondaryArrays, firstArray);`,

// Section id 10

 'newString' :                      `const dataSize = data.length

                                    const promo = newArray.join('').concat(dataSize);`,

// Section id 11

 'websiteCompleted' :               `const promoCode = 'https://formation.yoandev.co/?coupon=' + promo;`
}


// Creating an array from all code for exhibiting


'____'


const objK = Object.entries(exhibitingOfCoding).map(([key]) => `${key}`)
// const objValue = Object.entries(exhibitingOfCoding).map(([key, value]) => ` ${value}`)

const objValue = Object.values(exhibitingOfCoding);
// console.log(objValue);


// console.log(objK);
// console.log(objValue);


'----'
// for(const [key, value] of Object.entries(exhibitingOfCoding)) {
// }

'___________'

const sections = document.querySelectorAll('section');
const preTags = document.querySelectorAll('pre');
const codeTags = document.querySelectorAll('code');


console.log(sections);
console.log(typeof(sections));
// console.log(preTags);
// console.log(codeTags);


