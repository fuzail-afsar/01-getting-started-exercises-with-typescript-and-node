var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians = ['David Blaine', 'Lance Burton', 'Shin Lim', 'David Devant', 'Apollo Robbins'];
var show_magicians = function (magicians) { return magicians.forEach(function (magician) { return console.log(magician); }); };
var make_great = function (magicians) {
    var newMagicians = __spreadArray([], magicians, true);
    newMagicians.forEach(function (magician, index, arr) {
        arr[index] = "Great ".concat(magician);
    });
    return newMagicians;
};
var greatMagicians = make_great(magicians);
show_magicians(greatMagicians);
show_magicians(magicians);
