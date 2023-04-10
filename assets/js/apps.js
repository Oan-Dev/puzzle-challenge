
// retrieve the datas from the DOM and capitalize them.
const data = document.getElementById("statementData").innerHTML.toUpperCase();
console.log(data);

// Deep copy in new array
const dataTable = [... data];
console.log(dataTable);

// retrieve all elements and its types
dataTable.forEach( element => console.log(element, typeof element));

// retrieve only numbers converted from string to number type
const numberValueTable = dataTable.map(element => Number(element)).filter(Number);
console.log(numberValueTable, typeof(numberValueTable.values));

// adding number regex for checking number in number type ?
numberValueTable.forEach( element => console.log(element, typeof element));


/** 
TEST for converting number typed from string to number type and
 separating the real number and real string 

/

*/  

//Separating Number and String

/**
creating a new array with number typed string for comparing between 2 arrays
and return only real string

*/

// const stringArray = [];
const numberArray = [];

for (i = 0; i < 10; i++) {
    numberArray.push(i)
}

for (i = 0; i < 10; i++) {
    const numStr = numberArray[i].toString();
    numberArray.push(numStr)
}
console.log('_____');

numberArray.forEach( element => console.log(element, typeof element));

/** 
Comparing 2 arrays and return only strings => the letters 
    then its sorted for determining the position for each letter in alphabet
*/

const stringArray = dataTable.filter(x => !numberArray.includes(x)).sort();

console.log(stringArray);

console.log('_____');
/**  

Searching position of array values in alphabet position

*/

// replacing the string array by it position in alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split('');
var alphabetPosition = () => 
  stringArray.map(x => alphabet.indexOf(x) + 1);
  const alphaPosition = alphabetPosition(stringArray);
  
  console.log(alphaPosition);

  console.log('_____');
/** 

storage only the unities of this alphabet position 


*/


//separating numbers in 2 arrays
const setModulable = alphaPosition.filter((element) => { return element > 9; });

const existingUnities = alphaPosition.filter((element) => { return element < 10; });



console.log(setModulable);
console.log(existingUnities);

console.log('_____');

//applying the modulo operator 
const resultModulo = setModulable.map( element => element % 10 );

console.log(resultModulo);

console.log('_____');

//  for existing unities if the case => first + 3 then modulo 10 if adding > 9

const getModulableAmongExistingUnities = existingUnities.filter(element => {
        if(element > 6) {
            return element;
        }
        
})
.map(element => element += 3)
.map(element => element %= 10);

console.log(getModulableAmongExistingUnities);

console.log('_____');


// reassembling the 2 arrays in one
const modularyResult = existingUnities.filter(
    element => {
        if(element < 7 ) {
            return element;
        }
        
})

.concat(getModulableAmongExistingUnities, resultModulo);

console.log(modularyResult);

console.log('_____');

const dataSize = dataTable.length

console.log(dataSize); // 14

console.log('_____');

/** 
the end of modified string, 
adding total number of beginning string

*/
const promo = modularyResult.join('').concat(dataSize);

console.log('the promocode is',promo);


console.log('_____');
/** 
adding the new string to 

https://formation.yoandev.co/?coupon= 

for returning a link to the new page with the discount

*/

const promoCode = 'https://formation.yoandev.co/?coupon=' + promo;

console.log(promoCode);

console.log('_____');

const selector = document.querySelector('#discount').write(promoCode);

const newA = document.createElement('a')

const promoText = newA.textContent = promoCode;


// document.write()
