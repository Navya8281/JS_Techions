const number = 25;
let Prime = true;
if (number == 1) {
    console.log("1 is neither prime nor composite number.");
}

else if (number > 1) {

    for (let i = 2; i <= number/2; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (Prime) {
        console.log(`number is a prime number`);
    } else {
        console.log(`number is a not prime number`);
    }
}
else {
    console.log("The number is not a prime number.");
}