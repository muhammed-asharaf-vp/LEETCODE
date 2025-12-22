var getConcatenation = function(nums) {
    let copy=[...nums]
    for(i=0;i<copy.length;i++){
        nums.push(copy[i])
    }
    return nums
};