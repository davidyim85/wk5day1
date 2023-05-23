// only accepts numerical digits(ignore white space and non-numeric characters)
// you should not be able to input more than 10 numbers
// format the number automatically as (123)456-7890 by adding both the parenthesis when the 4th digit is entered. adding “-“ before 7th digit



var arr = ["a", 1, 2, [3, "b", 4, [5, 6, "c"]], "d", 7, [8, 9]];

//expect 45

const summation = function (data) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === "number") {
            sum += data[i];
        } else if (Array.isArray(data[i])) {
            sum = sum + summation(data[i]);
        }
    }
    return sum;
};

console.log(summation(arr));
