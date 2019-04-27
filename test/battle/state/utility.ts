import { expect } from "chai";
import "mocha";
import { oneHot, tempStatusTurns } from "../../../src/battle/state/utility";

describe("utility", function()
{
    describe("oneHot", function()
    {
        it("Should encode class of values", function()
        {
            expect(oneHot(1, 3)).to.have.members([0, 1, 0]);
        });

        it("Should output 0's if index is null", function()
        {
            expect(oneHot(null, 3)).to.have.members([0, 0, 0]);
        });
    });

    describe("tempStatusTurns", function()
    {
        it("Should return 0 if given 0", function()
        {
            expect(tempStatusTurns(0)).to.equal(0);
        });

        it("Should decrease status likelihood", function()
        {
            expect(tempStatusTurns(2)).to.equal(1 / 2);
        });
    });

});