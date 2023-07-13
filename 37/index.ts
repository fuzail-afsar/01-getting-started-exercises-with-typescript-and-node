const make_shirt = (size: string = 'large', text: string = 'I love TypeScript') => console.log(`Your shirt size: ${size}. Containing text: ${text}`);

make_shirt();
make_shirt('medium');

make_shirt('medium', 'changed shirt text');
make_shirt('small', 'small shirt text');
