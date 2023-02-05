# NUS-Crypto-Exchange

## Git
* https://github.com/KeithZHIJIAN/NUS-Crypto-Exchange.git

## Port Usage
* back end (restful): 4000
* back end (graphql): 4000
* front end: 3000

# Preparation

## Node Installation
 * ```sudo apt update```
 * ```sudo apt install curl```
 * ```curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash```
 * ```export NVM_DIR="$HOME/.nvm"```
 * ```[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm```
 * ```nvm install 14```
 * ```nvm alias default 14```

 ## PostgreSQL Setup
 * ```sudo apt update```
 * ```sudo apt install postgresql postgresql-contrib```
 * ```sudo systemctl start postgresql.service```
 
  Create a user and database table based on the ```.env``` file

## Python3 installation
* ```apt-get update```
* ```apt-get install python3```
* ```apt install python3-pip```

## Golang installation
* ```cd ~```
* ```wget https://go.dev/dl/go1.19.linux-amd64.tar.gz```
* ```sudo rm -rf /usr/local/go && sudo tar -C /usr/local -xzf go1.19.linux-amd64.tar.gz```
* ```export PATH=$PATH:/usr/local/go/bin```

# Deploy on local host
* ```git clone https://github.com/KeithZHIJIAN/NUS-Crypto-Exchange.git```
* ```cd NUS-Crypto-Exchange/```
* ```npm run clean //When you stuck at the python console, press ctrl+a+d```
* ```git clone https://github.com/sheshenk/nce-frontend.git```
* ```cd nce-frontend/```
* ```npm install```
* ```cd ../```
* ```git clone https://github.com/sheshenk/nce-backend.git```
* ```cd nce-backend/```
* ```npm install```
* ```cd ../```
* ```npm run web // when u see 🚀 Server ready at http://localhost:4000/graphql, press ctrl+a+d. when u see the website is fully loaded, press ctrl+a+d again.```
* ```git clone https://github.com/KeithZHIJIAN/nce-matchingengine.git```
* ```cd nce-matchingengine/```
* ```go mod tidy```
* ```* ```cp ../.golang .env```
* ```go run ./init/db/main.go ```
* ```screen go run ./cmd/main.go // when u see HistoricalMarketAgent: "Market history websocket connection estbalished" and "OrderBookAgentStart: Order Book websocket connection estbalished", the matching engine is set up.```

## Now access localhost:3000, u should be able to see the ui. If the order book is always loading, check if the matchinf engine is down.




