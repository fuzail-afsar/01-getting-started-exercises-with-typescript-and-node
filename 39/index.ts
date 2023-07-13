const city_country = (city: string, country: string = 'Pakistan') => `"${city}, ${country}"`;

console.log(city_country('Karachi', 'Pakistan'));
console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('Ottawa', 'Canada'));