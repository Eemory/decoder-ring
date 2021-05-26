// Write your tests here!
const assert = require("chai").assert
const polybiusModule = require("../src/polybius");
const polybius = polybiusModule.polybius;
let output = " ";
let input = " ";

describe("polybius", () => {
    it("checks if output is a string", () => {
        assert.isString(output);
    })

   it("checks if input is a string" ,() => {
       assert.isString(input);
   });

   it("checks if there is an input value", () => {
       assert.exists(polybius(input,true));
   });

});//end function tests
