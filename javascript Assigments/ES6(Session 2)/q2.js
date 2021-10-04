var mapIndex=0;

function helper(cList,input,iIndex,output,oIndex){
    
    if(iIndex>=input.length){
        cList.set(output,mapIndex++);
        return;
    }
    output=output+input[iIndex];
    if(input.length!=iIndex+1){
        helper(cList,input,iIndex+1,output,oIndex+1);
    }
    output=output+" ";
    helper(cList,input,iIndex+1,output,oIndex+2);
    
    
}

let input="vishal"
var cList=new Map();
helper(cList,input,0,"",0);
console.log(cList);