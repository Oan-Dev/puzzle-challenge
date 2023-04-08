
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

//deep copy from datatable for terminating number
const stringArray = [...dataTable].filter(element => element !== numberValueTable);
console.log(stringArray, typeof element);

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

