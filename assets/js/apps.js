
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
const reg = new RegExp('^[0-9]+$');


// function for checking if array element is a number and return boolean
const isNumber = function isNumber(n){
    return Number(n)=== n;
}

// console.log("is Number's array elements of numberValueTable : ",isNumber(numberValueTable))
// console.log("is Number's array elements of dataTable : ",isNumber(dataTable))

numberValueTable.forEach( element => console.log(element, typeof element));


/** 
TEST for converting number typed from string to number type and
 separating the real number and real string 

/

*/  

//Separating Number and String


const stringArray = [];
const numberArray = [];

const typedArray = parseInt([...dataTable])

// typedArray.map(((element) => typeof element === 'string'))

// console.log(typedArray);


const numArr = dataTable.filter(Number).toString()
console.log(numArr);
for (i = 0; i < dataTable.length ; i++) {
    if (dataTable !== match(reg)) {
        stringArray.push()
    }
}
console.log(stringArray);

// const newArray = function filterArray(){
//     return dataTable.filter((element) => typeof element === 'string')
// }

// console.log(newArray);

// console.log(parseInt(dataTable));

// dataTable.forEach(element => {
//     if(typeof(element !== typeof(parseInt(dataTable)))) {
//         stringArray.push(element);
//     }
//     if(typeof(element === typeof(parseInt(dataTable)))) {
//         numberArray.push(element);
//     }
// });

// console.log(stringArray);
// console.log(numberArray);

// console.log(reg.test(stringArray));
// console.log(reg.test(numberValueTable));


// retrieve only letters without numbers

// const stringLetter = stringArray.filter()




// stringArray.forEach(item => (item) => {
//     const stringLetter =  stringArray.map((item.typeof(String) !== numberValueTable));
//     return console.log(stringLetter);

// } );


// console.log(stringArray);



// const letterValueTable = dataTable.map((element) => { 

//     if(element != numberValueTable) {
        
//         element.slice(element => {
//             return element
//         })
//         return 
//     }
// })
// console.log(letterValueTable);

