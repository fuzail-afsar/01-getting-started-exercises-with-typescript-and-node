var make_album = function (name, title, tracks) {
    if (tracks === void 0) { tracks = 0; }
    return ({ name: name, title: title, tracks: tracks });
};
console.log(make_album('abc', 'def'));
console.log(make_album('efg', 'hij'));
console.log(make_album('klm', 'nop'));
console.log(make_album('qrs', 'tuv', 3));
