//1. CREATE A CLOSURE WHICH HAS ONE INNER FUNCTION

function outerFunction () {
    let count = 0;
    function innerFunction (){
        count ++;
        return count;
    }
    
    return innerFunction
}

const innerFunc = outerFunction();

console.log(innerFunc());