//TODO: Add Your Code Below
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
            response.json().then(function(json){
                    let userDisplay = document.getElementById("container");
                    json.sort(function(a, b) {return b.hoursInSpace - a.hoursInSpace});
                    // console.log(json);
                    let strJason=[];
                    let activeColor = "black"
                     for(let i=0; i<7; i++){
                        if(json[i].active === true){
                            activeColor = "green";
                        }else{activeColor = "black";}   
                        strJason.push(`
                            <div class="astronaut">
                            <div class="bio">
                                <h3>${json[i].firstName} ${json[i].lastName}</h3>
                                <ul>
                                <li>Hours in space: ${json[i].hoursInSpace}</li>
                                <li style="color: ${activeColor};">Active: ${json[i].active}</li>
                                <li>Skills: ${json[i].skills}</li>
                                </ul>
                            </div>
                            <img class="avatar" src="${json[i].picture}">
                        </div>
                            `);  
                    }
                    document.getElementById("AstronautCount").innerHTML = `Astronauts: the super ${json.length}`; 
                    userDisplay.innerHTML= strJason;
            });
    });
});