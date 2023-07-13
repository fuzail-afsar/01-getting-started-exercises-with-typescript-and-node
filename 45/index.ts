const setCarInfo = (manufacturer: string, model: string, ...optionalInfo: { [key: string]: string | number | boolean }[]) => {
    let optionalData = {};
    if (optionalInfo && optionalInfo.length) {
        optionalInfo.forEach((info) => {
            optionalData = { ...optionalData, ...info };
        });
    };

    return {
        manufacturer,
        model,
        ...optionalData
    }
};

console.log(setCarInfo('toyota', 'markX', { 'color': 'black' }));
console.log(setCarInfo('honda', 'civic', { 'year': 2023 }));
console.log(setCarInfo('honda', 'accord', { 'year': 2023 }));