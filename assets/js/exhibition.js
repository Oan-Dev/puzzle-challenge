/** 
    PART 7 EXHIBITION OF WORKING

 */

 //  CREATING THE TEXT ELEMENTS FOR THE STORYTELLING

// const preambule = `Pour réaliser ce casse-tête, j'ai procédé comme ceci :  `;

// const importationUppercaseProcess = `J'ai importé la chaine de caractère à traiter dans un tableau.
// Puis comme toute cette dernière se devait être traité tout en majuscule,
// alors j'opté pour cette option avant toute dissociation des lettres et des chiffre `;


// const deepCopyProcess = `Afin de discerner les lettres des chiffres, 
// tout d'abord j'ai fait une copie profonde. ` ;

// const mapFilterProcess = `Ensuite, j'ai créé mappé et filtré 
// ce tableau pour n'avoir que les nombres typé NUMBER.`;


// const typingNumberToStringProcess = `Puis chacun des elements typé NUMBER est pushé dans un nouveau 
// tableau converti en STRING.`;

// const onlyLetterProcess = `pour avoir seulement les lettres sans les nombres, 
// j'ai opté pour une méthode filter en comparant 
// le tableau des nombres typés en STRING avec le tableau initial de l'ensemble des données. 
// Puis j'ai appliqué la méthode SORT pour les trier dans l'ordre alphabletique.`;

// const alphabetPositionProcess = `Pour remplacer les lettres par leur position dans l'alphabet, 
// Il était tout d'abord de créer un nouveau tableau de tout l'alphabet. 
// Ensuite de le mapé dans une fonction en recherchant l'index asscocié. 
// Puis par cette fonction matchant la position avec chaque lettre du tableau des lettres. `;


// const TwoArraysforBigAndSmallNumbersProcess = `Afin d'effectuer le MODULO pour les nombres > 9, 
// il fallait scinder le tableau des nombres des positions, 
// donc je devait appliquer un filtrage avec une condition `;

// const moduloForbigNumberArrayProcess = `Afin d'effectuer l'opération MODULO, j'ai opté pour la méthode MAP`;

// const moduloForSmallScalableNumberProcess = `Pour tout nombre scalable vers les Grands nombres en y ajoutant le nombre 3, 
// j'ai d'abord utiliser la méthode FILTER avec une condition verifiant la scalabilité 
// pour y appliquer un double mapping appliquant l'addition et modulo`;

// const concatenationArraysProcess = `Pour avoir l'ensemble de la nouvelle chaine de caractère, il était nécessaire, tout d'abord, 
// de filtrer les petits nombres scalables des non-scalable. 
// puis appliquer la méthode CONCAT pour associer tous les nombres des tableaux`;

// const addingSizeInitialArrayProcess = `Pour completer la nouvelle chaine de caractère, j'ai, tout d'abord recherché la taille du premier tableau. 
// Puis, j'ai appliquer la méthode JOIN pour passer d'un tableau vers une simple chaine de caractère.`; 


// const finalisationProcess = `Pour finaliser l'objectif, J'ai associé la nouvelle chaine de caractère avec le lien par une concaténation`;
'----'
// const textContent = [
//     ...
//     preambule,
//     importationUppercaseProcess,
//     deepCopyProcess,
//     mapFilterProcess,
//     typingNumberToStringProcess,
//     onlyLetterProcess,
//     alphabetPositionProcess,
//     TwoArraysforBigAndSmallNumbersProcess,
//     moduloForSmallScalableNumberProcess,
//     concatenationArraysProcess,
//     addingSizeInitialArrayProcess,
//     finalisationProcess
//  ];

//  const txtArr = [...textContent];
//  console.log(txtArr);

'_____';

