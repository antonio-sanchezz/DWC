let bar = () => {

    let txt = '';

    for (let i in arguments)
    {
        txt += arguments[i];
    }

    return txt;
}