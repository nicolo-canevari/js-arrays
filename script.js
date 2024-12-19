const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array

// L'indice 3 corrisponde a Phil
const fourthTeacher = teachers[3];

console.log(fourthTeacher);


// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'

// Carlo diventa Patrick
teachers[4] = 'Patrick'; 

console.log(teachers);


// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto

// con .pop rimuovo Luca e lo assegno a const lastTeacher
const lastTeacher = teachers.pop();

console.log(lastTeacher);
// oppure
console.log(teachers);


// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto

// con .shift rimuovo Nathan e lo assegno a const firstTeacher
const firstTeacher = teachers.shift();

console.log(firstTeacher);
// oppure
console.log(teachers);


// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers

// con .push aggiungo alla fine dell'array Vanessa
teachers.push('Vanessa');

console.log(teachers);


// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers

// con .unshift aggiungo Sarah all'inizio dell'array
teachers.unshift('Sarah');

console.log(teachers);


// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex

// con .indexOf trovo l'indice di Lewis
const lewisIndex = teachers.indexOf('Lewis');

console.log(lewisIndex);


// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty

//  verifico se l'array è vuoto controllando la lunghezza del contenuto.
const isTeachersEmpty = teachers.length === 0;  

console.log(isTeachersEmpty);
