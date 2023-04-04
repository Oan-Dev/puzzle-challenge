// retrive the datas from the DOM

const data = document.getElementById("statementData").innerHTML;
console.log(data);

const tableData = [... data];
console.log(tableData);
