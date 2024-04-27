const person = {
  name: "Juan",
  age: 25,
  gender: "male",
  setData(p_name, p_age, p_gender) {
    this.name = p_name;
    this.age = p_age;
    this.gender = p_gender;
  },
};

console.log(person);

class Person {
  name;
  age;
  gender;

  setData(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const person2 = new Person();

person2.setData("Lucía", 23, "female");

console.log("person2", person2);

class Student {
  name;
  age;
  gender;

  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const student = new Student("Carla", 32, "female");
console.log("student", student);

class Animal {
  feed;
  kindOfAnimal = "Animal";

  constructor(feed) {
    this.feed = feed;
  }

  setFeed(feed) {
    this.feed = feed;
  }
}

class Elephant extends Animal {
  name;

  constructor(feed, name) {
    super(feed);
    this.name = name;
  }

  setFeed(feed) {
    this.feed = feed.toUpperCase();
  }

  walk() {
    console.log(`It's walking and its feed is ${this.feed}`);
  }

  get ElephantName() {
    return this.name;
  }

  set ElephantName(name) {
    this.name = name;
  }
}

const elephant = new Elephant("peanut", "elephant");
console.log("elephant", elephant);
elephant.setFeed("carrot");
console.log("elephant", elephant);
elephant.walk();
console.log("get elephant name", elephant.ElephantName);
elephant.ElephantName = "Dumbo";
console.log("get elephant name", elephant.ElephantName);

class Dolphin extends Animal {
  constructor(feed) {
    super(feed);
  }

  swim() {
    console.log(`It's swimming and its feed is ${this.feed}`);
  }
}

const dolphin = new Dolphin("fishes");
dolphin.swim();
