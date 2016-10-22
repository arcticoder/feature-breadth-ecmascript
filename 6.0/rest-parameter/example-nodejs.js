// convert the following variatic function to use a rest parameter
var average = function(sumToo) {
    var argLen = arguments.length;
    var sum = 0;

    for (var x = 1; x < argLen; x++) {
        sum += arguments[x];
    }

    returnObj = {
        'average': sum / (argLen - 1)
    }

    if (sumToo) {
        returnObj['sum'] = sum;
    }

    return returnObj;
};

console.log(average(true, 1,2,3));