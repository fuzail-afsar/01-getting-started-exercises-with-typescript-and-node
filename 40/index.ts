const make_album = (name: string, title: string, tracks: number = 0) => ({ name, title, tracks });

console.log(make_album('abc', 'def'));
console.log(make_album('efg', 'hij'));
console.log(make_album('klm', 'nop'));
console.log(make_album('qrs', 'tuv', 3));
