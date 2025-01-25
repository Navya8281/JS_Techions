// create an object 'person' without a formal class definition
let person = {
    name: "Ammu",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
};

// call the greet() method on the person object
person.greet(); 