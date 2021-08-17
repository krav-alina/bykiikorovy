//сравнение двух объектов
function compare (obj1, obj2) {
    var equal = false
    if(obj1 == obj2) {
        equal = true;
    }
    return equal;
}
//функция для проверки чего-то в массиве
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
//проверяем, есть ли "Коровы", то есть совпавшие цифры 
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
//проверяем есть ли в числе игрока "Бык", то есть цифра, которая не просто совпадает, а совпадает и ее место
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
//проверка на длину
function length (playerN) {
    playerN = playerN.toString()
    playerN = playerN.split('')
    return playerN.length
}
//проверяем уникальны ли цифры в числе
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
//функция загадывания рандомного числа в 4 цифры
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


















