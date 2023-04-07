// retrieve the datas from the DOM and capitalize them.

const data = document.getElementById("statementData").innerHTML.toUpperCase();
console.log(data);

// Deep copy in new array
const dataTable = [... data];
console.log(dataTable);

// retrieve all elements and its types
dataTable.forEach( element => console.log(element, typeof element));

// retrieve only numbers converted from string to number type
const numberValueTable = dataTable.map(element => Number(element));

console.log(numberValueTable);

// retrieve only letters without numbers
const letterValueTable = dataTable.map(element => !Number(element))

console.log(letterValueTable);

