/** PART 1 */

// retrieve the datas from the DOM and capitalize them.
const data = document.getElementById("statementData").innerHTML.toUpperCase();

const dash1 = '_____';
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

const dash2 = '_____';
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
const dash3 = '_____';

// numberArray.forEach( element => console.log(element, typeof element));

/** 
Comparing 2 arrays and return only strings => the letters 
    then its sorted for determining the position for each letter in alphabet
*/

const stringArray = dataTable.filter(x => !numberArray.includes(x)).sort();


const dash4 = '_____';

/**  
Searching position of array values in alphabet position
*/

// replacing the string array by it position in alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split('');
var alphabetPosition = () => stringArray.map(x => alphabet.indexOf(x) + 1);
const alphaPosition = alphabetPosition(stringArray);
  

  const dash5 = '_____';
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



const dash6 = '_____';
//applying the modulo operator 
const resultModulo = setModulable.map( element => element % 10 );


const dash7 = '_____';
//  for existing unities if the case => first + 3 then modulo 10 if adding > 9

const getModulableAmongExistingUnities = existingUnities.filter(element => {
        if(element > 6) {
            return element;
        }
        
})
.map(element => element += 3)
.map(element => element %= 10);


const dash8 = '_____';

// reassembling the 2 arrays in one
const modularyResult = existingUnities.filter(
    element => {
        if(element < 7 ) {
            return element;
        }
        
})

.concat(getModulableAmongExistingUnities, resultModulo);


const dash9 = '_____';

/** 

PART 5
    concat the array size number with the new string 
    for completing the final string  

*/

const dataSize = dataTable.length


const dash10 = '_____';

/** 
the end of modified string, 
adding total number of beginning string

*/
const promo = modularyResult.join('').concat(dataSize);

// console.log('the promocode is',promo);


const dash11 = '_____';


/** 
Part 6 

 adding the new string to 
 https://formation.yoandev.co/?coupon= 
 for returning a link to the new page with the discount
 and insert to the DOM

*/

const promoCode = 'https://formation.yoandev.co/?coupon=' + promo;


const dash12 = '_____';

/** 
Inserting  elemnts to the DOM 

*/

const selector = document.querySelector('#discount');

const newLink = document.createElement('a')

const promoText = newLink.textContent = promoCode;


discount.append(newLink);

// adding a [href] setAttribute for redirecting to the link

newLink.setAttribute('href', promoCode);

const displayingDiscount = document.innerHTML = newLink; 

// console.log(newLink);
// document.write()

const dash13 = '_____';



/** 
    PART 7 EXHIBITION OF WORKING

 */

 //  CREATING THE TEXT ELEMENTS FOR THE STORYTELLING

const preambule = `Pour réaliser ce casse-tête, j'ai procédé comme ceci :  `;

const importationUppercaseProcess = `J'ai importé la chaine de caractère à traiter dans un tableau.
Puis comme toute cette dernière se devait être traité tout en majuscule,
alors j'opté pour cette option avant toute dissociation des lettres et des chiffre `;


const deeepCopyProcess = `Afin de discerner les lettres des chiffres, 
tout d'abord j'ai fait une copie profonde. ` ;

const mapFilterProcess = `Ensuite, j'ai créé mappé et filtré 
ce tableau pour n'avoir que les nombres typé NUMBER.`;


const typingNumberToStringProcess = `Puis chacun des elements typé NUMBER est pushé dans un nouveau 
tableau converti en STRING.`;

const onlyLetterProcess = `pour avoir seulement les lettres sans les nombres, 
j'ai opté pour une méthode filter en comparant 
le tableau des nombres typés en STRING avec le tableau initial de l'ensemble des données. 
Puis j'ai appliqué la méthode SORT pour les trier dans l'ordre alphabletique.`;

const alphabetPositionProcess = `Pour remplacer les lettres par leur position dans l'alphabet, 
Il était tout d'abord de créer un nouveau tableau de tout l'alphabet. 
Ensuite de le mapé dans une fonction en recherchant l'index asscocié. 
Puis par cette fonction matchant la position avec chaque lettre du tableau des lettres. `;


const TwoArraysforBigAndSmallNumbersProcess = `Afin d'effectuer le MODULO pour les nombres > 9, 
il fallait scinder le tableau des nombres des positions, 
donc je devait appliquer un filtrage avec une condition `;

const moduloForbigNumberArrayProcess = `Afin d'effectuer l'opération MODULO, j'ai opté pour la méthode MAP`;

const moduloForSmallScalableNumberProcess = `Pour tout nombre scalable vers les Grands nombres en y ajoutant le nombre 3, 
j'ai d'abord utiliser la méthode FILTER avec une condition verifiant la scalabilité 
pour y appliquer un double mapping appliquant l'addition et modulo`;

const concatenationArraysProcess = `Pour avoir l'ensemble de la nouvelle chaine de caractère, il était nécessaire, tout d'abord, 
de filtrer les petits nombres scalables des non-scalable. 
puis appliquer la méthode CONCAT pour associer tous les nombres des tableaux`;

const addingSizeInitialArrayProcess = `Pour completer la nouvelle chaine de caractère, j'ai, tout d'abord recherché la taille du premier tableau. 
Puis, j'ai appliquer la méthode JOIN pour passer d'un tableau vers une simple chaine de caractère.`; 


const finalisationProcess = `Pour finaliser l'objectif, J'ai associé la nouvelle chaine de caractère avec le lien par une concaténation`;

const dash14 = '_____';

/**
INSERT ALL PROCESS TO THE DOM 

*/


const processClass = document.querySelector('.story');

processClass.setAttribute('id', 'story');

const processId = processClass.id

const getProcessId = document.querySelector('#story')

// console.log(getProcessId);

const dash15= '_____';

/** CREATING ELEMENTS AND SETTING ATTRIBUTE ID */

const section = document.createElement('section');

for (i = 0 ; i < section.length; i++) {
    document.setAttribute('id', 'processing-'  + i) ;
    section.id;
}

console.log(section.id);


const h2 = document.createElement('h2');


const p = document.createElement('p');



const pre = document.createElement('pre');

const code = document.createElement('code');

const dash16= '_____';

/** APPENDCHILD */
const sectionParent = getProcessId.appendChild(section);

section.style.backgroundColor = 'darkgreen';
section.style.minHeight = '30vh';

p.style.backgroundColor = 'darkblue';
p.style.minHeight = '30vh';

h2.style.backgroundColor = 'darkorange';
h2.style.minHeight = '5vh';

pre.style.backgroundColor = 'darkgray';
pre.style.minHeight = '50vh';


// console.log(sectionParent.children);
// console.log(section.id);

const sectionChildren = section.appendChild(h2) + section.appendChild(p) + section.appendChild(pre);


const preCode = pre.appendChild(code);

// console.log(preCode);



