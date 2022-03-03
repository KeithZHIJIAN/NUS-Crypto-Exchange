# NUS-Crypto-Exchange
This is a fintech lab project, aiming at building a simulated cryptocurrency exchange

To compile:
1. Open the src folder in terminal
2. Type in instructions as follow:
```g++ -c main.cpp```\n
```g++ -c util/Market.cpp```\n
```g++ -c util/Order.cpp```\n
```g++ -c util/Util.cpp```\n
```g++ -o output main.o Market.o Order.o Util.o -lmysqlclient```\n
```./output```\n
