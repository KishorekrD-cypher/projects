let person = {
    name: "Kishore",
    age: 30,
    isStudent: false,
    address: {
        city: "New York",
        zipCode: "10001"
    }
};

console.log(person.name);
console.log(person.address.city);

//Changing value
person.age = 25;

let company = {
    name: "Deloitte",
    employees: [
        {name: "Alice", position:"Engineer"},
        {name: "Bob", position:"Designer"},
        {name: "Charlie", position:"Manager"}
    ]
};

console.log(company.employees[0].name);