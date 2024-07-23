//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(score){
        this.scores.push(score);
    }
    average(){
        let totalScore = 0;
        for(let i =0; i < this.scores.length; i++){
            totalScore += this.scores[i];
        }
  
        return Math.round((totalScore/this.scores.length)*10)/10;
    }
    status(){
        if(this.average() >= 90){
            return "Accepted";
        }
        else if(this.average() >= 80 && this.average() <= 89){
            return "Reserve";
        }else if (this.average() >= 70 && this.average() <= 79){
            return "Probationary";
        }else{
            return "Rejected";
        }
    }
}

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

let bear = new CrewCandidate("Bubba Bear", 135, [88,85,90]);
let maltese = new CrewCandidate("Merry Maltese", 1.5, [93,88,97]);
let gator = new CrewCandidate("Glad Gator", 225, [75,78,62]);
// console.log(bear);
// console.log(maltese);
// console.log(gator);
// bear.addScore(83);
// console.log("Bubba's score "+ bear.scores);
// console.log(`Marry's avg test score: ${maltese.average()}`);
// console.log(`${bear.name} earned an average test score of ${bear.average()}% and has a status of ${bear.status()}.`);
// console.log(`${maltese.name} earned an average test score of ${maltese.average()}% and has a status of ${maltese.status()}.`);
// console.log(`${gator.name} earned an average test score of ${gator.average()}% and has a status of ${gator.status()}.`);

// let iterations = 0;
// while(gator.status() != 'Accepted'){
//     gator.addScore(100);
//     gator.average();
//     iterations += 1;
    // if(gator.status() === 'Reserve'){
    //     console.log(`gator status: ${gator.status()}, iterations needed: ${iterations}`);
    // }

    function pushStatus(status){
        let iterations = 0;
        while(gator.status() != status){
            gator.addScore(100);
            gator.average();
            iterations += 1;
    }
        return iterations;
    
}


console.log(`gator status: ${gator.status()}, iterations needed to get to reserve : ${pushStatus("Reserve")}`);
console.log(`gator status: ${gator.status()}, iterations needed to get to accepted: ${pushStatus("Accepted")}`);
