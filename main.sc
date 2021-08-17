require: slotfilling/slotFilling.sc
  module = sys.zb-common
require: common.js
    module = sys.zb-common
require: scripts.js
    
theme: /

    state: start
        q!: * start *
        a: Привет! Давай поиграем? 
        state: go
            q: * (с удовольствием/с радостью/хорошо/давай/хорошо давай/да) * 
            a: Сейчас я загадаю четырехзначное число. Твоей задачей будет это число отгадать. Называй четырехзначные числа, а я буду давать подсказки: 
                Бык - цифра есть в числе и совпала по местоположению, Корова - цифра есть в числе.
            a: Поехали, число я уже загадал.
            script: 
                $session = {}
                $session.number = beginning ()  
            go!: /number 
        state: no
            q: * (нет/не хочу/не буду) *
            a: Эх, приходи, когда захочешь поиграть!
            
    state: number
        a: Введи свое число
        state: number
            intent: /число
            if: length ($parseTree._Number) !== 4 
                a: В числе должно быть не больше и не меньше 4х цифр. 
                go!: /number
            elseif: unique ($parseTree._Number) == false 
                a: Во введенном тобой числе есть повторяющиеся цифры, проверь, чтобы все цифры различались.
                go!: /number
            else:
                script: 
                    var cow = cows ($session.number, $parseTree._Number)
                    $session.bull = bulls ($session.number, $parseTree._Number)
                    $session.cow = cow - $session.bull
                if: $session.bull == 4
                    go!: /win
                else:
                    a: Быки: {{$session.bull}}. Коровы: {{$session.cow}} 
                    a: Продолжаем.
                    go!: /number
                
    state: win
        a: Ура! Ты отгадал число!
