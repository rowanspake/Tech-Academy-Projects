
# import abstract base classes module
from abc import ABC, abstractmethod

# create parent class, regular method, and abstract method
class animal(ABC):

    # regular method
    def look(self):
        print("Look, an animal!")

    # abstract method
    @abstractmethod
    def playWith(self, toy):
        pass

# child class defines abstract method
class cat(animal):
    def playWith(self,toy):
        print("The cat plays with the {}!".format(toy))


# object that utilizes both methods
jonesy = cat()
jonesy.look()
jonesy.playWith("feather")

