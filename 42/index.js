var magicians = ['David Blaine', 'Lance Burton', 'Shin Lim', 'David Devant', 'Apollo Robbins'];
var show_magicians = function (magicians) { return magicians.forEach(function (magician) { return console.log(magician); }); };
var make_great = function (magicians) { return magicians.forEach(function (magician, index, arr) {
    arr[index] = "Great ".concat(magician);
}); };
make_great(magicians);
show_magicians(magicians);
