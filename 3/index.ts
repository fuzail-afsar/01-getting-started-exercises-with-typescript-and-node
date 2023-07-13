const person = 'fuzail ahmed';

const toTitleCase = (str: string) => str.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`).join(' ');

console.log(person.toLowerCase()); // lower case
console.log(person.toUpperCase()); // upper case
console.log(toTitleCase(person));  // title case
