const checkFive = require('../checkFive.js');

describe("checkFive", function(){

   test("should return no. less than 5 when num < 5", function() {
      //code here...
      let output = checkFive(2);
      expect(output).toEqual("2 is less than 5.");
   });

   test("should return no. greater than 5 when num > 5", function() {
    let output = checkFive(5.5);
    expect(output).toEqual("5.5 is greater than 5.");
 });

 test("should return no. equals 5 when num = 5", function() {
    let output = checkFive(5);
    expect(output).toEqual("5 is equal to 5.");5
 });


});