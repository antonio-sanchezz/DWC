let uneArrays = (...arrays) => {

    finalArray = [];

    for (let i = 0;arrays.length > i;i++)
    {
        finalArray = finalArray.concat(arrays[i]);
    }

    return finalArray;

}

array1 = [1,2,3];
array2 = [4,5,6];
array3 = [7,8,9];

console.log(uneArrays(array1, array2, array3));