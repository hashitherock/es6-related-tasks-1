/* 
1. Write a function that declares variables using var, let, and const. Attempt to reassign each variable within the same function scope, and observe the outcome. Explain any differences in behavior.
*/

function studentDetails() {

    var studentFirstName = "Rahim";
    var studentFirstName = "Karim";
    var studentFirstName = "Salman";

    console.log(studentFirstName); // Salman

    let studentLastName = "Khan";
    //let studentLastName = "Chowdhury"; // Cannot redeclare block-scoped variable 'studentLastName'.ts(2451) // SyntaxError: Identifier 'studentLastName' has already been declared
    studentLastName = "Sayeed";

    console.log(studentLastName); // Sayeed
    // let reassign kora jay na kintu value change kora jay.

    const studentEmail = "first_email@gmail.com";
    //const studentEmail = "second_email@gmail.com"; // Cannot redeclare block-scoped variable 'studentEmail'.ts(2451) // SyntaxError: Identifier 'studentEmail' has already been declared
    //studentEmail = "third_email@gmail.com"; // TypeError: Assignment to constant variable.

    console.log(studentEmail);
    // const reassign kora jay na and value change kora jay na.

}

studentDetails();

/* 
2. Create a function named greet that takes two parameters: name and greeting, with greeting having a default value of "Hello". If no greeting is provided, the function should output "Hello, [name]!".
*/

function greet(name, greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
}
greet("Salman", "Hi");
greet("Shahrukh");
greet("","Hii");

// Output
// Hi, Salman!
// Hello, Shahrukh!
// Hii, !


/* 
3. Using template literals, write a function that takes three parameters: firstName, lastName, and age, and returns a string in the format: "My name is [firstName] [lastName] and I am [age] years old.".
*/

function templateLiterals(firsName, lastName, age) {
    console.log(`My name is ${firsName} ${lastName} and I am ${age} years old.`);
}
templateLiterals("Salman", "Khan", "60");
templateLiterals("Shahrukh", "Khan", "60");
// Output
// My name is Salman Khan and I am 60 years old.
// My name is Shahrukh Khan and I am 60 years old.


