let numbers = [7,5,1,10,9];
let max = numbers[0]; 
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log(max);