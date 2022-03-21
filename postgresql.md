postgresql C++ connector install
Follow instructions below
```
sudo apt-get update
sudo apt-get install postgresql
sudo apt-get install postgresql-client
sudo apt-get install libpq-dev
sudo apt-get install libpqxx-dev
sudo apt-get install postgresql-server-dev-12
```

The C++ environment is set up now.

To compile the main.cpp, you need to use
```
g++ -std=c++17 main.cpp -lpqxx -lpq
```
and it will generate an executable file named ```a.output```, use command ```./a.output``` to run it in terminal.
