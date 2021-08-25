// alert("API called!");
const person = { name: "Pranta", age: 23, address: "BD" };

// stringify a object
const jsonPerson = JSON.stringify(person);
console.log(jsonPerson);

// parse to original object
const parsePerson = JSON.parse(jsonPerson);
console.log(parsePerson);
