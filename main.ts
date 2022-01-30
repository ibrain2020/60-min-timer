input.onButtonPressed(Button.A, function () {
    if (Timer == Run) {
        // 進入暫停模式
        Timer = Pause
    } else {
        // 進入倒數停模式
        Timer = Run
    }
})
input.onButtonPressed(Button.B, function () {
    Minutes = Min_setting
    Seconds = 59
    // 進入終止停模式
    Timer = Stop
    basic.showString("T")
})
let Timer = 0
let Stop = 0
let Run = 0
let Pause = 0
let Seconds = 0
let Minutes = 0
let Min_setting = 0
Min_setting = 5
Minutes = Min_setting
Seconds = 59
let End = 3
Pause = 2
Run = 1
Stop = 0
Timer = Stop
basic.showString("Timer")
basic.showString("T")
basic.forever(function () {
    // 如果在倒數模式繼續循環
    while (Timer == Run) {
        // 如果倒數時間大於1分鐘
        if (Minutes > 1) {
            // 調教重複次數,令每次閃動剛好在1分鐘
            for (let index = 0; index < 52; index++) {
                // 在倒數期間有機會按了暫停,所以必須要測試是否還在倒數中
                if (Timer == Run) {
                    basic.showNumber(Minutes)
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        `)
                } else {
                    break;
                }
            }
            // 在倒數期間有機會按了暫停,所以必須要測試是否還在倒數中
            if (Timer == Run) {
                Minutes += -1
            }
        } else {
            // 如果倒數時間>=10秒
            if (Seconds >= 10) {
                // 在倒數期間有機會按了暫停,所以必須要測試是否還在倒數中
                if (Timer == Run) {
                    basic.showNumber(Seconds)
                    // 如果倒數時間>=10秒, 每次顯示秒數後減3秒
                    Seconds += -3
                    // 調教暫停時間,令每次顯示秒數剛好在3秒
                    basic.pause(280)
                } else {
                    break;
                }
            } else if (Seconds >= 0) {
                // 在倒數期間有機會按了暫停,所以必須要測試是否還在倒數中
                if (Timer == Run) {
                    basic.showNumber(Seconds)
                    // 調教暫停時間,令每次顯示秒數剛好在1秒
                    basic.pause(350)
                } else {
                    break;
                }
                // 在倒數期間有機會按了暫停,所以必須要測試是否還在倒數中
                if (Timer == Run) {
                    Seconds += -1
                }
            } else {
                // 倒數完成, 進入End模式
                Timer = End
                Minutes = Min_setting
                Seconds = 59
                basic.clearScreen()
            }
        }
    }
    if (Timer == Pause) {
        basic.showString("Pause")
    } else if (Timer == End) {
        basic.showString("End")
    } else if (Timer == Stop) {
        basic.showString("T")
    }
})
