input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, 1)
})
let emptyobstacle = 0
let ticks = 0
let bird: game.LedSprite = null
let index = 0
let obstacles: game.LedSprite[] = []
bird = game.createSprite(0, 2)
bird.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    let mode = 0
    if (mode == 0) {
        while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.X) == 0) {
            obstacles.removeAt(0).delete()
        }
        for (let obstacle of obstacles) {
            obstacle.change(LedSpriteProperty.X, -1)
        }
        if (ticks % 3 == 0) {
            emptyobstacle = randint(0, 4)
            for (let index = 0; index <= 4; index++) {
                if (index != emptyobstacle) {
                    obstacles.push(game.createSprite(4, index))
                }
            }
        }
        for (let obstacle3 of obstacles) {
            if (obstacle3.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X) && obstacle3.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y)) {
                game.gameOver()
            }
        }
        ticks += 1
        basic.pause(1000)
    } else if (mode == 0) {
    	
    } input.onButtonPressed(Button.A, function () {
        version = 1
    })
    input.onButtonPressed(Button.B, function () {
        version = 0
    })
    let degrees = 0
    let version = 0
    version = 0
    basic.forever(function () {
        degrees = input.compassHeading()
        if (version == 1) {
            if (degrees < 45) {
                basic.showString("N")
                music.playMelody("C5 B A G F E D C ", 120)
            } else if (degrees < 135) {
                basic.showString("E")
            } else if (degrees < 225) {
                basic.showString("S")
            } else if (degrees < 315) {
                basic.showString("W")
            } else {
                basic.showString("N")
                music.playMelody("C5 B A G F E D C ", 120)
            }
        } else {
            if (degrees < 45) {
                basic.showString("N")
            } else if (degrees < 135) {
                basic.showString("E")
            } else if (degrees < 225) {
                basic.showString("S")
            } else if (degrees < 315) {
                basic.showString("W")
            } else {
                basic.showString("N")
            }
        }
    })

})
