
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

/**  

Searching position of array values in alphabet position

*/

// replacing the string array by it position in alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split('');
var alphabetPosition = text => 
  stringArray.map(x => alphabet.indexOf(x) + 1);
console.log(alphabetPosition(stringArray));

/** 

storage only the unities of this alphabet position 


*/