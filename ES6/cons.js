class ToyotaCar{
    constructor(brand)
    {
        this.brand=brand;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
}
let fortuner = new ToyotaCar("fortuner");
console.log(fortuner);
let lexus = new ToyotaCar();
console.log(lexus);