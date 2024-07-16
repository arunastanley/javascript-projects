// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
    test("should have organization as 'non profit'",function(){
          expect(launchcode.organization).toBe("nonprofit");
    });

    test("should have executiveDirector as 'Jeff'",function(){
      expect(launchcode.executiveDirector).toBe("Jeff");
});

    test("should have percentageCoolEmployees as 100",function(){
      expect(launchcode.percentageCoolEmployees).toBe(100);
    });


    test("should return an array of values",function(){
      expect(launchcode.programsOffered.includes("Web Development")).toBeTruthy();
      expect(launchcode.programsOffered.includes("Data Analysis")).toBeTruthy();
      expect(launchcode.programsOffered.includes("Liftoff")).toBeTruthy();
      expect(launchcode.programsOffered.length).toBe(3);
    });


    test("should return 'Launch!' when num div by only 2",function(){
        expect(launchcode.launchOutput(2)).toBe('Launch!');
    });

    test("should return 'Code!' when num div by only 3",function(){
      expect(launchcode.launchOutput(9)).toBe('Code!');
    }); 

    test("should return 'Code!' when num div by only 3",function(){
      expect(launchcode.launchOutput(9)).toBe('Code!');
  });

  test("should return 'Rocks!' when num div by only 5",function(){
    expect(launchcode.launchOutput(25)).toBe('Rocks!');
});

test("should return 'LaunchCode!' when num div 2 and 3",function(){
  expect(launchcode.launchOutput(6)).toBe('LaunchCode!');
});

test("should return 'Code Rocks!' when num div 3 and 5",function(){
  expect(launchcode.launchOutput(15)).toBe('Code Rocks!');
});

test("should return 'Launch Rocks! (CRASH!!!!)' when num div 2 and 5",function(){
  expect(launchcode.launchOutput(10)).toBe('Launch Rocks! (CRASH!!!!)');
});

test("should return 'LaunchCode Rocks!' when num div 2, 3 and 5",function(){
  expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!');
});

test("should return 'Rutabagas! That doesn't work.' when num not div by 2, 3 and 5",function(){
  expect(launchcode.launchOutput(31)).toBe("Rutabagas! That doesn't work.");
});
  
})