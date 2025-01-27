class Person{
    constructor(name)
    {
        this.name = name;
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
   
}
class Engineer extends Person{
    constructor(name,branch)
    {
        super(name);
        this.branch = branch;
    }
    work(){
       super.eat();
        console.log("in work");
    }
}
let engob = new Engineer("Navya","civil");
engob.work();

