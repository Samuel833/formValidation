const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");

let isError = false;

//Even though the input element is set to be a number, JavaScript receives a string value. Therefore a function need to be written to clean the string value and ensure i have a number

//The split() method splits a string into an array of substrings, and returns the new array. 
//An optional separator can be passed in which tells the method where each split shoul happen.
/*
  Passing an empty string into the split method will split the string into an array of individual characters
  const str = 'Hello World';
  const strArray = str.split('');
  ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]
*/
//first I create a for loop that iterates through the values available in the str
//Then I check if the character in the strArray at index i is not +, -, or a space
//if it is not , I push it to the empty cleanStrArray I created
/*
  I need to check if the array ["+", "-", " "] does not include the current character. So I used a combination of the includes() method and the ! operator to do this.

The .includes() method returns true if the array contains the character, and false if not. The logical NOT operator (!) will return the opposite of the value of the .includes() method.

Here is an example:

const numbersArray = [1, 2, 3, 4, 5]
const number = 6

if (!numbersArray.includes(number)) {
  console.log("The number is not in the array.")
}

*/

function cleanInputString(str){
  const strArray = str.split('');
  const cleanStrArray = [];
  for(let i = 0; i < strArray.length; i++){
    if(!["+", "-", " "].includes(strArray[i])){
      cleanStrArray.push(strArray[i]);
    }
  }
}

/*
  While looping through the string works, creating a new array is inefficient for memory and runtime performance. Instead, you can use Regular Expressions (referred to as "regex") to match specific characters.

  Regex in JavaScript is indicated by a pattern wrapped in forward slashes – for example:

  const regex = /hello/;

  The pattern I currently have will match the exact text hello, which is not what I want to match. I want to look for +, -, or spaces. So I replace the pattern in your regex variable with \+- to look for plus and minus characters.

  Note that you need to use the \ to escape the +, because a + has a special meaning in regular expressions.

  In regex, shorthand character classes allow you to match specific characters without having to write those characters in your pattern. Shorthand character classes are preceded with a backslash (\). The character class \s will match any whitespace character. Add this to your regex pattern.

  Current pattern won't work just yet. /+-\s/ looks for +, -, and a space in order. This would match +- hello but would not match +hello.

  To tell the pattern to match each of these characters individually, you need to turn them into a character class. This is done by wrapping the characters you want to match in brackets. For example, this pattern will match the characters h, e, l, or o:

  const regex = /[helo]/;

  Turn your +-\s pattern into a character class. Note that you no longer need to escape the + character, because you are using a character class.

  Regex can also take specific flags to alter the pattern matching behavior. Flags are added after the closing /. The g flag, which stands for "global", will tell the pattern to continue looking after it has found a match. Here is an example: const helloRegex = /hello/g;

  Strings have a .replace() method which allows you to replace characters in the string with another string. .replace takes two arguments. The first is the character sequence to replace – this can either be a string or a regex pattern. The second is the string to replace that sequence with. For example, this would replace all instances of l with 1: "hello".replace(/l/g, "1");

  Use your regex to replace all instances of +, -, and a space in str with an empty string. Return this value.
*/
function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, "")
}
/*
  In HTML, number inputs allow for exponential notation (such as 1e10). You need to filter those out.

  Start by creating a function called isInvalidInput – it takes a single str parameter.

  Declared a regex variable, and assigned it a regex that matches the character e

  The e in a number input can also be an uppercase E. Regex has a flag for this, however – the i flag, which stands for "insensitive". This flag makes the pattern case-insensitive. Added the i flag to the regex pattern.

  Number inputs only allow the e to occur between two digits. To match any number, you can use the character class [0-9]. This will match any digit between 0 and 9.
  Added this character class before and after e in my pattern

  The + modifier in a regex allows you to match a pattern that occurs one or more times. To match my digit pattern one or more times, I added a plus after each of the digit character classes. For example: [0-9]+

  There is a shorthand character class to match any digit: \d. So I replaced my [0-9] character classes with this shorthand

  Strings have a .match() method, which takes a regex argument. .match() will return an array of match results – containing either the first match, or all matches if the global flag is used.
  Returned the result of calling the .match() method on str and passing the regex variable as the argument. I'll use this match result later on.
*/

function isInvalidInput(str){
  // const regex = /[0-9]+e[0-9]+/i;
  const regex = /\d+e\d+/i;
  return str.match(regex);
}

//To allow users to add entries to the calorie counter. Declare an empty function addEntry. This function should not take any parameters.
/*
  To know which category the entry goes in. Thankfully, I added a dropdown for the user to select a category.

  Remember that I queried that dropdown earlier in my JS and assigned it to the entryDropdown button. I can use the value property to get the value of the selected option.

  Then Use concatenation to add a # to the beginning of the value property of entryDropdown, and assign that result to a targetId variable.

  Now you need to target the .input-container element within the element that has your targetId. Declare a new targetInputContainer variable, and assign it the value of document.querySelector(). Use concatenation to separate targetId and '.input-container' with a space, and pass that string to querySelector()

  JavaScript has a feature called template literals, which allow you to interpolate variables directly within a string. Template literals are denoted with backticks ``, as opposed to single or double quotes. Variables can be passed in to a template literal by surrounding the variable with ${} – the value of the variable will be inserted into the string.
  
  For example:

const name = "Naomi";
const templateLiteral = `Hello, my name is ${name}~!`;
console.log(templateLiteral);
The console will show the string "Hello, my name is Naomi~!".

Replace your concatenated string in the querySelector with a template literal – be sure to keep the space between your targetId variable and .input-container

Thanks to template literals, you actually don't need the targetId variable at all. Remove that variable, and update your template literal to replace targetId with entryDropdown.value – remember to add # before that, in the string.

*/

function addEntry(){
//  const targetId = "#" + entryDropdown.value;
 const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
 }

 let myName = "Oluwasegun Samuel";

 console.log(cleanInputString(myName));