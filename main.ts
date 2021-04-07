scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Game_Started) {
        if (mySprite.vy == 0) {
            mySprite.vy = -200
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    game.over(false)
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
        game.showLongText("Move left and right with A/D or the LEFT and RIGHT ARROW keys. Jump with Space or the UP ARROW. Try to escape the oncoming wave of red anti-matter.", DialogLayout.Center)
    } else if (option == "Play") {
        color.FadeToWhite.startScreenEffect(2000)
        timer.after(3500, function () {
            textSprite.destroy()
            textSprite_2.destroy()
            blockMenu.setControlsEnabled(false)
            blockMenu.closeMenu()
            color.startFade(color.White, color.originalPalette, 1000)
            timer.after(1010, function () {
                game.showLongText("At the very beginning, there was nothing. The world was a dark void devoid of any life or matter. 'Till the big bang occurred. A giant explosion, spewing out matter and anti-matter. You, the player are the first bit of matter to ever exist. Within a googolplex of a second of your creation, you have developed sentience. You look upon The world in front of you and see two approaching waves. A wave of matter, and one of anti-matter. Contact with the wave of anti-matter, will annihilate you. Fortunately the wave of antimatter, can only reach a certain distance, so you can escape it. The wave of matter is forming platforms, that you can use to escape the antimatter wave. Unfortunatly, there are also platforms of red antimatter, ", DialogLayout.Center)
                timer.after(10, function () {
                    mySprite = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . 9 9 9 9 9 9 . . . . . 
                        . . . . 9 9 . . . . 9 9 . . . . 
                        . . . . 9 . . . . . . 9 . . . . 
                        . . . . 9 . . . . . . 9 . . . . 
                        . . . . 9 . . . . . . 9 . . . . 
                        . . . . 9 . . . . . . 9 . . . . 
                        . . . . 9 . . . . . . 9 . . . . 
                        . . . . 9 . . . . . . 9 . . . . 
                        . . . . 9 . . . . . . 9 . . . . 
                        . . . . 9 . . . . . . 9 . . . . 
                        . . . . 9 . . . . . . 9 . . . . 
                        . . . . 9 9 . . . . 9 9 . . . . 
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
let mySprite: Sprite = null
let textSprite_2: Sprite = null
let textSprite: Sprite = null
let Game_Started = false
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
