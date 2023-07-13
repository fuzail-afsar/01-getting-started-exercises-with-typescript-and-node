var make_shirt = function (size, text) {
    if (size === void 0) { size = 'large'; }
    if (text === void 0) { text = 'I love TypeScript'; }
    return console.log("Your shirt size: ".concat(size, ". Containing text: ").concat(text));
};
make_shirt();
make_shirt('medium');
make_shirt('medium', 'changed shirt text');
make_shirt('small', 'small shirt text');
