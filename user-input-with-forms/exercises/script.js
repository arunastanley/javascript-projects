//Code Your Solution Below
window.addEventListener("load",function(){
    let nameOftest = document.querySelector("input[name=testName]")
    let date = document.querySelector("input[name=testDate]")
    let typeOfRocket = document.querySelector("select[name=rocketType]")
    let noOfBooster = document.querySelector("input[name=boosterCount]")
    let windRating = document.querySelector("input[name=windRating]")
    let prodGradeServers = document.querySelector("input[name=productionServers]")
    let form = document.querySelector("form");
      form.addEventListener("submit", function(event) {
          if (nameOftest.value === "" || date.value === "" || typeOfRocket.value === "" || 
              noOfBooster.value === "" || prodGradeServers.value === ""){
              alert("All fields are required");
               event.preventDefault();
             
          }
        
        
      })
  })