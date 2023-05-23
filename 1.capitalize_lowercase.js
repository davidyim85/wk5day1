let capitalize = 'spike';

// We need a function that takes in a string. 
// This function needs to RETURN that string with the first letter is in caps.
// The function must also ensures everything else is in lowercase.
// This string will never hold an empty space


const caps = (str) => {
    return `${str}`.charAt(0).toUpperCase() + `${str}`.slice(1).toLowerCase();
}

console.log(caps(capitalize));