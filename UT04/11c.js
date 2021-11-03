let bar = () => {

    let txt = '';

    for (let i in arguments)
    {
        txt += arguments[i];
    }

    return txt;
}

//16,18,19,20,21,22