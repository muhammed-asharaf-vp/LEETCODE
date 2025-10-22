var createCounter = function(init) {
    let value=init;
    return{
        increment:()=>{
            value+=1;
            return value
        },
        reset:()=>{
            value=init;
            return value
        },
        decrement:()=>{
            value-=1;
            return value
        }
    }
};
