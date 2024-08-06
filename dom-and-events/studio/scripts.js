// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() { 
   
    // console.log('window loaded');

   let takeOff = this.document.getElementById("takeoff");
   let flightStatusP = this.document.getElementById("flightStatus");
   let shuttleBackground = this.document.getElementById("shuttleBackground");
   let spaceShuttleHeight = this.document.getElementById("spaceShuttleHeight");

   takeOff.addEventListener("click",function(event){
    let liftOffConfirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");
      if(liftOffConfirmation){
            flightStatusP.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML += 10000;
            spaceShuttleHeight.style.position = "absolute";
 
    }
   })


   let land = this.document.getElementById("landing");
   land.addEventListener("click",function(event){
    window.alert("The shuttle is landing. Landing gear engaged");
    flightStatusP.innerHTML = "The shuttle has landed.";
    shuttleBackground.style.backgroundColor = "green";
    spaceShuttleHeight.innerHTML = 0;
   })
   

    let missionAbort = this.document.getElementById("missionAbort");
    missionAbort.addEventListener("click",function(event){
    if(window.confirm("Confirm that you want to abort the mission.")){

        flightStatusP.innerHTML = "Mission aborted.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
    }
   })

  

    let upButton = this.document.getElementById("up");
    upButton.addEventListener("click",function(event){
    this.document.getElementById("rocket").setAttribute("class", "democlass");

   })


});

