// Write your tests here!
const expect = require("chai").expect;
const assert = require("chai").assert;
const caesarModule = require("../src/caesar");
const caesar = caesarModule.caesar;
let input = "sample";
let shift = 3;
let encode;


describe("caesar", () => {
    it("should return false if there is no shift value", () => {
        expect(caesar(input, 0 , true)).to.be.false;
    });

    it("should return false if shift is less than -25", () => {
        expect(caesar(input, -26, true)).to.be.false;
    });

    it("should return false if shift is greater than 25", () => {
        expect(caesar(input, 26, true)).to.be.false;
    });

    it("checks if there is an input value", () => {
        assert.exists(caesar(input, shift, encode));
    });

    


});//end function tests
