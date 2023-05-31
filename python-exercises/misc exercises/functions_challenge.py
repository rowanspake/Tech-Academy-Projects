


testSentence = "Ghostbusters!"

def testFunction():
    go = True
    while go:
        slimer = input("Who are you going to call? ")
        if slimer == testSentence:
            print('\n                               .-~-.\n                              .    `.\n                           .-~~~`.    `.\n                         .::   .. `     ;\n                         i/ : /  \       )\n                         ( o: !o !       `·.\n                         (`/ . `-\         `.\n                          );°`. `:::·         `.\n                        .:/    \                )\n                       /( `--.._          .-.  ( \n                     . :`-.____. )      ( . `..\n                   .:|.::.                `·:   `. \n                 ./:·!:. .  ...::·           `·.. `.\n                /.`)  ;::::::::::.              /`·.`·.\n                `·  (::::                   .    )  `.\n                      `··::.       .....    ./     ·\  |\n                          `:::::::::::::::..         `·\n                            `~···::::···~\n                ')
            go = False
        else:
            print("Try again!")
            go


testFunction()
