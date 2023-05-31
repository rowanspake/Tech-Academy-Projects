c.execute("SELECT FirstName, LastName FROM People WHERE AGe > 30")
while True:
    row = c.fetchone()
    if row is None:
        break
    print(row)
