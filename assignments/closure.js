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
  let tracker = 0;
  for (let i = 0; i < tracker + 1; i++) {
    var count = tracker + 1;
    return count;
  }
  count = tracker;
  return tracker;
};

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
