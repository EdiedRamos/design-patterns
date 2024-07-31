interface Animal {
  getName: () => string;
  run: () => string;
}

// * Concrete Animal A
class Dog implements Animal {
  constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }

  public run(): string {
    return "I am a dog running!!!";
  }

  public bark(): string {
    return "Gua Gua!!!";
  }
}

// * Concrete Animal B
class Cat implements Animal {
  constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }

  public run(): string {
    return "I am a cat running!!!";
  }

  public mew(): string {
    return "mewww!!!";
  }
}

// * Creator class
abstract class AnimalCreator {
  // * ...
  // * Some Animal related logic...

  public abstract create(name: string): Animal;
}

class CatCreator extends AnimalCreator {
  public create(name: string): Cat {
    return new Cat(name);
  }
}

class DogCreator extends AnimalCreator {
  public create(name: string): Dog {
    return new Dog(name);
  }
}

const catCreator = new CatCreator();
const dogCreator = new DogCreator();

const catPet = catCreator.create("Garfield");
const dogPet = dogCreator.create("Clifford");

console.log(catPet.mew());
console.log(dogPet.bark());
