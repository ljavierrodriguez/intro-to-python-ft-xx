class Person {

    name = "";
    lastname = "";

    constructor(name = "John", lastname="Doe"){
        this.name = name,
        this.lastname = lastname
    }

    greeting(){
        return `Hola, Soy ${this.name} ${this.lastname}`;
    }
}

class Student extends Person {
    university = "";

    constructor(university, name = "John", lastname="Doe"){
        super(name, lastname);
        this.university = university
    }

    greeting(){
        return `Hola, Soy el estudiante ${this.name} ${this.lastname}`;
    }
}


let p1 = new Person();
p1.lastname = "Perez"
console.log(p1.greeting())
console.log(p1);

let p2 = new Person("Jane", "Smith");
console.log(p2);


let s1 = new Student("MIT");
s1.lastname = "Valenzuela"
console.log(s1.greeting());