input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
    basic.showLeds(`
        . . . # .
        . . . # .
        . # # # .
        . # . # .
        . # # # .
        `)
    basic.showLeds(`
        # # # # .
        # . . # .
        # # # # .
        # . # . .
        # . . # .
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # .
        # . . . .
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(9)
})
basic.showLeds(`
    # # . . .
    . . . # #
    . . # . .
    . . . # .
    . . # # #
    `)
