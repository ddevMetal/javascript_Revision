/*

Write these yourself:

Declare a const called siteName in global scope and assign it a string
Write a function called displaySite that prints siteName from inside the function — this tests global access
Declare a let called localMessage inside the function — assign it a string
Try to print localMessage outside the function — this should throw an error
Run it and paste the code and output

Don't worry about the error — the error IS the lesson.


*/

// Declare a const siteName in global Scope, assign it a string
const siteName = "GlobalScope";

// Write a fucntion call displaySite -> prints siteName from inside the function
function displaySite() {
  // test global scope
  console.log(`Welcome, you are in Global Scope -> ${siteName} `);

  // Declare a let called localMessage inside the function
  let localMessage = `Welcome, you have now enter in the Function Scope ->  ${siteName}`;
  console.log(localMessage);

  if (true) {
    let blockVar = "Secret place inside the block varaible";
    console.log(blockVar);
  }
  //console.log(blockVar);
}

// Print localMessage outside this function
displaySite();
console.log(localMessage);
