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
    print(orders)
    return orders 

#get owner orders
def getOwnerOrders(ownerId):
    query= "SELECT * FROM orders WHERE ownerId= %s"
    val = (ownerId,)
    cur.execute(query, val)
    conn.commit()
    orders = pd.DataFrame(cur.fetchall())
    print(orders)
    return orders 

#Create Function 
def createOrder(orderId, orderType, buySide, quantity, price, ownerId, lastModified ):
    query = "INSERT INTO orders values(%s,%s,%s,%s,%s,%s,%s)"
    val = (orderId, orderType, buySide, quantity, price, ownerId, lastModified)
    cur.execute(query,val)
    conn.commit()
    print('rows inserted')

#add an order --> some other order will be matched --> update qty of the order matched 

#Update Functon 
def updateQty(new_qty, orderId):
    query = "UPDATE orders SET quantity = %s WHERE orderId= %s"
    val = (new_qty, orderId)
    cur.execute(query, val)
    conn.commit()
    print(orderId, "updated")

#Modify Prices
def updatePrice(new_price, orderId):
    query = "UPDATE orders SET price = %s WHERE orderId= %s"
    val = (new_price, orderId)
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
# getOwnerOrders('0000000001') 
#createOrder('0000000009', 'limit', True, 100, 3491.87, '0000000001', '1999-09-08 04:05:06 -8:00')
# updateQty(120, '0000000001' )
# deleteOrder('0000000001')

cur.close()

conn.close()
