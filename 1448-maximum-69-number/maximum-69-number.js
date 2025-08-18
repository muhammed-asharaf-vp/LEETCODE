/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let str=String(num);
    let result=str.replace('6','9');
    return Number(result);
    
};