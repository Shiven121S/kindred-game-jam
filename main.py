def on_up_pressed():
    if Game_Started:
        if mySprite.vy == 0:
            mySprite.vy = -212
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_a_pressed():
    if Game_Started:
        if mySprite.vy == 0:
            mySprite.vy = -212
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_menu_option_selected(option, index):
    if option == "How To Play":
        game.set_dialog_frame(img("""
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
        """))
        game.show_long_text("Move left and right with A/D or the LEFT and RIGHT ARROW keys. Jump with Space or the UP ARROW. Try to escape the oncoming wave of red anti-matter.",
            DialogLayout.CENTER)
    elif option == "Play":
        color.fade_to_white.start_screen_effect(2000)
        
        def on_after():
            textSprite.destroy()
            textSprite_2.destroy()
            blockMenu.set_controls_enabled(False)
            blockMenu.close_menu()
            color.start_fade(color.white, color.original_palette, 1000)
            
            def on_after2():
                game.show_long_text("At the very beginning, there was nothing. The world was a dark void devoid of any life or matter. 'Till the big bang occurred. A giant explosion, spewing out matter and anti-matter. You, the player are the first bit of matter to ever exist. Within a googolplex of a second of your creation, you have developed sentience. You look upon The world in front of you and see two approaching waves. A wave of matter, and one of anti-matter. Contact with the wave of anti-matter, will annihilate you. Fortunately the wave of antimatter, can only reach a certain distance, so you can escape it. The wave of matter is forming platforms, that you can use to escape the antimatter wave. Unfortunatly, there are also platforms of red antimatter, ",
                DialogLayout.CENTER)
                
                def on_after3():
                    pass
                timer.after(10, on_after3)
                
            timer.after(1010, on_after2)
            
        timer.after(3500, on_after)
        
blockMenu.on_menu_option_selected(on_menu_option_selected)

mySprite: Sprite = None
textSprite_2: TextSprite = None
textSprite: TextSprite = None
Game_Started = False
Game_Started = False
blockMenu.show_menu(["Play", "How To Play"],
    MenuStyle.LIST,
    MenuLocation.BOTTOM_HALF)
blockMenu.set_colors(1, 15)
textSprite = textsprite.create("At The Beginning...")
textSprite_2 = textsprite.create("There Was Nothing.")
textSprite.set_position(65, 30)
textSprite_2.set_position(65, 42)
animation.run_movement_animation(textSprite,
    animation.animation_presets(animation.bobbing),
    2000,
    True)
animation.run_movement_animation(textSprite_2,
    animation.animation_presets(animation.bobbing),
    2000,
    True)
