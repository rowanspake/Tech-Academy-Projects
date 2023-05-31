

def getNum():
    x=input("Input numerator: ")
    y=input("Input denominator: ")
    return x,y

def div():
    x,y = getNum()
    try:
        z=(int(x)/int(y))
    except ZeroDivisionError:
        print("You can't divide by zero!")
    print(z)
    

div()
