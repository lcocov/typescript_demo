var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Student = (function () {
    function Student(fiestName, lastName) {
        this.firstName = fiestName;
        this.lastName = lastName;
    }
    Student.prototype.Age = function () {
    };
    Student.prototype.greeter = function () {
        var Color;
        (function (Color) {
            Color[Color["Red"] = 0] = "Red";
            Color[Color["Green"] = 1] = "Green";
            Color[Color["Blue"] = 2] = "Blue";
        })(Color || (Color = {}));
        var c = Color.Red;
        return "Hello，您好111" + this.firstName + " " + this.lastName;
    };
    return Student;
}());
var Animal = (function () {
    function Animal(name) {
        this.animalName = name;
    }
    Animal.prototype.sayHello = function () {
        alert(this.animalName + ": Hello");
    };
    return Animal;
}());
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        _super.apply(this, arguments);
    }
    return Cat;
}(Animal));
// var c = new Cat("猫");
// c.sayHello();
var user = new Student("王", "小明");
// document.body.innerHTML = user.greeter();
document.body.innerHTML = user.greeter();
//# sourceMappingURL=greeter.js.map