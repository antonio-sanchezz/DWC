let tripleAndFilter = () => {

    return arr.map((value) => {
        return value * 3;
    }).filter((value) => {
        return value % 5 === 0;
    })

}