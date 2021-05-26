// Write your tests here!
const expect = require("chai").expect;
const substitutionModule = require("../src/substitution");
let input = "the";
let alphabet = 'ghsjthryfhdjskeiwueyrpoiuy';
const substitution = substitutionModule.substitution;

describe("substitution", () => {
    it("should return false if the alphabet is not 26 characters long",() => {
        expect(substitution(input, "wfhiudhfoakshgoiuse", encode = true)).to.equal(false);
    });

    it("should return false if any alphabet characters match", () => {
        expect(substitution(input, "hh", encode = true)).to.equal(false);
    });

    it("should return false if there is no alphabet array", () => {
        expect(substitution(input, " ", encode = true)).to.equal(false);
    });
});