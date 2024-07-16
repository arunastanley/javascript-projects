let message = {
    '011': 'Launch!',
    '101': 'Code!',
    '110': 'Rocks!',
    '001': 'LaunchCode!',
    '100': 'Code Rocks!',
    '010': 'Launch Rocks! (CRASH!!!!)',
    '000': 'LaunchCode Rocks!',
    '111': "Rutabagas! That doesn't work."
};
let launchcode = {
    organization: "nonprofit",
    executiveDirector: "Jeff",
    percentageCoolEmployees: 100,
    programsOffered: ["Web Development","Data Analysis","Liftoff"],
    launchOutput: function(num){

        let numArray = [2,3,5];
        let remainderArray = [];

        for(let i=0; i <numArray.length ; i++){
            if(num % numArray[i] === 0){
            remainderArray[i] = 0;
            }else{
                remainderArray[i] = 1;
            }
            
        }
        return message[remainderArray.join('')];
        // if(num % 2 === 0 && num % 3=== 0 && num % 5 ===0){
        //     return 'LaunchCode Rocks!';
        // }

        // if(num % 2 === 0 && num % 5 ===0){
        //     return 'Launch Rocks! (CRASH!!!!)';
        // }

        // if(num % 3 === 0 && num % 5 ===0){
        //     return 'Code Rocks!';
        // }

        // if(num % 2 === 0 && num % 3 ===0){
        //     return 'LaunchCode!';
        // }
        //     if(num % 2 === 0){
        //         return 'Launch!';
        //     }
        //     if(num % 3 === 0){
        //         return 'Code!';
        //     }
        //     if(num % 5 === 0){
        //         return 'Rocks!';
        //     }
        //     else{
        //         return "Rutabagas! That doesn't work.";
        //     }

    }
}

module.exports = launchcode;

