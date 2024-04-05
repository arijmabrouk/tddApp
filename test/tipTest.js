assert = require("assert"); 
Tip = require("../Tip.js").Tip  // program to test 
// new unit test 
describe("Check tip amount", function() { 
  describe("sending in 100", function() { 
    it("should return 20", function() { 
      var result = new Tip().CalculateTip(100); 
      assert.equal(20,result); 
    });  
  });  
});

// test