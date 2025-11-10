// <!-- Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
//  nome e peso.
// Stampare a schermo oppure in console la bici con peso minore. -->

const bici = [ 
    {
        nome: "Nicole",
        peso: 526,
    },
    {
        nome: "Gianna",
        peso: 884,
    },
    {
        nome: "Roberta",
        peso: 247,
    },
    {
        nome: "Alessia",
        peso: 577,
    },
    {
        nome: "Carmen",
        peso: 455,
    },
    {
        nome: "Giulia",
        peso: 528,
    },
]

let indice = 0;
let min = bici[0].peso;

for(let i = 0; i < bici.length; i++){
    const curBici = bici[i];
    if(curBici.peso < min){
        min = curBici.peso;
        indice = i;
    }
}

console.log(` La bici con il peso minore è ${bici[indice].nome}, con il peso di ${bici[indice].peso} grammi`);
