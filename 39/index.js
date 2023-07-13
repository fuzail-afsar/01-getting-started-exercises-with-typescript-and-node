var city_country = function (city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    return "\"".concat(city, ", ").concat(country, "\"");
};
console.log(city_country('Karachi', 'Pakistan'));
console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('Ottawa', 'Canada'));
