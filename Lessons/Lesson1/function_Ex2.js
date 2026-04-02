function userProfile1(name, age) {
  return `${name} is ${age} years old`;
}

console.log(userProfile1("ddevmetal1", 20));

function userProfile2(name, age) {
  return name + " is " + age + " year old";
}

console.log(userProfile2("ddevmetal2", 20));

// Fucntion Expression
const userProfile3 = function (name, age) {
  return `${name} is ${age} years old`;
};

console.log(userProfile3("ddevmetal3", 30));
