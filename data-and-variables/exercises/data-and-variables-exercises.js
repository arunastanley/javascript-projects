// Declare and assign the variables below
    let shuttleName = "Determination";
    let shutteSpeedMph = 17500;
    let distMarsKm = 225000000;
    let distMoonKm= 384400;
    const milesPerKm = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
    console.log("shuttleName data type: "+typeof shuttleName,
    "\n shutteSpeedMph data type: "+typeof shutteSpeedMph, 
    "\n distMarsKm data type: "+typeof distMarsKm, 
    "\n distMoonKm data type: "+typeof distMoonKm, 
    "\n milesPerKm data type: "+typeof milesPerKm, 
    );
// Calculate a space mission below
    let milesToMars = distMarsKm * milesPerKm;
    let hoursToMars = milesToMars / shutteSpeedMph;
    let daysToMars = hoursToMars / 24;
// Print the results of the space mission calculations below

    console.log(shuttleName, "will take",daysToMars, "days to reach Mars." )

// Calculate a trip to the moon below
    let milesToMoon = distMoonKm * milesPerKm;
    let hoursToMoon = milesToMoon / shutteSpeedMph;
    let daysToMoon = hoursToMoon /24 ;

// Print the results of the trip to the moon below

console.log(shuttleName, "will take",daysToMoon, "days to reach the Moon." );
