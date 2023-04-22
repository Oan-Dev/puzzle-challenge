
/** Exhibition of  coding */

const ExhibitingOfCoding = {
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

// const exhibitedCodeArray = [
//         retrievingData,
//         deepDataCopy,
//         mappingAndFiltering, 
//         numberConvertedInString,
//         comparatingDataWithNumberArray,
//         alphabetArrayAndComparaingWithStringArray,
//         splitingForRunningModulo,
//         applyingModuloForNumberNotUnity,
//         scalableArray,
//         reassemblyingArrays,
//         newString,
//         websiteCompleted
// ]

'____'

const codeContent = Object.values(ExhibitingOfCoding);

console.log(codeContent);


// GETTING EACH ID FROM EACH SECTION


// const sectionTag = document.getElementsByTagName('section');

// const idSectionTag = sectionTag.forEach(element => { 

//         const elementID = element.id ;
//         return elementID
    
// });

// INSERT DYNAMICALLY ALL THE CODE IN CodeTag


// for(let i =0; i < exhibitedCodeArray.length; i++) {
//         // let section = document.querySelectorAll('section')

//         let preCode = document.getElementsByTagName('code');
//         // if()
//         preCode.innerHTML(exhibitedCodeArray[i])
// }

'_____'

// function filterSection() {
//     var elements = document.getElementsByTagName('section');

//     for (var i = 0; i < elements.length; i++) {

//         const el = elements[i].id;

//         console.log(el); 
//         //  get div id of divs with data-title !=(not equal) filterItem
//         // make display:none of matching divs
//     }
// }

// filterSection()


'_____'

// function filterSection() {
//     var elements = document.getElementsByTagName('section');

//     for (let i = 0; i < elements.length; i++) {

//         let el = elements[i].id;
//           el.map(function(){
//             return this.id;
//         }).get()
//         // console.log(el); 

// }
// }

// filterSection()


