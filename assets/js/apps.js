/** PART 1 */

// retrieve the datas from the DOM and capitalize them.
const data = document.getElementById("statementData").innerHTML.toUpperCase();

'_____';
/** PART 2 */

// Deep copy in new array
const dataTable = [... data];

/** 
retrieve all elements and its types 
*/

// dataTable.forEach( element => console.log(element, typeof element));

// retrieve only numbers converted from string to number type
const numberValueTable = dataTable.map(element => Number(element)).filter(Number);


// console.log(numberValueTable, typeof(numberValueTable.values));
// numberValueTable.forEach( element => console.log(element, typeof element));

'_____';
/** PART 3 */

/** 
TEST for converting number typed from string to number type and
 separating the real number and real string 

*/  

//Separating Number and String

/**
Creating a new array with number typed string for comparing between 2 arrays
and return only real string

*/

const numberArray = [];

for (i = 0; i < 10; i++) {
    numberArray.push(i)
}

for (i = 0; i < 10; i++) {
    const numStr = numberArray[i].toString();
    numberArray.push(numStr)
}
 '_____';

// numberArray.forEach( element => console.log(element, typeof element));

/** 
Comparing 2 arrays and return only strings => the letters 
    then its sorted for determining the position for each letter in alphabet
*/

const stringArray = dataTable.filter(x => !numberArray.includes(x)).sort();


'_____';

/**  
Searching position of array values in alphabet position
*/

// replacing the string array by it position in alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split('');
var alphabetPosition = () => stringArray.map(x => alphabet.indexOf(x) + 1);
const alphaPosition = alphabetPosition(stringArray);
  

'_____';
/** 

storage only the unities of this alphabet position 


*/

/**

 * PART 4 
    Adding the number '3' then applying the modulo
    on any scalable number > 9  
 */

//separating numbers in 2 arrays
const setModulable = alphaPosition.filter((element) => { return element > 9; });

const existingUnities = alphaPosition.filter((element) => { return element < 10; });



 '_____';
//applying the modulo operator 
const resultModulo = setModulable.map( element => element % 10 );


 '_____';
//  for existing unities if the case => first + 3 then modulo 10 if adding > 9

const getModulableAmongExistingUnities = existingUnities.filter(element => {
        if(element > 6) {
            return element;
        }
        
})
.map(element => element += 3)
.map(element => element %= 10);


'_____';

// reassembling the 2 arrays in one
const modularyResult = existingUnities.filter(
    element => {
        if(element < 7 ) {
            return element;
        }
        
})

.concat(getModulableAmongExistingUnities, resultModulo);


 '_____';

/** 

PART 5
    concat the array size number with the new string 
    for completing the final string  

*/

const dataSize = dataTable.length


'_____';

/** 
the end of modified string, 
adding total number of beginning string

*/
const promo = modularyResult.join('').concat(dataSize);

// console.log('the promocode is',promo);


'_____';


/** 
Part 6 

 adding the new string to 
 https://formation.yoandev.co/?coupon= 
 for returning a link to the new page with the discount
 and insert to the DOM

*/

const promoCode = 'https://formation.yoandev.co/?coupon=' + promo;

const displayingPromo = 'Coupon=' + promo;


'_____';

/** 
Inserting  elemnts to the DOM 

*/

const selector = document.querySelector('#discount');

const newLink = document.createElement('a')

const promoText = newLink.textContent = displayingPromo;


discount.append(newLink);

// adding a [href] setAttribute for redirecting to the link

newLink.setAttribute('href', promoCode);

const displayingDiscount = document.innerHTML = newLink; 

// console.log(newLink);
// document.write()

'__________________________';



