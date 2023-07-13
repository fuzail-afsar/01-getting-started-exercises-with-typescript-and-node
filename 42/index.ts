
const magicians = ['David Blaine', 'Lance Burton', 'Shin Lim', 'David Devant', 'Apollo Robbins'];

const show_magicians = (magicians: string[]) => magicians.forEach(magician => console.log(magician));

const make_great = (magicians: string[]) => magicians.forEach((magician, index, arr) => {
    arr[index] = `Great ${magician}`;
});

make_great(magicians);

show_magicians(magicians);