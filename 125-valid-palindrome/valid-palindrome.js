
var isPalindrome = function(s) {
   let cleaned=s.replace(/[^a-z0-9]/gi,"").toLowerCase();
   let finished=cleaned.split("").reverse().join("")
   return cleaned==finished;

};