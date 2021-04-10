scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(false, effects.dissolve)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(false, effects.dissolve)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile38`, function (sprite, location) {
    color.FadeToWhite.startScreenEffect(1000)
    timer.after(1500, function () {
        color.startFade(color.White, color.originalPalette, 500)
        tiles.setTileAt(tiles.getTileLocation(0, 0), assets.tile`myTile30`)
        music.setVolume(0)
        game.over(true, effects.starField)
        timer.after(300, function () {
            music.setVolume(20)
            music.playTone(392, music.beat(BeatFraction.Half))
            timer.background(function () {
                music.playTone(311, music.beat(BeatFraction.Half))
            })
            timer.background(function () {
                music.playTone(262, music.beat(BeatFraction.Half))
            })
        })
    })
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Game_Started) {
        if (mySprite.vy == 0) {
            mySprite.vy = -150
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    game.over(false, effects.dissolve)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    color.FadeToWhite.startScreenEffect(750)
    timer.after(850, function () {
        tiles.setTilemap(tilemap`level5`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(39, 2))
        color.startFade(color.White, color.originalPalette, 500)
    })
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Game_Started) {
        if (mySprite.vy == 0) {
            mySprite.vy = -150
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    game.over(false, effects.dissolve)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    color.FadeToWhite.startScreenEffect(750)
    timer.after(850, function () {
        color.startFade(color.White, color.originalPalette, 500)
        tiles.setTilemap(tilemap`level2`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(39, 2))
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.over(false, effects.dissolve)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    game.over(false, effects.dissolve)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.over(false, effects.dissolve)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    game.over(false, effects.dissolve)
})
blockMenu.onMenuOptionSelected(function (option, index) {
    if (option == "How To Play") {
        game.setDialogFrame(img`
            666666666666666666666666
            699999999999999999999996
            696666666666666666666696
            666666666666666666666666
            868118666666666666811868
            868118666666666666811868
            868888111111111111888868
            866611111111111111116668
            866611111111111111116668
            866611111111111111116668
            866611111111111111116668
            866611111111111111116668
            866611111111111111116668
            866611111111111111116668
            866611111111111111116668
            866611111111111111116668
            866611111111111111116668
            866611111111111111116668
            868118111111111111811868
            868118666666666666811868
            868888666666666666888868
            886666666666666666666688
            888888888888888888888888
            888888888888888888888888
            `)
        game.showLongText("Move left and right with A/D or the LEFT and RIGHT ARROW keys. Jump with Space or the UP ARROW. Hold down D or DOWN ARROW key to crouch. Try to avoid the anti-matter platforms.", DialogLayout.Center)
    } else if (option == "Play") {
        color.FadeToWhite.startScreenEffect(1000)
        timer.after(3500, function () {
            textSprite.destroy()
            textSprite_2.destroy()
            blockMenu.setControlsEnabled(false)
            blockMenu.closeMenu()
            color.startFade(color.White, color.originalPalette, 600)
            timer.after(1010, function () {
                game.showLongText("You are an test subject, forced to travel to alternate dimensions. You have entered dimension #384041, one of the few dimensions which has just experienced the big bang. At its beginning there is nothing, a near empty void of red anti-matter and some white regular matter. As soon as you enter the dimension, your portal fragments, stranding you. You must travel to the center of the big bang to be able to return to your dimension.", DialogLayout.Center)
                timer.after(10, function () {
                    mySprite = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . 9 9 9 9 9 9 . . . . . 
                        . . . . 9 9 f f f f 9 9 . . . . 
                        . . . . 9 f f f f f f 9 . . . . 
                        . . . . 9 f f f f f f 9 . . . . 
                        . . . . 9 f f f f f f 9 . . . . 
                        . . . . 9 f f f f f f 9 . . . . 
                        . . . . 9 f f f f f f 9 . . . . 
                        . . . . 9 f f f f f f 9 . . . . 
                        . . . . 9 f f f f f f 9 . . . . 
                        . . . . 9 f f f f f f 9 . . . . 
                        . . . . 9 f f f f f f 9 . . . . 
                        . . . . 9 9 f f f f 9 9 . . . . 
                        . . . . . 9 9 9 9 9 9 . . . . . 
                        `, SpriteKind.Player)
                    controller.moveSprite(mySprite, 65, 0)
                    tiles.setTilemap(tilemap`level1`)
                    scene.cameraFollowSprite(mySprite)
                    tiles.placeOnTile(mySprite, tiles.getTileLocation(44, 3))
                    mySprite.ay = 150
                    Game_Started = true
                })
            })
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    color.FadeToWhite.startScreenEffect(750)
    timer.after(850, function () {
        color.startFade(color.White, color.originalPalette, 500)
        tiles.setTilemap(tilemap`level4`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(39, 2))
    })
})
let mySprite: Sprite = null
let textSprite_2: Sprite = null
let textSprite: Sprite = null
let Game_Started = false
let Music_Playing = false
Game_Started = false
blockMenu.showMenu(["Play", "How To Play"], MenuStyle.List, MenuLocation.BottomHalf)
blockMenu.setColors(1, 15)
textSprite = textsprite.create("At The Beginning...")
textSprite_2 = textsprite.create("There Was Nothing.")
textSprite.setPosition(65, 30)
textSprite_2.setPosition(65, 42)
animation.runMovementAnimation(
textSprite,
animation.animationPresets(animation.bobbing),
2000,
true
)
animation.runMovementAnimation(
textSprite_2,
animation.animationPresets(animation.bobbing),
2000,
true
)
game.onUpdate(function () {
    if (Game_Started) {
        if (!(Music_Playing)) {
            timer.background(function () {
                Music_Playing = true
                music.playTone(392, music.beat(BeatFraction.Half))
                music.playTone(311, music.beat(BeatFraction.Half))
                music.playTone(262, music.beat(BeatFraction.Half))
                music.playTone(311, music.beat(BeatFraction.Half))
                music.playTone(262, music.beat(BeatFraction.Half))
                music.playTone(392, music.beat(BeatFraction.Half))
                music.playTone(262, music.beat(BeatFraction.Half))
                music.playTone(392, music.beat(BeatFraction.Half))
                music.playTone(311, music.beat(BeatFraction.Half))
                music.playTone(392, music.beat(BeatFraction.Half))
                music.playTone(262, music.beat(BeatFraction.Half))
                music.playTone(311, music.beat(BeatFraction.Half))
                Music_Playing = false
            })
        }
    }
})
game.onUpdate(function () {
    if (controller.down.isPressed()) {
        if (Game_Started) {
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 9 9 9 9 9 9 . . . . . 
                . . . . 9 9 f f f f 9 9 . . . . 
                . . . . 9 f f f f f f 9 . . . . 
                . . . . 9 f f f f f f 9 . . . . 
                . . . . 9 f f f f f f 9 . . . . 
                . . . . 9 f f f f f f 9 . . . . 
                . . . . 9 9 f f f f 9 9 . . . . 
                . . . . . 9 9 9 9 9 9 . . . . . 
                `)
            controller.moveSprite(mySprite, 45, 0)
            mySprite.ay = 220
        }
    }
})
game.onUpdate(function () {
    if (!(controller.down.isPressed())) {
        if (Game_Started) {
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 9 9 9 9 9 9 . . . . . 
                . . . . 9 9 f f f f 9 9 . . . . 
                . . . . 9 f f f f f f 9 . . . . 
                . . . . 9 f f f f f f 9 . . . . 
                . . . . 9 f f f f f f 9 . . . . 
                . . . . 9 f f f f f f 9 . . . . 
                . . . . 9 f f f f f f 9 . . . . 
                . . . . 9 f f f f f f 9 . . . . 
                . . . . 9 f f f f f f 9 . . . . 
                . . . . 9 f f f f f f 9 . . . . 
                . . . . 9 f f f f f f 9 . . . . 
                . . . . 9 9 f f f f 9 9 . . . . 
                . . . . . 9 9 9 9 9 9 . . . . . 
                `)
            controller.moveSprite(mySprite, 65, 0)
            mySprite.ay = 150
        }
    }
})
