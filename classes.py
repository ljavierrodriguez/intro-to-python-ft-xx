class Person:
    name = ""
    lastname = ""
    
    def __init__(self, name = "John", lastname="Doe"):
        self.name = name
        self.lastname = lastname
        
    def __repr__(self):
        #return "<Person %s %s>" % (self.name, self.lastname)
        return f"<Person {self.name} {self.lastname}>"
    
    def greeting(self):
        return f"Hola, soy {self.name} {self.lastname}"

class Student(Person):
    university = ""
    
    def __init__(self, university = None, name="John", lastname="Doe"):
        super().__init__(name, lastname)
        self.university = university
        
    def __repr__(self):
        #return "<Person %s %s>" % (self.name, self.lastname)
        return f"<Student {self.name} {self.lastname}>"
    
    def eat(self):
        return "Estoy comiendo!"

p1 = Person("Jane", "Smith")
print(p1)
print(p1.greeting())

s1 = Student()
s1.university = "MIT"

print(s1)
print(s1.greeting())
print(s1.eat())