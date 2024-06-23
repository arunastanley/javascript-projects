//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

let fuelLevel = 0;
let noOfAstronauts = 0;
let shuttleAlt = 0;
  const input = require('readline-sync');


/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

  fuelLevel= Number(input.question("Enter the starting fuel level: "));
  while(fuelLevel < 5000 || fuelLevel >30000)
    { 
      fuelLevel= Number(input.question("Enter a positive no. between 5000 and 30000: "));
    }
    console.log ("starting Fuel Level= ", fuelLevel);


//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
  noOfAstronauts = Number(input.question("Enter the no. of astronauts: "));

  while(noOfAstronauts < 1 || noOfAstronauts > 7)
    {
      noOfAstronauts = Number(input.question("Astronaut count should be between 1 and 7:  "));
    }
  console.log('No of astronauts = ', noOfAstronauts)
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while (fuelLevel - (noOfAstronauts*100) > 0 )
  {
    fuelLevel = fuelLevel - (noOfAstronauts*100);
    shuttleAlt= shuttleAlt + 50;
    console.log("Fuel: ",fuelLevel);
    console.log("Alt: ",shuttleAlt);
  }


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”
If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

console.log(`The shuttle gained an altitude of ${shuttleAlt} km`);
if (shuttleAlt >= 2000){
  console.log(`Orbit achieved!`);
}else{
  console.log(`Failed to reach orbit`);
}