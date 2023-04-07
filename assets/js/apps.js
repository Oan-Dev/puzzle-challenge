// retrieve the datas from the DOM and capitalize them.

const data = document.getElementById("statementData").innerHTML.toUpperCase();
console.log(data);


const tableData = [... data];
console.log(tableData);

tableData.forEach( element => console.log(element, typeof element));

// const isNumberType = tableData.every( (element) => {
//     return element  === typeof(Number);
// });

// console.log(isNumberType);

const tableValue = tableData.forEach( (element) => {
    if(typeof(element.valueOf(element)) == typeof(Number)) {
        return Number;
    }
});

console.log(tableValue);

// tableValue = tableData.forEach( element = function (element) {
//     element.number([...element])
//     if( element != number(element)) {
//         console.log(element, typeof element); 
//     }

// })



// const str = tableData.forEach(element => function(value) {
//     if (value != number) {
//         return value;
//     }
// });

// console.log(str);

// const sortingData = tableData.sort();

// console.log(sortingData);

