const palindrom = (stringToCheck) => {
    const cleanString = stringToCheck
        .toLowerCase()


    const stringReverse = cleanString
        .split('')
        .reverse()
        .join('');

    return stringReverse === cleanString ? true : false;
};

module.exports = palindrom;