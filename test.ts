input.onButtonPressed(Button.B, function () {
    picpixel.setPixelColor(neono, color)
    neono += 1
    if (neono >= 25) {
        neono = rainbow[colorindex]
        colorindex += 1
        colorindex = colorindex % rainbow.length
    }
})
input.onButtonPressed(Button.A, function () {
    neono = 0
    for (let カウンター = 0; カウンター <= 3; カウンター++) {
        for (let color of rainbow) {
            picpixel.setPixelColor(neono, color)
            neono += 1
        }
    }
})
let color = 0
let colorindex = 0
let rainbow: number[] = []
let neono = 0
picpixel.setBrightness(16)
picpixel.showColor(picpixel.colors(RGBColors.Green))
neono = 0
rainbow = [picpixel.colors(RGBColors.Red), picpixel.colors(RGBColors.Orange), picpixel.colors(RGBColors.Yellow), picpixel.colors(RGBColors.Green), picpixel.colors(RGBColors.Blue), picpixel.colors(RGBColors.Indigo), picpixel.colors(RGBColors.Violet)]
colorindex = 0
color = rainbow[colorindex]
basic.forever(function () {

})
