#!/usr/bin/python
# -*- coding: utf-8 -*-
#
# Python Ver:   3.11.0
#
# Author:       Rowan Spake
#
# Purpose:      Phonebook Demo. Demonstrating OOP, Tkinter GUI module,
#               using Tkinter Parent and Child relationships.
#
# Tested OS:  This code was written and tested to work with Windows 10.


from tkinter import *
import tkinter as tk
from tkinter import messagebox

#import other modules
import phonebook_gui
import phonebook_func

# Frame is the Tkinter frame class that our own class will inherit from
class ParentWindow(Frame):
    def __init__(self,master,*args,**kwargs):
        Frame.__init__(self,master,*args,**kwargs)

        # define master frame configuration
        self.master = master
        self.master.minsize(500,300)
        self.master.maxsize(500,300)
        # center_window will center the app on the screen
        phonebook_func.center_window(self,500,300)
        self.master.title("The Tkinter Phonebook Demo")
        self.master.configure(bg="#F0F0F0")
        #tkinter built-in method to catch clicks on upper corner X on Windows OS
        self.master.protocol("WM_DELETE_WINDOW", lambda: phonebook_func.ask_quit(self))
        arg = self.master

        # load in GUI widgets from separate module
        phonebook_gui.load_gui(self)

        # instantiate Tkinter menu dropdown object.
        # menu will appear at top of window
        menubar = Menu(self.master)
        filemenu = Menu(menubar,tearoff=0)
        filemenu.add_separator()
        filemenu.add_command(label="Exit", underline=1, accelerator="Ctrl+Q",command=lambda: phonebook_func.ask_quit(self))
        menubar.add_cascade(label="File",underline=0, menu=filemenu)
        helpmenu = Menu(menubar, tearoff=0) # defines the drop down column, tearoff=0 keeps it attatched to menubar
        helpmenu.add_separator()
        helpmenu.add_command(label="How to use this program")
        helpmenu.add_separator()
        helpmenu.add_command(label="About This Phonebook Demo") # add_command is a child menubar item of the add_cascade parent item
        menubar.add_cascade(label="Help", menu=helpmenu) # add_cascade is a parent menubar item (visible heading)
        """
            Apply the config method of the widget to display the menu
            We could pass in additional parameters for additional
            functionality or appearances
        """
        self.master.config(menu=menubar, borderwidth='1')
"""
    root = tk.Tk() instantiates the Tk.() root frame (window)
    App = ParentWindow(root) instantiates our own class as an App object
    root.mainloop() ensures the Tkinter class object, our window, to keep looping until closed
"""
if __name__ == "__main__":
    root = tk.Tk()
    App = ParentWindow(root)
    root.mainloop()












































        
