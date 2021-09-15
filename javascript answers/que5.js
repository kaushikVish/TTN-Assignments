let list = [
    {
        name: 'a',
        age: 70,
        dob: 1990,
        salary: 900
    },
    {
        name: 'b',
        age: 2,
        dob: 1991,
        salary: 7000,
    },
    {
        name: 'c',
        age: 30,
        dob: 1992,
        salary: 500,
    },
    {
        name: 'd',
        age: 4,
        dob: 1993,
        salary: 9000,
    }
]

var salaryBasedFilter = list.filter(item =>
    item.salary > 5000);

console.log("Filtered Salary", salaryBasedFilter);

let group1=[];
let group2=[];

list.map(item =>
    (item.age > 2) ? group1.push(item) : group2.push(item)
)

console.log("Group 1 age is greater than 2",group1);
console.log("Group 2 age is less than 2",group2);


list.map(item =>{
    if(item.age>20 && item.salary<1000){
        item.salary=item.salary*5;
        return item;
    }
})

console.log("Updated list after increment", list);


