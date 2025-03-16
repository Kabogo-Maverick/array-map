
function studentRollCall(student) {
  return student + " the skier";
}

function studentRollCall(student) {
  return student + " the skier";
}

const skiSchool = ["aki", "guadalupe", "lei", "aalam"];
const rollCall = skiSchool.map(studentRollCall);
console.log(skiSchool)

const rollCall2 = [];

for (const student of skiSchool) {
rollCall2.push(student + " the skier");
}
console.log(skiSchool)


const rollCall3 = skiSchool.map(function (student) {
  return student + " the skier";
});
console.log(skiSchool)



const robots = [
  { name: "Johnny 5", modes: 5, isActivated: false },
  { name: "C3PO", modes: 3, isActivated: false },
  { name: "Sonny", modes: 2.5, isActivated: false },
  { name: "Baymax", modes: 1.5, isActivated: false },
];

const activatedRobots = robots.map((robot) => {
  return Object.assign({}, robot, {
    modes: robot.modes * 2,
    isActivated: true,
  });
});

console.log(activatedRobots);

const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function titleCased() {
  return tutorials.map((title) => {
    return title
      .split(" ") 
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()) 
      .join(" "); 
  });
}

console.log(titleCased());
