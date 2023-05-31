#Import tkinter module
import tkinter as tk
from tkinter import *
#Import webbrowser module
import webbrowser

#Define our GUI
class ParentWindow(Frame):
    def __init__(self, master):
        Frame.__init__(self, master)
        #Set title of our GUI window
        self.master.title("Web Page Generator")
        #Create a label for our input field
        self.input_label = Label(master, text="Enter custom text or clickthe Default HTML Page button")
        self.input_label.grid(row=0, column=0, padx=(10,10), pady=(10,0))
        #Create custom text entry field
        self.text_entry = Entry(width=125)
        self.text_entry.grid(row=1, column=0, columnspan=5, padx=(30,10), pady=(10,10))
        #Create button for generating a default webpage
        self.default_btn = Button(self.master, text="Default HTML Page", width=30, height=2, command=self.defaultHTML)
        self.default_btn.grid(row=2, column=3, padx=(10,10) , pady=(10,10))
        #Create button for generating custom webpage
        self.custom_btn = Button(self.master, text="Submit Custom Text", width=30, height=2, command=self.customText)
        self.custom_btn.grid(row=2, column=4, padx=(10,10) , pady=(10,10))

    #Function for deploying default webpage
    def defaultHTML(self):
        #Defaul webpage text
        htmlText = "Stay tuned for our amazing summer sale!"
        #Create object that opens a new webpage
        htmlFile = open("index.html", "w")
        #Define content for our default webpage
        htmlContent = "<html>\n<body>\n<h1>" + htmlText + "</h1>\n</body>\n</html>"
        #Write the content in the page
        htmlFile.write(htmlContent)
        htmlFile.close()
        #Open and display our webpage
        webbrowser.open_new_tab("index.html")
    #Function for deploying custom webpage
    def customText(self):
        #Get input from text entry field
        inputText = self.text_entry.get()
        #Create object that opens a new webpage
        htmlFile = open("index.html", "w")
        #Define content for our custom webpage
        htmlContent = "<html>\n<body>\n<h1>" + inputText + "</h1>\n</body>\n</html>"
        #Write the content in the page
        htmlFile.write(htmlContent)
        htmlFile.close()
        #Open and display our webpage
        webbrowser.open_new_tab("index.html")
        


if __name__ == "__main__":
    root=tk.Tk()
    App = ParentWindow(root)
    root.mainloop()
