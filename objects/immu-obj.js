const obj = { id: 1, firstname: "Anna" };

// Mutable Add
obj.Lastname = "Smith"; // add new property

// Immu add
// without [] syntax, the field name will be "field" instead of the
// value of the field variable
const addToObj = (obj, field, value) => ({ ...obj, [field]: value });
// return new object with added property
const obj2 = addToObj(obj, "lastname", "Smith");
console.log(obj2); // { id: 1, firstname: 'Anna', Lastname: 'Smith', lastname: 'Smith' }

// immutable update
// Είναι βασικά ίδια
const updateObj = (obj, field, value) => ({ ...obj, [field]: value });
const obj3 = addToObj(obj, "firstname", "Maria");
console.log(obj3);

// immu delete
// rewatch 7:03 ωρα
const deleteFromObj = (obj, field) => {
   const { [field]: _, ...objToReturn } = obj;
   // destructuring to exclude field
   return objToReturn;
};
