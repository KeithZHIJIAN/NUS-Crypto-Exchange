# NUS-Crypto-Exchange
This is a fintech lab project, aiming at building a simulated cryptocurrency exchange

To compile:
1. Open the src folder in terminal
2. Type in instructions as follow:
```g++ -c main.cpp```
```g++ -c util/Market.cpp```
```g++ -c util/Order.cpp```
```g++ -c util/Util.cpp```
```g++ -o output main.o Market.o Order.o Util.o -lmysqlclient```
```./output```
