// The difference between call() and bind() is that the call() sets the this keyword and executes the function immediately and it does not create a new copy of the function, while the bind() creates a copy of that function and sets the this keyword.

// Bind Example

function greeting(lang) {
  console.log(`${lang}: I am ${this.name}`);
}

const john = {
  name: 'John'
};

const greetingJohn = greeting.bind(john, 'Hey');

greetingJohn();


// Call Example

function greeting() {
  console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
}

const john = {
  name: 'John',
  age: 24,
};

// Hi, I am John and I am 24 years old
greeting.call(john);