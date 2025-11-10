// Scrivere una funzione che accetti tre argomenti, un array e due numeri
//  (a più piccolo di b). 
// La funzione ritornerà un nuovo array con i valori che hanno la
//  posizione compresa tra i due numeri. Non usare i metodi di array di JS

function ricerca(array, a, b){
    const newArray = [];
    for(let i = a; i <= b; i++){
        newArray.push(array[i]);
    }
    return newArray;
}

const array = [58, 56, 25, 5, 4, 75, 89, 63, 14];

const min = prompt("Inserisci il numero da dove iniziare la ricerca: ");
if(min < 0 || min > array.length - 2){
    alert(`Inserisci il primo numero compreso tra 0 e ${array.length - 2}` )
}

const max = prompt("Inserisci un numero dove finire la ricerca: ");
if(max <= min || max > array.length - 1){
    alert(`Inserisci il secondo numero maggiore del primo e minore di ${array.length - 1}`);
}

const newArray = [];
newArray.push(ricerca(array, min, max));
console.log(newArray);
