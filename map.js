  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num * 2);
}
console.log(results); // Prints all numbers in num multiplied by 2


// Using map()
const multByTwo = function (num) {
  return num * 2;
}
const mapResults = nums.map(multByTwo);
console.log(mapResults); // Prints all numbers in num multiplied by 2. Same as above but done with map()


// Simplified w/ map()
const simplified = nums.map(function (num) { return num * 2 }); // Essentially moving function into the map method. Doesn't need to be named as map() expects a function to be passed through
console.log(simplified); // Prints all numbers in num multiplied by 2. Same as above but simplified.

// Simplfied w/ map() + arrow function
const arrow = nums.map(num => num * 2); // Same as above but simplified further with arrow function. () not needed around num as there's only one parameter.
console.log(arrow); // Same result as above

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentsWithIds = students.map(student => [student.name, student.id]); // Creates an array of student names and ids
console.log(studentsWithIds); // Prints all student names along with their IDs in an array of arrays
