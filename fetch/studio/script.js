//TODO: Add Your Code Below
window.addEventListener("load",function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
        let displayScreen = document.getElementById("container");
      let jsonstr = [];
    //     let Hours = 0;
    //     let index = "";
    //     // let astronautArray = json;
    //     console.log(astronautArray);
      
    // while(astronautArray.length > 0){
    //     for(let i = 0; i<7 ; i++){
    //         console.log(astronautArray[i].hoursInSpace );
    //         if(astronautArray[i].hoursInSpace > Hours){
    //             Hours = astronautArray[i].hoursInSpace;
    //             index = i;
    //         }
    //     }

    json.sort(function(a, b) {return b.hoursInSpace - a.hoursInSpace});
    console.log(json);

    for(let i=0; i<7; i++){
        strJason.push(`
            <div class="astronaut">
            <div class="bio">
                <h3>${json[i].firstName} ${json[i].lastName}</h3>
                <ul>
                <li>Hours in space: ${json[i].hoursInSpace}</li>
                <li>Active: ${json[i].active}</li>
                <li>Skills: ${json[i].skills}</li>
                </ul>
            </div>
            <img class="avatar" src="images/${json[i].lastName}.jpg">
        </div>
            `);  
    }

        
    // }
        });
    })
});