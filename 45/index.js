var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var setCarInfo = function (manufacturer, model) {
    var optionalInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        optionalInfo[_i - 2] = arguments[_i];
    }
    var optionalData = {};
    if (optionalInfo && optionalInfo.length) {
        optionalInfo.forEach(function (info) {
            optionalData = __assign(__assign({}, optionalData), info);
        });
    }
    ;
    return __assign({ manufacturer: manufacturer, model: model }, optionalData);
};
console.log(setCarInfo('toyota', 'markX', { 'color': 'black' }));
console.log(setCarInfo('honda', 'civic', { 'year': 2023 }));
console.log(setCarInfo('honda', 'accord', { 'year': 2023 }));
