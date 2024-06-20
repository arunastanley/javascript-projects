//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(language.slice(0,1) + language.slice(4,5));

//2. Without using slice(), use method chaining to accomplish the same thing.
console.log(language.replace("Java","J").replace("Script","S"));

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for '${language}' is '${language[0]}${language[4]}'.`);
//4. Just for fun, try chaining 3 or more methods together, and then print the result.
let abbreviation = language.slice(language.indexOf("Java"),language.indexOf("Script")+1).replace("ava","");
console.log(`The abbreviation for '${language}' is '${abbreviation}'.`);
//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
let firstLetter = notTitleCase[0];
let secLetter = notTitleCase[notTitleCase.indexOf(" ")+1];
//console.log(firstLetter);
//console.log(secLetter);
console.log(notTitleCase.replace(firstLetter,firstLetter.toUpperCase()).replace(secLetter,secLetter.toUpperCase()));

//console.log(`${notTitleCase.replace(notTitleCase[0],notTitleCase[0].toUpperCase)}`);
