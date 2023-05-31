import sqlite3

connection = sqlite3.connect(':memory:')
c = connection.cursor()
c.execute("CREATE TABLE IF NOT EXISTS Roster(Name TEXT, Species TEXT, IQ INT)")

values = [('Jean-Baptiste Zorg', 'Human', 122),
          ('Korben Dallas', 'Meat Popsicle', 100),
          ('Ak\'not', 'Mangalore', -5)]

c.executemany("INSERT INTO Roster VALUES(?,?,?);",values)

c.execute("UPDATE Roster SET Species=? WHERE Name=?",
          ('Human', 'Korben Dallas'))

connection.commit()

humans = c.execute("SELECT Name, IQ FROM Roster WHERE Species=?", ("Human",))
humans = c.fetchall()
print(humans)
