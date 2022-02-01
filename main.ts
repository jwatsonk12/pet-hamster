let Health = 10
basic.forever(function () {
    basic.showLeds(`
        . # # . .
        . . . . #
        # . . # .
        . # # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # # .
        . . . . .
        . . # # #
        . # . . #
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        . . # . .
        . . . . .
        . # # # .
        . . . . .
        `)
    if (Health == 0) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            . # . # .
            `)
        basic.pause(2000)
        basic.showString("You Dead FOO")
    }
})
basic.forever(function () {
    Health += -1
    basic.pause(2000)
})
