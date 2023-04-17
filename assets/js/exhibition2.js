
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

const getIdExhib = document.querySelector('#exhibition')

console.log(getProcessId);
// console.log(getIdExhib);


'_____';

const contentKeys = Object.keys(contentObj);

console.log(contentKeys);

const objContent = Object.values(contentObj);

console.log(objContent);

'_____';

const keys = ['bibi', 'baba', 'bebe'];
const loop1 = keys.forEach((value, index) => console.log(value, 'index :', index));


'----'

const section = document.createElement('section');
// let newSection = document.createElement('section');
const addSectionAtParent = getProcessId.appendChild(section);

console.log(addSectionAtParent);

'_____';

// for(let i=0;i< keys.length;i++){   // CREATE NEW ELEMENT ACCORDING TO THE ARRAY
//     getProcessId.appendChild(newSection);
//     newSection.setAttribute("id",  i);
// }

for(let i=0;i< objContent.length;i++){   // CREATE NEW ELEMENT ACCORDING TO THE ARRAY
    let newSection = document.createElement("section");
    getProcessId.appendChild(newSection);
    newSection.setAttribute("id",  i);
    newSection.style.backgroundColor = 'darkgreen';
    newSection.style.minHeight = '30vh';
    newSection.style.marginBottom = '20px';
}


const getAllId = document.querySelectorAll('*[id]')
console.log(getAllId);
'____'


section.style.backgroundColor = 'darkgreen';
section.style.minHeight = '30vh';
section.style.marginBottom = '20px';
// p.style.backgroundColor = 'darkblue';
// p.style.minHeight = '30vh';
// p.style.padding = '20px';
// p.style.marginBottom = '20px';

// h2.style.backgroundColor = 'darkorange';
// h2.style.minHeight = '5vh';

// pre.style.backgroundColor = 'darkgray';
// pre.style.minHeight = '50vh';