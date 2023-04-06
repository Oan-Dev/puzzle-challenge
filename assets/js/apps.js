// retrieve the datas from the DOM and capitalize them.

const data = document.getElementById("statementData").innerHTML.toUpperCase();
console.log(data);


const tableData = [... data];
console.log(tableData);

tableData.forEach( element => console.log(element, typeof element));

// tableValue = tableData.



// const str = tableData.forEach(element => function(value) {
//     if (value != number) {
//         return value;
//     }
// });

// console.log(str);

// const sortingData = tableData.sort();

// console.log(sortingData);

