


# parent class
class Animal:
    def __init__(self, species, weight):
        self.species = species
        self.weight = weight

        def basicInfo(self):
            print(self.species, self.weight)

# child classes
class socialAnimal(Animal):
    def __init__(self, species, size, groupSize, eusociality):
        super().__init__(species,size)
        self.groupSize = groupSize
        self.eusociality = eusociality


    def aboutSocialAnimal(self):
        print("The {} is a social animal that is often found in groups of {} and {} a eusocial creature.".format(self.species,self.groupSize,self.eusociality))

class solitaryAnimal(Animal):
    def __init__(self, species, size, litterSize, parenting):
        super().__init__(species,size)
        self.litterSize = litterSize
        self.parenting = parenting

    def aboutSolitaryAnimal(self):
        print("The {} is a solitary animal.  After giving birth to {}, {}.".format(self.species,self.litterSize,self.parenting))

    

jaguar = solitaryAnimal("Jaguar","123–212 lbs","1 to 2 cubs","the cubs live with the mother for up to two years")

westernHoneyBee = socialAnimal("Western honey bee","10-20mm","40,000 to 80,000","is")


if __name__ == "__main__":
    jaguar.aboutSolitaryAnimal()
    westernHoneyBee.aboutSocialAnimal()
    
