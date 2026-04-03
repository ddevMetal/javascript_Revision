// if more the 3 conditon use switch instead of if/else or ternary

function getResult(score) {
  switch (true) {
    case score >= 85:
      return "A";
    case score >= 75:
      return "B";
    case score >= 65:
      return "C";
    case score >= 55:
      return "P";
    default:
      return "F";
  }
}
console.log(getResult(1));
console.log(getResult(25));
console.log(getResult(33));
console.log(getResult(73));
console.log(getResult(87));
console.log(getResult(85));
