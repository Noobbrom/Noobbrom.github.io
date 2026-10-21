document.addEventListener('DOMContentLoaded', () => {
  const pollButton = document.querySelector('.poll-btn');
  const pollResult = document.querySelector('.poll-result');
  const pollOptions = document.querySelectorAll('input[name="language"]');

  if (pollButton && pollResult) {
    pollButton.addEventListener('click', () => {
      const selected = [...pollOptions].find(option => option.checked);

      if (selected) {
        pollResult.textContent = `You voted for: ${selected.value}`;
      } else {
        pollResult.textContent = 'Please select an option before voting.';
      }
    });
  }

  console.log('Website loaded successfully.');
});

/*

Data types:
* string        | let text = "Hello";
* number        | let number = 42;
* boolean       | let isActive = true;
* array         | let list = [1, 2, 3];
* object        | let person = { name: "Bob", age: 20 }
* null          | let empty = null;
* undefined     | let unknown;

console.log("Hello World!");
console.log(123);

Math works: +-*%/
Comparison Operators: == / === / != / > / <
Use === and !== more often than == and !=
Logical Operators: && / || / !

How strings are handled:
* let name = "Alice"
* console.log(name.length) // 5
* console.log(name.toUpperCase()); // ALICE
* console.log(name.toLowerCase()); // alice
* console.log(name + "Smith"); // Alice Smith

if statements:

if (age >= 18) {
    console.log("Adult.");
} else {
    console.log("Minor.");
}

Arrays:

let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[0]); // Apple
console.log(fruits.length); // 3
fruits.push("Grape");
console.log(fruits); // [Apple, Banana, Orange, Grape]

Loops:
* For:

for(let i = 0; i<5; i++) {
    console.log(i);
}
* While:
while (i < 5) {
    console.log(i);
    i++;
}
Functions:

function greet(name) {
    console.log("Hello " + name);
}

greet("Alice");

* Arrow function

const greet2 = (name) => {
    console.log("Hi " + name);
 };

 greet2("Bob");

Events in the Browser:

document.queryselector("button").addEventList {
    console.log("Button clicked");
}

DOM Selection:

const heading = document.querySelector("h1");
const allButtons = document.querySelectorAll("button");

DOM manipulation:

heading.textContent = "New Title";
heading.style.color = "red";
heading.classList.add("highlight");
heading.classList.remove("highlight");
heading.classList.toggle("highlight");

Object example:

const person = {
    name: "Tom"
    age: 30
    greet() {
        console.log("Hello, I am " + this.name)
    }
};

person.greet();

QUICK RULES:
* Use const by default
* Use let when value changes
* Use functions to organize code
* Use querySelector to get elements
* Use addEventListener for user interaction

*/