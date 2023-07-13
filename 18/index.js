var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ['paris', 'bora bora', 'swiss alps', 'galcier national park', 'rome'];
// original order
console.log(places);
// alphabetical order without modify
console.log('alphabetical order: ', __spreadArray([], places, true).sort());
// original order
console.log(places);
// reverse alphabetical order without modify
console.log('reverse alphabetical order: ', __spreadArray([], places, true).sort().reverse());
// original order
console.log(places);
// reverse order
console.log('reverse  order: ', places.reverse());
// original order
console.log('original  order: ', places.reverse());
// alphabetical order
console.log('alphabetical order: ', places.sort());
// reverse alphabetical order
console.log('reverse alphabetical order: ', places.reverse());
