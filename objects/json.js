const jsObj = {
   id: 1,
   title: "Athens",
   population: "3000000",
};

//convert to JSON string
const jsonString = JSON.stringify(jsObj);
console.log(jsonString); // {"id":1,"title":"Athens","population":"3000000"}

// convert back to Javascript object
const jsObj2 = JSON.parse(jsonString);
console.log(jsObj2); // { id: 1, title: 'Athens', population: '3000000' }
