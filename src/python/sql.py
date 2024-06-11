# when you run this code, it will create the crypto.db database, the crypto table, and insert the data from the data list into the table.
import sqlite3
connection = sqlite3.connect("crypto.db")
cursor = connection.cursor()
cursor.execute("create table crypto (name text, value integer)")

data = [
    ("BTC", 67000),
    ("ETH", 3700)
]
cursor.executemany("insert into crypto values (?,?)", data)
connection.commit()
for row in cursor.execute("select * from crypto"):
    print(row)
connection.close()