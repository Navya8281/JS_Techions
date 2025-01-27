class Person{
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("do nothing");
    }
}
class Engineer extends Person{
    work(){
        console.log("in work");
    }
}
let engob = new Engineer();
engob.work();
engob.eat();
engob.sleep();