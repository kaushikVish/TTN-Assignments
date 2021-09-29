var arr=[];

arr.push(1); // add items at the end
arr.unshift(2,6,9); // adds item at the begining
arr.pop(); // delete from end
arr.shift; // extract item from begining
arr.length; //length of an array

arr.map((item) =>{    //traverse through array
    console.log(item);
})

console.log(arr.reduce((previous,current) =>{ //reduce method
    return previous+current;
}))

