
# import the sqlite3 module
import sqlite3

# creates and connects to our new db
conn = sqlite3.connect('submission_assn.db')

# while connected, creates cursor object and executes creation of new table
# new table has autoincrementing integer ID column and a fileName column
with conn:
    cur = conn.cursor()
    cur.execute("CREATE TABLE IF NOT EXISTS tbl_files(ID INTEGER PRIMARY KEY AUTOINCREMENT,\
                col_fileName TEXT)")
    conn.commit()

#maintain connection to db
conn = sqlite3.connect('submission_assn.db')

# tuple of files to read through
filesList = ('information.docx', 'Hello.txt', 'myImage.png', \
             'myMovie.mpg','World.txt', 'data.pdf', 'myPhoto.jpg')

# loops through objects in previous tuple, searching for .txt extensions
for item in filesList:
    if item.endswith('.txt'):
        with conn:
            cur = conn.cursor()
            # inserts the values selected from the tuple into the table
            cur.execute("INSERT INTO tbl_files (col_fileName) VALUES (?)", (item,))
            # prints selected values
            print(item)
# closes the connection
conn.close()

