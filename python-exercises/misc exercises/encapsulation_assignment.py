
# create class
class secretPants:

    # this is a private attribute
    __size = 32

    # attributes for new instances are protected
    def __init__(self, brand, material):
        self._brand = brand
        self._material = material

    # prints class attributes
    def pantsInfo(self):
        print("Size",self.__size,self._brand,self._material)


#an instance of the class, and printing it    
levis = secretPants("Levis", "denim")
levis.pantsInfo()
