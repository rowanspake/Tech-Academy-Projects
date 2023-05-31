


# parent class
class Animal:
    def __init__(self, species, size):
        self.species = species
        self.size = size

        #method
        def aboutAnimal(self):
            print(self.species, self.size)

# child classes
class socialAnimal(Animal):
    def __init__(self, species, size, groupSize, eusociality):
        super().__init__(species,size)
        self.groupSize = groupSize
        self.eusociality = eusociality

    #polymorphic method
    def aboutAnimal(self):
        print("The {} is a social animal that is often found in groups of {} and {} a eusocial creature.\n".format(self.species,self.groupSize,self.eusociality))

class solitaryAnimal(Animal):
    def __init__(self, species, size, litterSize, parenting):
        super().__init__(species,size)
        self.litterSize = litterSize
        self.parenting = parenting

    #polymorphic method
    def aboutAnimal(self):
        print("The {} is a solitary animal.  After giving birth to {}, {}.\n".format(self.species,self.litterSize,self.parenting))

    
# instance of the first child class
jaguar = solitaryAnimal("Jaguar","123–212 lbs","1 to 2 cubs","the cubs live with the mother for up to two years")

# instance of the second child class
westernHoneyBee = socialAnimal("Western honey bee","10-20mm","40,000 to 80,000","is")


if __name__ == "__main__":
    # calling on the polymorphic methods from the child classes
    jaguar.aboutAnimal()
    westernHoneyBee.aboutAnimal()
    
