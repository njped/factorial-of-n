factorialize(5);

function factorialize (num) {
    let result = num;
    if (num < 0) {
        return -1;
    }
    else if (num === 0 || num === 1) {
        return 1;
    }

    while (num > 1) {
        num--;
        result *= num;
    }
    return result;
}
