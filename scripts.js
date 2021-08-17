function compare (obj1, obj2) {
    var equal = false
    if(obj1 == obj2) {
        equal = true;
    }
    return equal;
}

function isInArr (obj, arr) {
    var res = false;
    for (var i=0;i<arr.length;i++) {
        if (compare(obj, arr[i])) {
            res = true;
            break;
        }
    }
    //$reactions.answer(res);
    return res;
    return indexes;
}
 
function cows (computerN, playerN) {
    playerN = playerN.toString()
    playerN = playerN.split('')
    var cow = 0
    for (var i=0;i<playerN.length;i++) {
        if (isInArr (playerN[i], computerN)) {
            cow ++
        } 
    } 
    return cow
} 

function bulls (computerN, playerN) {
    playerN = playerN.toString()
    playerN = playerN.split('')
    var smth = 0
    var new_obj = _.object(computerN, playerN)
    var pairs = _.pairs(new_obj)
    for (var i=0;i<pairs.length;i++) {
        if (pairs[i][0] != pairs[i][1]) {
            smth ++
        }    
    }
    return 4-smth
}

function length (playerN) {
    playerN = playerN.toString()
    playerN = playerN.split('')
    return playerN.length
}

function unique (playerN) {
    playerN = playerN.toString()
    playerN = playerN.split('')
    if (_.uniq(playerN).length < 4) {
        return false
    }
    else {
        return true
    }
}

function beginning () {
    var number = Math.floor(1000 + Math.random() * 9000)
    //reactions.answer(number)
    number = number.toString()
    number = number.split('')
    while (_.uniq(number).length < 4) {
        var number = Math.floor(1000 + Math.random() * 9000)
        //$reactions.answer(number)
        number = number.toString()
        number = number.split('')
    } 
    return number
}


















