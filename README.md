# NUS-Crypto-Exchange
This is a NUS fintech lab project, aiming to build a simulated cryptocurrency exchange

Database Preparation:
1. Create a MySQL table ```orders```
2. Define header columns as ```| order_id | side | quantity | symbol  | price | type |```
3. Insert order information in header order.
4. Change the user name and password in ```src/sql/database.h```

To compile:
1. Open the src folder in terminal
2. Type in instructions as follow:
- ```g++ -c main.cpp```
- ```g++ -c util/Market.cpp```
- ```g++ -c util/Order.cpp```
- ```g++ -c util/Util.cpp```
- ```g++ -o output main.o Market.o Order.o Util.o -lmysqlclient```
- ```./output```

For now, these instructions are done mannually, a makefile will be made in the near future. 

To convert .o to .a linkable file, can do
ar rvs Market.a Market.o
