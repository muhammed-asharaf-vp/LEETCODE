var addDigits = function(num) {
    while(num >= 10) {
        let sum = 0;
        let digit = num.toString();
        for(let i = 0; i < digit.length; i++) {
            sum += Number(digit[i]);
        }
        num = sum;
    }
    return num;
};  
