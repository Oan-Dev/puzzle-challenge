
const contentObj = {

    'preambule' :                           `Pour réaliser ce casse-tête, j'ai procédé comme ceci :  `,

    importationUppercaseProcess :           `J'ai importé la chaine de caractère à traiter dans un tableau. Puis comme toute cette dernière se devait être traité tout en majuscule, alors j'opté pour cette option avant toute dissociation des lettres et des chiffre `,

    'deepCopyProcess' :                      `Afin de discerner les lettres des chiffres, out d'abord j'ai fait une copie profonde. ` ,

    'mapFilterProcess' :                    `Ensuite, j'ai créé mappé et filtré ce tableau pour n'avoir que les nombres typé NUMBER.`,

    'typingNumberToStringProcess' :          `Puis chacun des elements typé NUMBER est pushé dans un nouveau tableau converti en STRING.`,

    'onlyLetterProcess' :                    `pour avoir seulement les lettres sans les nombres, j'ai opté pour une méthode filter en comparant le tableau des nombres typés en STRING avec le tableau initial de l'ensemble des données. Puis j'ai appliqué la méthode SORT pour les trier dans l'ordre alphabletique.`,

    'alphabetPositionProcess' :              `Pour remplacer les lettres par leur position dans l'alphabet, Il était tout d'abord nécessaire de créer un nouveau tableau de tout l'alphabet. Ensuite de le maper dans une fonction en recherchant l'index asscocié. Puis par cette fonction matchant la position avec chaque lettre du tableau des lettres. `,

    'TwoArraysforBigAndSmallNumbersProcess': `Afin d'effectuer le MODULO pour les nombres > 9, il fallait scinder le tableau des nombres des positions, donc je devait appliquer un filtrage avec une condition `
   ,
    'moduloForbigNumberArrayProcess' :       `Afin d'effectuer l'opération MODULO, j'ai opté pour la méthode MAP`,

    'moduloForSmallScalableNumberProcess' :  `Pour tout nombre scalable vers les Grands nombres en y ajoutant le nombre 3, j'ai d'abord utiliser la méthode FILTER avec une condition verifiant la scalabilité pour y appliquer un double mapping appliquant l'addition et modulo`,

    'concatenationArraysProcess' :           `Pour avoir l'ensemble de la nouvelle chaine de caractère, il était nécessaire, tout d'abord, de filtrer les petits nombres scalables des non-scalable. Puis appliquer la méthode CONCAT pour associer tous les nombres des tableaux`,

    'addingSizeInitialArrayProcess' :        `Pour completer la nouvelle chaine de caractère, j'ai, tout d'abord recherché la taille du premier tableau. Puis, j'ai appliquer la méthode JOIN pour passer d'un tableau vers une simple chaine de caractère.`,

    'finalisationProcess' :                  `Pour finaliser l'objectif, J'ai associé la nouvelle chaine de caractère avec le lien par une concaténation`,

}

'________________'

/**
INSERT ALL PROCESS TO THE DOM 

*/


const processClass = document.querySelector('.story');

processClass.setAttribute('id', 'story');

const processId = processClass.id

const getProcessId = document.querySelector('#story')

const getIdExhib = document.querySelector('#exhibition')



'_____';

const contentKeys = Object.keys(contentObj);


const objContent = Object.values(contentObj);


'_____';

'----'

const newSection = document.createElement('section');
const addSectionAtParent = getProcessId.appendChild(newSection);


'_____';



'----'

for(let i=0;i< objContent.length;i++){   // CREATE NEW ELEMENT ACCORDING TO THE ARRAY
   
   /** Creatng the diff elements  */
    let newSection = document.createElement("section");
    let p = document.createElement("p");
    let pre = document.createElement("pre");
    let code = document.createElement("code");

    /** linking with the diff elements */
    pre.appendChild(code);
    getProcessId.appendChild(newSection);
    newSection.appendChild(p);
    newSection.appendChild(pre);

    /** insert the id for each section */
    newSection.setAttribute("id",  i);

    /**insert the content in in section 'p' */
     p.innerHTML = (objContent[i]);

    /** the Style  */
    newSection.style.marginBottom = '20px';
    p.style.padding = '20px';
    pre.style.minHeight ='50px';
    
    // p.style.backgroundColor = 'darkgreen';
    // newSection.style.minHeight = '30vh';
    // pre.style.backgroundColor = 'lightgreen';


}
'----'

getProcessId.removeChild(getProcessId.getElementsByTagName('section')[0])

'___'

const newSections = document.querySelectorAll('section');

'___________'



