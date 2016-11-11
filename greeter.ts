interface Person{
    Age()
}


class Student  implements Person {
    firstName : string;
    lastName : string;

    constructor(fiestName : string,  lastName : string) {
        this.firstName = fiestName;
        this.lastName = lastName;
    }
    Age(){

    }
    greeter() {
        enum Color {Red, Green, Blue}
        var c: Color = Color.Red;
        return "Hello，您好111" + this.firstName + " " + this.lastName;
    }
}



class Animal {
    animalName:string;
    
    constructor(name:string) {
        this.animalName = name;
    }

    sayHello() {
        alert(this.animalName + ": Hello");
    }
}
class Cat extends Animal {
    private _animalName:string;
}

// var c = new Cat("猫");
// c.sayHello();




var user = new Student("王", "小明");

// document.body.innerHTML = user.greeter();
document.body.innerHTML = user.greeter();