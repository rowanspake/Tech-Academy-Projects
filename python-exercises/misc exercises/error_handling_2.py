

def func1():
    whoCall = input("\nWho you gonna call?\n")
    try:
        whoCall = "Ghostbusters!"
    except:
        print("You're gonna get slimed!\nTry again!")
    print("Bustin' makes me feel good!")



if __name__ == "__main__":
    func1()
