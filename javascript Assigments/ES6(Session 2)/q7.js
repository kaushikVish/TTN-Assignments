const data = [[1,2],3,4,[5,[6,7]]];

function flatten(arr) {
    let flatArray = [];
    arr.forEach(element => {
        if (Array.isArray(element))
            flatArray = flatArray.concat(flatten(element));
        else
            flatArray.push(element);
    });
    return flatArray;
}

const newArray = flatten(data);

console.log(newArray);

// const flatData = [1,2,3,4,5,6,7];
