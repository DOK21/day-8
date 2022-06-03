// objects = collection of data
// key value pairs

const obj = {
  someone: {
    name: "Asem",
    feelsBad: true,
    feelsTiredBecause: [{ life: true, javascript: { isTooMuch: false } }],
  },
};

const aPerson = {
  name: "Daiane",
  from: "Braziu",
  greeting: function () {
    console.log("Oi or Ola");
    // return "Oi or Ola";
  },
  age: 36,
  birthday() {
    this.age++;
  },
};

aPerson.greeting();

const aSecondPerson = {
  name: "Nuno",
  from: "Portugal",
  age: 19,
  birthday: function () {
    //   is called a method
    this.age++;
  },
  greeting() {
    console.log("Oi or Ola");
  },
};

const aThirdPerson = {
  name: "Aderemi",
  from: "Nigeria",
  age: 27,
  birthday() {
    this.age++;
  },
  greeting() {
    console.log("Hello or Hi");
    return 1;
  },
};

// OOP -> Object Oriented Programming
class Student {
  constructor(name, greetingMessage, from, age) {
    this.name = name;
    this.greetingMessage = greetingMessage;
    this.age = age || undefined;
    this.from = from || "Unknown Locatoin";
  }

  birthday() {
    console.log("this:", this);
    if (this.age) {
      this.age++;
    } else {
      console.log("You dont have an age, why you lie?");
    }
  }

  greeting() {
    console.log(this.greetingMessage);
  }
}

const elvan = new Student(
  "Elvan",
  "Hallo or nothing at all, because we ze german",
  "Germany",
  50
);

const diana = new Student("Diana", "marhaba", "Lebanon / Ukraine", 29);

const someoneWinkWink = new Student("Maxime", "Hoj", "Netherlands");

class Animal {
  constructor(name, numberOfLegs) {
    this.name = name;
    this.numberOfLegs = numberOfLegs;
  }

  sound() {
    console.log("URUBURUBURBURBURBURBURBURBURBURBUR");
  }
}

class Dog extends Animal {
  constructor(name, breed, age) {
    super(name, 4);
    this.breed = breed;
    this.age = age * 7;
  }
  sound() {
    console.log("Wooph.com");
  }
}

const animal = new Animal("boris", 4);
console.log("animal:", animal);

const snoopy = new Dog("Snoopy", "i dont know");
console.log("snoopy:", snoopy);

class Fish extends Animal {
  constructor(name) {
    super(name, 0);
  }
}

const nemo = new Fish("Nemo");

class Cat extends Animal {
  constructor(name, color, gender, isFluffy) {
    super(name, 4);
    this.color = color;
    this.livesLeft = livesLeft || 9;
    this.rootOfAllThatIsEvil = true;
    this.isFluffy = isFluffy;
    this.gender = gender;
  }
}

class Human extends Animal {
  constructor(name, age, height, hasHumour) {
    super(name, 2);
    this.name = name;
    this.age = age;
    this.height = height;
    this.hasHumour = hasHumour;
  }

  sound() {
    console.log("Indeeeed");
  }
}

class StudentPerson extends Human {
  constructor(name, age, height, topic) {
    super(name, age, height, true);
    this.topic = topic;
  }
}

const vincent = new StudentPerson("Vincent", 31, 169, "Web Dev");
console.log("vincent:", vincent);
// constructor is the function that gets called when we do new Whatever()
// when we extend a class, we might, or might not need a constructor
// if we dont change anything, we dont need
// if we are going to do something different, we do need
