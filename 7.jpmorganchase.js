

const ary = ['eat', 'tree', 'ate',];

// write a function that returns [['eat', 'ate']['tree']]

function groupBy(arr){

    const col = {};
    
    for(let i = 0; i<arr.length; i++){
        let sort = arr[i].split('').sort().join('');
        if(col[sort]){
            col[sort] = [...col[sort], arr[i]];
        }else {
            col[sort] = [arr[i]];
        }
    }

    // const res = [];
    // for(const k in col){
    //     res.push(col[k])
    // }
    return Object.values(col);
}

console.log(groupBy(ary))