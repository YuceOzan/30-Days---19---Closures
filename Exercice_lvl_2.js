//1. CREATE A CLOSURE WHICH HAS THREE INNER FUNCTIONS

function outerFunction() {
    let outerVariable = "I am an outer variable";
  
    function firstInnerFunction() {
      console.log(outerVariable);
      console.log("This is the first inner function");
    }
  
    function secondInnerFunction() {
      console.log(outerVariable);
      console.log("This is the second inner function");
    }
  
    function thirdInnerFunction() {
      console.log(outerVariable);
      console.log("This is the third inner function");
    }
  
    return {
      firstInner: firstInnerFunction,
      secondInner: secondInnerFunction,
      thirdInner: thirdInnerFunction
    };
  }
  
  const closureInstance = outerFunction();
  
  closureInstance.firstInner();
  closureInstance.secondInner();
  closureInstance.thirdInner();