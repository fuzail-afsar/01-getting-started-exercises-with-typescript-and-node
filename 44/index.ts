const prepareSandwich = (...ingredients: string[]) => {
    console.log(`Following are the ingredients used to prepare your sandwich: ${ingredients.join(', ')}`);
}

prepareSandwich('meat', 'cheese', 'lettuces')
prepareSandwich('chicken', 'cheese');
prepareSandwich('chicken', 'cheese', 'lettuces', 'potato chips');