import psycopg2

# create table orders (orderId varchar (10) UNIQUE NOT NULL, orderType varchar (10) NOT NULL, buySide boolean NOT NULL, quantity integer NOT NULL, price decimal NOT NULL, ownerId varchar(10) NOT NULL, lastModified timestamp not null);

# insert into orders(orderId, orderType, buySide, quantity, price, ownerId, lastModified)
# values('0000000002', 'limit', true, 100, 3491.87, '0000000001', '1999-01-08 04:05:06 -8:00');

# Connect to your postgres DB
conn = psycopg2.connect(
    host="localhost", database="orderdb", user="postgres", password="Exchange"
)

# Open a cursor to perform database operations
cur = conn.cursor()

# Execute a query
cur.execute("SELECT * FROM orders")

# Retrieve query results
records = cur.fetchall()

cur.close()

conn.close()
