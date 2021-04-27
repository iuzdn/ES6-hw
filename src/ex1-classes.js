class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
    this.dateCreated = new Date();
  }
}

const d1 = new Dog("Dingo");
console.log(d1.name);
console.log(d1.dateCreated);
