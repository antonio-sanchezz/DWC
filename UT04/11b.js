let doubleOddNumbers = (arr) => {

    return arr.filter((val) => {
        return val % 2 != 0;
    }).map((val) => {
        return val * 2;
    })

}