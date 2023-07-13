var prepareSandwich = function () {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log("Following are the ingredients used to prepare your sandwich: ".concat(ingredients.join(', ')));
};
prepareSandwich('meat', 'cheese', 'lettuces');
prepareSandwich('chicken', 'cheese');
prepareSandwich('chicken', 'cheese', 'lettuces', 'potato chips');
