
// reverse this string
let reverse = 'Was it a cat I saw?';

const rev = (str) => {
    return `${str}`.split('').reverse().join('')
}

console.log(rev(reverse))