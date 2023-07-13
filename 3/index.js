var person = 'fuzail ahmed';
var toTitleCase = function (str) {
    // let titledCase = '';
    return str.split(' ').map(function (word) { return "".concat(word[0].toUpperCase()).concat(word.slice(1).toLowerCase()); }).join(' ');
};
console.log(person.toLowerCase());
console.log(person.toUpperCase());
console.log(toTitleCase(person));
