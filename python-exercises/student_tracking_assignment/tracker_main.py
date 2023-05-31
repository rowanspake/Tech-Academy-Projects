#!/usr/bin/python
# -*- coding: utf-8 -*-
#
# Python Ver:   3.11.0
#
# Author:       Rowan Spake
#
# Purpose:      Application for tracking student data
#               
#
# Tested OS:  This code was written and tested to work with Windows 10.


from tkinter import *
import tkinter as tk
from tkinter import messagebox

import tracker_gui
import tracker_func

class ParentWindow(Frame):
    def __init__(self,master,*args,**kwargs):
        Frame.__init__(self,master,*args,**kwargs)

        self.master = master
        self.master.minsize(400,350)
        self.master.minsize(400,350)

        tracker_func.center_window(self,400,350)
        self.master.title("Student Information")
        self.master.configure(bg="#F0F0F0")

        self.master.protocol("WM_DELETE_WINDOW", lambda: tracker_func.ask_quit(self))
        arg = self.master

        tracker_gui.load_gui(self)

if __name__ == "__main__":
    root = tk.Tk()
    App = ParentWindow(root)
    root.mainloop()
    
