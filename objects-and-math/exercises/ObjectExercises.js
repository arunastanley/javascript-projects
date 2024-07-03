let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   move: function(){
      return Math.round(Math.random()*10);
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   move: function(){
      return Math.round(Math.random()*10);
   }
};

let machoChimp = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   move: function(){
      return Math.round(Math.random()*10);
   }
};

let beagleBoy = {
   name: "Leroy",
   species: "Beagle",
   mass : 14,
   age: 5,
   move: function(){
      return Math.round(Math.random()*10);
   }
};

let tardy = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
};

// After you have created the other object literals, add the astronautID property to each one.

superChimpOne["astronautID"] = 2;
salamander["astronautID"] = 3;
machoChimp["astronautID"] = 5;
beagleBoy["astronautID"] = 4;
tardy["astronautID"] = 7;

// Add a move method to each animal object

tardy["move"] =  function(){
   return Math.round(Math.random()*10);
};

// Create an array to hold the animal objects.
let crew = [superChimpOne,salamander,machoChimp,beagleBoy,tardy];

// Print out the relevant information about each animal.

//console.log(crew);
function crewReports(obj){
   return  `${obj.name} is a ${obj.species}. They are ${obj.age} years old and ${obj.mass} kilograms. Their ID is ${obj.astronautID}.`
 }

// Start an animal race!
function fitnessTest(arr){
   let results = [];
   for (i=0; i< arr.length; i++){
      let steps = 0;
      let iterations =0;
         while (steps < 20){
         steps += arr[i].move();
         iterations += 1;
         }
   results[i] = `${arr[i].name} took ${iterations} turns to take 20 steps. `;
   }
   return results;
}

console.log(fitnessTest(crew));


