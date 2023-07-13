var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numArray.forEach(function (num) {
    if (num === 1) {
        console.log("".concat(num, "st"));
    }
    else if (num === 2) {
        console.log("".concat(num, "nd"));
    }
    else if (num === 3) {
        console.log("".concat(num, "rd"));
    }
    else {
        console.log("".concat(num, "th"));
    }
});
