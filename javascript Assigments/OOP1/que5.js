function myObj(){
    myObj.numInstance++;
    myObj.number_of_invocation++; // number of times function invoke or calls
};

myObj.number_of_invocation=0;
myObj.numInstance=0;

function abc(){
    var a= new myObj();
    var b= new myObj();
    var result={
        number_of_invocation:myObj.number_of_invocation,
        number_of_Instances:myObj.numInstance
    }
    return result;
}

console.log(abc());

