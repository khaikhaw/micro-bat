input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        music.playMelody("E B C5 A B G A F ", 120)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 3; index++) {
        pins.servoWritePin(AnalogPin.P2, 60)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P2, 120)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(1000)
    }
})
basic.forever(function () {
    basic.showString("Hello!")
})
