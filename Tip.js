function Tip() { 
} 
 
Tip.prototype.CalculateTip = function(p1) { 
 
  return p1*0.2; 
 
} 
 
module.exports.Tip = Tip;