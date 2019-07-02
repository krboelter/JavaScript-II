// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function myHouse() {
  let color = "Red";
  console.log(color);
  
  function herHouse() {
    let color = "Blue";
    console.log(color);

    function hisHouse() {
      let style = "Brick";
      console.log(style);
    }

    hisHouse();
  }

  herHouse();
}

myHouse();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function(){
    count ++;
    return count;
  }
};

const newCounter = counter();

console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return choose = {
    decrement: counter => {
      count--;
      return count;
    },
    increment: counter => {
      count++;
      return count;
    }
  }
};

const addCounter = counterFactory().increment;
const subCounter = counterFactory().decrement;

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());
console.log(subCounter());
console.log(subCounter());
console.log(subCounter());

