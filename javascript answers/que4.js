//Shallow Copy

var object1={
    'a':1,
    'b':2,
    'c':3,
    d:{
        e:4,
        f:5,
    }
}

let object2=(Object.assign({},object1));
object2.a=6;
object2.c=10;
object2.d.e=12;
console.log("SHALLOW COPY")
console.log("Object 1",object1);
console.log("Object 2",object2);



//Deep Copy

var object3={
    a:1,
    b:2,
    c:3,
    d:{
        e:4,
        f:5,
    }
}

console.log("DEEP COPY");
let object4=JSON.parse(JSON.stringify(object3));
object4.a=6;
object4.c=10;
object4.d.e=12;
console.log("Object 3",object3);
console.log("Object 4",object4);
