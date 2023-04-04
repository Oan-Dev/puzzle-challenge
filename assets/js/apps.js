// retrive the datas from the DOM

const data = document.getElementById("statementData").innerHTML;
console.log(data);

const tableData = [... data];
console.log(tableData);

// const letterArray = tableData.filter(function letter() {
//     if (String) {
//         return value;
//     }
// });

// console.log(letterArray);