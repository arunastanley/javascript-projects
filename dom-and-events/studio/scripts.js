// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() { 
   
    // console.log('window loaded');

    //buttons
   let takeOff = this.document.getElementById("takeoff");
   let land = this.document.getElementById("landing");
   let missionAbort = this.document.getElementById("missionAbort");

   //updates
   let flightStatusP = this.document.getElementById("flightStatus");
   let shuttleBackground = this.document.getElementById("shuttleBackground");
   console.log(this.document.getElementById("spaceShuttleHeight").innerHTML);
   let spaceShuttleHeight = this.document.getElementById("spaceShuttleHeight");

   //rocket Image
   let rocketImage = this.document.getElementById("rocket");

   let controlAxisX = 0;
   let controlAxisY = 0;

   //on click takeoff
   takeOff.addEventListener("click",function(event){
    let liftOffConfirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");
      if(liftOffConfirmation){
            flightStatusP.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
    }
   })


   //on click land
    land.addEventListener("click",function(event){
        window.alert("The shuttle is landing. Landing gear engaged");
        flightStatusP.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
   })
   

   //on click mission abort
    missionAbort.addEventListener("click",function(event){
    if(window.confirm("Confirm that you want to abort the mission.")){
        flightStatusP.innerHTML = "Mission aborted.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
    }
   })


//     let upButton = this.document.getElementById("up");
//     let rocketImage = this.document.getElementById("rocket");
//     upButton.addEventListener("click",function(event){ 

//     // rocketImage.setAttribute("class", "democlass");
//     //rocketImage.setAttribute("bottom", "25");

//     var topVal = parseInt(rocketImage.style.top, 10);
//     rocketImage.style.top = (topVal + 100) + "px";

//    })

    document.addEventListener("click",function(event){

        if(event.target.id === "up" && controlAxisY < 250){
            controlAxisY += 10;
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
            rocketImage.style.marginBottom = controlAxisY + "px";
           
        }
        if(event.target.id === "down" && controlAxisY > 0){
            controlAxisY -= 10;
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;
            rocketImage.style.marginBottom = controlAxisY + "px";
        }
        if(event.target.id === "right" && controlAxisX <= 130){
            controlAxisX += 10;
            rocketImage.style.marginLeft = controlAxisX + "px";
            
        }
        if(event.target.id === "left" && controlAxisX>= -170){
            controlAxisX -= 10;
            rocketImage.style.marginLeft = controlAxisX + "px";
            
        }
        console.log(controlAxisX);
        console.log(controlAxisY);

    });


});

