# NUS-Crypto-Exchange-FrontEnd

## Git
* https://github.com/HeWenbin-bobo/IT5007-Project-Public.git

## Port Usage
* api server: 3000
* ui server: 8000
* rabbitmq: 5672
* rabbitmq web management: 15672

## Setup
* ```git clone https://github.com/HeWenbin-bobo/IT5007-Project-Public.git```
* (Automatically setup)
    * ```cd IT5007-Project-Public```
    * ```npm run start```
        * only need to enter ```Ctrl+A+D``` when creating screen
            * one for mongodb
            * one for api server
            * one for ui server
* (Manully setup)
    * ```cd IT5007-Project-Public```
        * ```service rabbitmq-server restart```
    * (for api server)
        * ```cd api```
        * ```npm install```
        * ```screen mongod```
            * enter ```Ctrl+A+D```
        * ```mongo NUSSwap scripts/init.mongo.js```
        * ```screen npm start```
            * enter ```Ctrl+A+D```
    * (for ui server)
        * ```cd ui```
        * ```npm install```
        * ```screen npm start```
            * enter ```Ctrl+A+D```
        * If need to recompile, run following commands:
            * ```npm run fast```

## Web Browser
* Enter ```localhost:8000``` on web browser

## Functions
* User registration (```/#/register``` page)
    * You can choose to register through Google API
* User login (```/#/login``` page)
    * You can choose to login through Google API
* Buy something (Buy/Sell button on ```Assets``` tag)
* Sell something (Buy/Sell button on ```Assets``` tag)
* Convert one type to another type (Buy/Sell button on ```Assets``` tag)
* Topup money (on ```Assets``` tag)
* View information of all Cryptocurrency (```Trade``` tag)
* Template for blog (```Blog``` tag)
* Update profile (```Profile``` tag)
* Update password (```Setting``` tag)

## Database structure(MongoDB)
* database name: NUSSwap
* collections:
    * types: Record predefined types that can be traded
        * id: *[Int]* Unique
        * typeName: *[String]* Unique
        * price: *[Float]*
    * wallet: Record what the user have bought
        * id: *[Int]*
        * userId: *[Int]*
        * typeName: *[String]*
        * balance: *[Float]*
    * history: Record the change process of balance
        * id: *[Int]*
        * userId: *[Int]*
        * time: *[String]*
        * balance: *[Float]*
    * historyCounter: Record the number of history items
        * _id: *[String]*
        * current: *[Int]*
    * users: Record the information of users
        * id: *[Int]* Unique
        * email: *[String]* Unique
        * firstName: *[String]*
        * lastName: *[String]*
        * balance: *[Float]*
    * userCounter: Record the number of users
        * _id: *[String]*
        * current: *[Int]*
    * currentUser: Record the information of current user
        * _id: *[String]*
        * currentId: *[Int]*
        * email: *[String]*
    * orders: Record the information of orders
        * id: *[Int]*
        * userId: *[Int]*
        * currentState: *[String]*
        * symbol: *[String]*
        * quantity: *[Int]*
        * price: *[Double]*
        * amount: *[Double]*
    * orderCounters: Record the number of orders
        * _id: *[String]*
        * current: *[Int]*
    * rabbitmq: Record the information of rabbitmq messages
        * id: *[Int]*
        * userId: *[Int]*
        * state: *[String]*
        * symbol: *[String]*
        * orderType: *[String]*
        * side: *[String]*
        * quantity: *[Int]*
        * price: *[Double]*
        * tradeId: *[Int]*
        * note: *[String]*
    * rabbitmqCounters: Record the number of rabbitmq messages
        * _id: *[String]*
        * current: *[Int]*

## Message structure(RabbitMQ)
* ***state,symbol,orderType,side,quantity,price,note***
  
## RabbitMQ installation
* ```docker run -it --name rabbitmq -d -p 5672:5672 -p 15672:15672 -p 3000:3000 -p 5000:5000 -p 8000:8000 -dit ubuntu:lates```
* ```apt-get install erlang-nox```
* ```erl```
* ```apt-get update```
* ```apt-get install rabbitmq-server```
* ```service rabbitmq-server status```
* ```service rabbitmq-server start```
* ```rabbitmq-plugins enable rabbitmq_management```
* ```service rabbitmq-server restart```