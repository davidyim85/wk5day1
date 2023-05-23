// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    let closeOpen = {
        ')': '(',
        ']': '[',
        '}': '{',
    };    


    let collection = [];


    for(let i =0; i<s.length;i++){
        //if its not a close, it must be an open
        //lets add that to the collection
        console.log(collection[s[i]])
        if(!closeOpen[s[i]]){
            collection.push(s[i])
        
        //else it must be a close. Lets evaluate the close
        // if it is a pair with the LAST element on collection we can remove the last one on the list
        } else if(collection[collection.length -1] === closeOpen[s[i]]){
            collection.pop();
            
        // if its not an open and a close that is paired with the last on the list it must be invalid
        } else {
            return false;

        }
        

    }

    return collection.length === 0;
};
//"()"
// "()[]{}"
// "(({{[[]]}}))"

console.log(isValid("()"))