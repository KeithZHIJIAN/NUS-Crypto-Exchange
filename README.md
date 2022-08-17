# NUS-Crypto-Exchange

## Git
* https://github.com/KeithZHIJIAN/NUS-Crypto-Exchange.git

## Port Usage
* backend server: 4000
* frontend server: 3000
* rabbitmq: 5672
* rabbitmq web management: 15672

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

## RabbitMQ Installation
* ```apt-get install erlang-nox```
* ```erl```
* ```apt-get update```
* ```apt-get install rabbitmq-server```
* ```service rabbitmq-server start```
* ```service rabbitmq-server status```
* ```rabbitmq-plugins enable rabbitmq_management```
* ```service rabbitmq-server restart```

## Python3 installation
* ```apt-get update```
* ```apt-get install python3```
* ```apt install python3-pip```
* ```pip install sortedcontainers```
* ```pip install pika```
* ```pip install sqlalchemy```
* ```pip install pandas```

## Golang installation
* ```cd ~```
* ```wget https://go.dev/dl/go1.19.linux-amd64.tar.gz```
* ```sudo rm -rf /usr/local/go && sudo tar -C /usr/local -xzf go1.19.linux-amd64.tar.gz```
* ```export PATH=$PATH:/usr/local/go/bin```

## To run on localhost:3000
* ```cd NUS-Crypto-Exchange```
* ```npm start```

## Already had a nginx
* ```cd NUS-Crypto-Exchange```
* ```npm run production```
