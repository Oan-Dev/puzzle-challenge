
/** Exhibition of  coding */

const exhibitingOfCoding = {
// Section id 1
 'retrievingData' : 
 `document
 .getElementById("data-
 localisation-id").
 innerHTML.toUpperCase()`,

// Section id 2
 'deepDataCopy' :  '[... data]',

// Section id 3
 'mappingAndFiltering' :
`data.map(element => 
Number(element))
.filter(Number)`,

// Section id 4
'numberConvertedInString' :            
`const numberArray = [];

for (i = 0; i < 10; i++) 
{ numberArray.push(i) }

for (i = 0; i < 10; i++) 
{const numStr = 
numberArray[i]toString();
numberArray.push(numStr)}`,

// Section Id 5
 'comparatingDataWithNumberArray' :     
`const stringArray = data
 .filter(x =>!numberArray
    .includes(x)).sort()`,

// section Id 6
 'alphabetArrayAndComparaingWithStringArray' : 
  `var alphabet = 
"abcdefghijklm
nopqrstuvwxyz".
toUpperCase().split('');

var alphabetPosition = 
() => stringArray
.map(x => alphabet
  .indexOf(x) + 1);

const alphaPosition = 
alphabetPosition(
    stringArray);`,

// Section id 7

 'splitingForRunningModulo' :  
 `alphaPosition
 .filter((element) => 
 { return element>9;});

  alphaPosition
  .filter((element) => 
   return element<10;});`,

// Section Id 8
 'applyingModuloForNumberNotUnity' :    
` setModulable
.map( element => 
    element % 10 )`,

 'scalableArray' : 
`existingUnitiesArray
.filter(element =>
{
if(element > 6) 
{
 return element;
}}
.map(element => 
    element += 3)
.map(element => 
    element %= 10);`,

// section Id 9

 'reassemblyingArrays' : 
 
`existingUnities
.filter( element => 
{if(element < 7)
{return element;}})
.concat(secondaryArrays, 
    firstArray);`,

// Section id 10

 'newString' :  
 `const dataSize = 
 data.length

  const promo = 
  newArray.join('')
  .concat(dataSize);`,

// Section id 11

 'websiteCompleted' :    
 `const promoCode =
 'https://formation
 .yoandev.co/?coupon=' 
 + promo;`
}


// Creating an array from all code for exhibiting


'____'


const objK = Object.entries(exhibitingOfCoding).map(([key]) => `${key}`)
// const objValue = Object.entries(exhibitingOfCoding).map(([key, value]) => ` ${value}`)

const objValue = Object.values(exhibitingOfCoding);

'___________'

const sections = document.querySelectorAll('section');
const preTags = document.querySelectorAll('pre');
const codeTags = document.querySelectorAll('code');
const preTag = document.querySelector('pre');
const codeTag = document.querySelector('code');



'---------'
/**ADDING CLASS TO BOTH ELEMENTS */

document.querySelectorAll('code').forEach(el=>el.classList.add('code'));
document.querySelectorAll('pre').forEach(el=>el.classList.add('pre'));

'---'
/** FOR HAVING THE FIRST ELEMENT WITH THE 'pre' CLASS */
const firstClassPre = document.getElementsByClassName('pre')[0];
const removingFirstPre = firstClassPre.remove()


'---------'
/** RETRIEVING 'CODE' AND 'PRE' CLASS */
const preClass = document.getElementsByClassName('pre');
const codeClass = document.getElementsByClassName('code');

'--------'
/** RETRIEVING OBJECT KEY AND CONTENT */

const objKeys = Object.keys(exhibitingOfCoding);
const objCodeContent = Object.values(exhibitingOfCoding);


'_________'

function update(){
    let arr = objValue;
    let codeClass = document.querySelectorAll('[class^=code]')
    codeClass.forEach((e,i)=>{
      e.innerHTML = arr[i]
    })
  
  }

  const AddContent = update();

'_________'

preTag.remove(preTag.getElementsByTagName('pre')[0])

'________'


