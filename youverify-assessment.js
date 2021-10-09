/**
 *
 * @param {String} str the string that needs to be verified as containing unique characters
 * @returns {Boolean} true or false
 */
const isUnique = (str) => {
    //duplicates holds an array of characters that are the same from the string
    let duplicates = str
        .split("")
        .filter((char, index) => str.indexOf(char) != index);

    if (duplicates.length > 0) {
        return false;
    } else {
        return true;
    }
};

console.log(isUnique("ade"));

/**
 *
 * @param {String} str the string to parse and return as a valid URL
 * @returns a string that is parsed with %20 replacing spaces
 */

const urlify = (str) => {
    const re = /\s+/g;
    return str.replace(re, "%20");
};
console.log(urlify("Ade Bright "));

/**
 *
 * @param {String} a the first string to check if the second is a permuation
 * @param {String} b the string that is a permuation of the first string
 * @returns true or false
 */
const isPermuation = (a, b) => {
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (!a.includes(b[i])) {
            return false;
        }
    }
    return true;
};
console.log(isPermuation("abc", "bca"));
