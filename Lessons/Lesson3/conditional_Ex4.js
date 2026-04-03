/*

Write a function called getDayType that takes a parameter called day — a string like "Monday" — and returns:

"Weekday" for Monday, Tuesday, Wednesday, Thursday, Friday
"Weekend" for Saturday and Sunday
"Invalid day" for anything else

Use a switch statement. Paste your code before running so I can check the logic first.

*/

function getDayType(day) {
  switch (day?.toLowerCase() ?? "") {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
      return "Weekday";
    case "saturday":
    case "sunday":
      return "Weekend";
    default:
      return "Enter a valid day";
  }
}

const days = [
  "monday",
  "tuesday",
  "wednesday",
  "Thursday",
  "frIday",
  "Saturday",
  "sundAy",
  "anotherDay",
];
for (let i = 0; i < days.length; i++) {
  console.log(getDayType(days[i]));
}
