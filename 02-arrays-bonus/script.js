const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

// inverto l'ordine dell'array salvandolo nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();

console.log(reversedTeachers);


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

//  usando .filter e assegnandogli un valore filtro gli insegnanti con nomi >= 5 lettere
const longNames = teachers.filter(teacher => teacher.length >= 5);

console.log(longNames);


// 3. Rimuovi 'Ed' dall'array teachers

// Trova l'indice di 'Ed'
const indexOfEd = teachers.indexOf('Ed');  

console.log(indexOfEd);

// Se 'Ed' è trovato lo rimuovo dall'array
if (indexOfEd !== -1) {  
  teachers.splice(indexOfEd, 1);
}

console.log(teachers);


// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = null;

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;