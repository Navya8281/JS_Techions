class Car {
    constructor(model) {
        this.model = model;
    }
}

const myCar = new Car("Tesla");
console.log(myCar.model); // Output: Tesla

// Modifying the property
myCar.model = "Audi";
console.log(myCar.model); // Output: Mercedes

// Attempting to reassign the variable
myCar = new Car("BMW"); // Error: Assignment to constant variable
