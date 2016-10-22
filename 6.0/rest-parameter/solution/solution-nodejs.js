var average = function(sumToo, ...args) {
    var sum = 0;

    args.forEach(function(arg) {
        sum += arg;
    });

    returnObj = {
        'average': sum / args.length
    }

    if (sumToo) {
        returnObj['sum'] = sum;
    }

    return returnObj;
};

console.log(average(true, 1,2,3));