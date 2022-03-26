# NUS-Crypto-Exchange-FrontEnd

## Port Usage
* api server: 3000
* ui server: 8000

## Setup
* api
    * cd api
    * npm install
    * screen mongo
    * mongo NUSSwap scripts/init.mongo.js
    * screen npm start
* ui
    * cd ui
    * npm install
    * screen npm start
    * If need to recompile and rebundle, run following commands before ***screen npm start***:
        * npm run compile
        * npm run bundle
* Enter ***localhost:8000*** on web browser

## Functions
* Buy something (Buy/Sell button on ```Assets``` page)
* Sell something (Buy/Sell button on ```Assets``` page)
* Convert one type to another type (Buy/Sell button on ```Assets``` page)
* View information of all Cryptocurrency (```Trade``` page)
* User registration (```Register``` page)
* User login (```Login``` page)
* User /logout (```Personal information``` button)

## Database structure
* database name: coinbase
* collections:
    * types: Record predefined types that can be traded
        * id: *[Int]* Unique
        * typeName: *[String]* Unique
        * price: *[Float]*
    * wallet: Record what the user have bought
        * id: *[Int]* Unique
        * typeName: *[String]* Unique
        * balance: *[Float]*
    * history: Record the change process of balance
        * id: *[Int]* Unique
        * time: *[String]*
        * balance: *[Float]*
    * historyCounter: Record the number of history items
        * _id: history
        * current: *[Int]*
    * balance: Record balance
        * _id: balance
        * current: *[Float]*
    * users: Record the information of users
        * id: *[Int]* Unique
        * email: *[String]* Unique
        * firstName: *[String]*
        * lastName: *[String]*
        * photoURL: *[String]*
    * userCounter: Record the number of users
        * _id: users
        * current: *[Int]*
    
