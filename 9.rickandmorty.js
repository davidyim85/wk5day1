// 1. make an api call to https://rickandmortyapi.com/api/character/?page=2
// 2. then put the response payload in a variable

// 3. the variable should have a property called results
// this property will be an Array. 
// create another variable that uses the results array to derive and new array of objects with the following properties:  name, gender, status, species and type properties. 
// 4. Create a search function that takes two parameters. 1. the variable created in step 3 and 2. any string. 
// This function will search through each element and if there is a match will return it
// for example if i do a search for 'ea', i expect to see an array which holds in its elements at least 1 matching 'ea' in the values. 
// a use case would be a search field and the array. if the user types in values into the search field, the user expects to see a new array where any of the properties values matched the user input

//the fetch is ASYNC 


fetch('https://rickandmortyapi.com/api/character/?page=2')
    .then(res => {
        return res.json()
    })
    .then(data => {
        let fetchData = data;
        let updatedData = fetchData.results.map(v => { return { name: v.name, gender: v.gender, status: v.status, species: v.species, type: v.type } });

        console.log(search(updatedData, 'ar'))
    });




const search = (arr, search) => {
    return arr.filter(v => {
        for(const prop in v){
            if(v[prop].toLowerCase().indexOf(search.toLowerCase()) > -1){
                return true;
            }
        }
        return false;
    })
}