const contentObj = {

     'preambule' :                           `Pour réaliser ce casse-tête, j'ai procédé comme ceci :  `,

     importationUppercaseProcess :           `J'ai importé la chaine de caractère à traiter dans un tableau. Puis comme toute cette dernière se devait être traité tout en majuscule, alors j'opté pour cette option avant toute dissociation des lettres et des chiffre `,

     'deepCopyProcess' :                      `Afin de discerner les lettres des chiffres, out d'abord j'ai fait une copie profonde. ` ,

     'mapFilterProcess' :                    `Ensuite, j'ai créé mappé et filtré ce tableau pour n'avoir que les nombres typé NUMBER.`,

     'typingNumberToStringProcess' :          `Puis chacun des elements typé NUMBER est pushé dans un nouveau tableau converti en STRING.`,

     'onlyLetterProcess' :                    `pour avoir seulement les lettres sans les nombres, j'ai opté pour une méthode filter en comparant le tableau des nombres typés en STRING avec le tableau initial de l'ensemble des données. Puis j'ai appliqué la méthode SORT pour les trier dans l'ordre alphabletique.`,

     'alphabetPositionProcess' :              `Pour remplacer les lettres par leur position dans l'alphabet, Il était tout d'abord de créer un nouveau tableau de tout l'alphabet. Ensuite de le mapé dans une fonction en recherchant l'index asscocié. Puis par cette fonction matchant la position avec chaque lettre du tableau des lettres. `,

     'TwoArraysforBigAndSmallNumbersProcess': `Afin d'effectuer le MODULO pour les nombres > 9, il fallait scinder le tableau des nombres des positions, donc je devait appliquer un filtrage avec une condition `
    ,
     'moduloForbigNumberArrayProcess' :       `Afin d'effectuer l'opération MODULO, j'ai opté pour la méthode MAP`,

     'moduloForSmallScalableNumberProcess' :  `Pour tout nombre scalable vers les Grands nombres en y ajoutant le nombre 3, j'ai d'abord utiliser la méthode FILTER avec une condition verifiant la scalabilité pour y appliquer un double mapping appliquant l'addition et modulo`,

     'concatenationArraysProcess' :           `Pour avoir l'ensemble de la nouvelle chaine de caractère, il était nécessaire, tout d'abord, de filtrer les petits nombres scalables des non-scalable. Puis appliquer la méthode CONCAT pour associer tous les nombres des tableaux`,

     'addingSizeInitialArrayProcess' :        `Pour completer la nouvelle chaine de caractère, j'ai, tout d'abord recherché la taille du premier tableau. Puis, j'ai appliquer la méthode JOIN pour passer d'un tableau vers une simple chaine de caractère.`,

     'finalisationProcess' :                  `Pour finaliser l'objectif, J'ai associé la nouvelle chaine de caractère avec le lien par une concaténation`,

}
// console.log(contentObj);





/**
INSERT ALL PROCESS TO THE DOM 

*/


const processClass = document.querySelector('.story');

processClass.setAttribute('id', 'story');

const processId = processClass.id

const getProcessId = document.querySelector('#story')

// console.log(getProcessId);

 '_____';

/** CREATING ELEMENTS AND SETTING ATTRIBUTE ID */

const section = document.createElement('section');


const h2 = document.createElement('h2');


const p = document.createElement('p');



const pre = document.createElement('pre');

const code = document.createElement('code');

'_____';

/** APPENDCHILD */
const sectionParent = getProcessId.appendChild(section);



section.style.backgroundColor = 'darkgreen';
section.style.minHeight = '30vh';
section.style.marginBottom = '20px';

p.style.backgroundColor = 'darkblue';
p.style.minHeight = '30vh';
p.style.padding = '20px';
p.style.marginBottom = '20px';

h2.style.backgroundColor = 'darkorange';
h2.style.minHeight = '5vh';

pre.style.backgroundColor = 'darkgray';
pre.style.minHeight = '50vh';


// console.log(sectionParent.children);
// console.log(section.id);

const preCode = pre.appendChild(code);
// console.log(preCode);

// const sectionChildren = section.appendChild(h2) + section.appendChild(p) + section.appendChild(pre);

const sectionH2 = section.appendChild(h2);
const sectionPara = section.appendChild(p);
const sectionPre = section.appendChild(pre);

/** INDEXES OF TEXT CONTENT */




const contentKeys = Object.keys(contentObj);

console.log(contentKeys);

// const idSection = section.setAttribute("id", contentKeys[i]);

// console.log(idSection);


// for(let i = 0; i < contentKeys.length; i++) {
//      section.setAttribute('id', contentKeys[i])
// }

// console.log(indexes);


/** INSERT CONTENTS TO THE P */

const objContent = Object.values(contentObj);

console.log(objContent);


/** INSERT EACH PARAGRAPH INTO ONLY ONE SECTION */

'----'
const getAllId = document.querySelectorAll('*[id]')
console.log(getAllId);

'----'

// function addAllSections() {

//      if (getProcessId < contentKeys.length) {
//           for(let i = 0; i < contentKeys.length; i++) {
//               return sectionParent.push();
//           }

//      }
// }

// const allSection = addAllSections();

// const allSection = contentObj.forEach((contentObj.value, contentObj.index),  => sectionParent.push(item[i]) ) 

// console.log(allSection);
