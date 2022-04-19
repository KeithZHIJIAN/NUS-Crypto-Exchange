import psycopg2
import pandas as pd 

# create table orders (orderId varchar (10) UNIQUE NOT NULL, orderType varchar (10) NOT NULL, buySide boolean NOT NULL, quantity integer NOT NULL, price decimal NOT NULL, ownerId varchar(10) NOT NULL, lastModified timestamp not null);

# insert into orders(orderId, orderType, buySide, quantity, price, ownerId, lastModified)
# values('0000000002', 'limit', true, 100, 3491.87, '0000000001', '1999-01-08 04:05:06 -8:00');

# Connect to your postgres DB
conn = psycopg2.connect(
   database="postgres", user='postgres', password='ABCabc1231000', host='127.0.0.1', port= '5432'
)

# Open a cursor to perform database operations
cur = conn.cursor()

#define CRUD functions
# Read Function 
def getAllOrders():
    orders = pd.read_sql_query(
        '''SELECT * FROM orders''', conn)
    return orders 

#Create Function 
def createOrder():
    query = "INSERT INTO orders values('0000000001', 'limit', true, 110, 3492.87, '0000000002', '1999-07-08 04:05:06 -8:00')"
    cur.execute(query)
    conn.commit()
    print('rows inserted')

#Update Functon 
def updateOrder(new_qty, orderId):
    query = "UPDATE orders SET quantity = %s WHERE orderId= %s"
    val = (new_qty, orderId)
    cur.execute(query, val)
    conn.commit()
    print(orderId, "updated")

#Delete Function 
def deleteOrder(orderId):
    query = "DELETE FROM orders WHERE orderId= %s"
    val = (orderId,)
    cur.execute(query, val)
    conn.commit()
    print(orderId, "deleted")
#Testing 
# getAllOrders()
# createOrder()
# updateOrder(120, '0000000001' )
# deleteOrder('0000000001')

cur.close()

conn.close()
