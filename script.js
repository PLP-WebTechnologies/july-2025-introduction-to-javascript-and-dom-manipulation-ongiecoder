// ====================
// Part 1: Basics
// ====================
const ageInput = document.getElementById('ageInput');
const checkAgeBtn = document.getElementById('checkAgeBtn');
const ageResult = document.getElementById('ageResult');

checkAgeBtn.addEventListener('click', () => {
  const age = parseInt(ageInput.value);
  if (isNaN(age)) {
    ageResult.textContent = "Please enter a valid number!";
  } else if (age >= 18) {
    ageResult.textContent = "You are an adult ✅";
  } else {
    ageResult.textContent = "You are a minor ❌";
  }
});

// ====================
// Part 2: Functions
// ====================

// Function 1: Greeting
function greet(name) {
  return `Hello, ${name}! Welcome to JS learning. 🎉`;
}

// Function 2: Sum of two numbers
function sum(a, b) {
  return a + b;
}

const greetBtn = document.getElementById('greetBtn');
const greetResult = document.getElementById('greetResult');

greetBtn.addEventListener('click', () => {
  greetResult.textContent = greet("Ongie");
});

// ====================
// Part 3: Loops
// ====================

const numbersBtn = document.getElementById('numbersBtn');
const numbersResult = document.getElementById('numbersResult');

numbersBtn.addEventListener('click', () => {
  let numbersText = "";
  for (let i = 1; i <= 5; i++) {
    numbersText += i + " ";
  }
  numbersResult.textContent = numbersText;
});

// Another loop example: while loop
let count = 1;
while (count <= 3) {
  console.log("While loop count:", count);
  count++;
}

// ====================
// Part 4: DOM Manipulation
// ====================

const changeTextBtn = document.getElementById('changeTextBtn');
const domText = document.getElementById('domText');

changeTextBtn.addEventListener('click', () => {
  domText.textContent = "Text has been changed! 🎯";
});

// Toggle class example
const toggleBtn = document.getElementById('toggleBtn');
const colorText = document.getElementById('colorText');

toggleBtn.addEventListener('click', () => {
  if (colorText.classList.contains('red')) {
    colorText.classList.remove('red');
    colorText.classList.add('blue');
  } else {
    colorText.classList.remove('blue');
    colorText.classList.add('red');
  }
});