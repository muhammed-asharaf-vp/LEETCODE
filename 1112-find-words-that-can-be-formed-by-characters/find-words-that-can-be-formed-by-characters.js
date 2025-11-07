var countCharacters = function(words, chars) {
    let sum=0;
    for(let word of words){
        let temp=chars.split('')
        let succsses=true
        for(let letter of word){
            let idx=temp.indexOf(letter)
            if(idx!==-1){
                temp.splice(idx,1)
            }
            else{
                succsses=false;
                break;
            }
        }
        if(succsses==true){
            sum+=word.length
        }
    } 
    return sum       
};