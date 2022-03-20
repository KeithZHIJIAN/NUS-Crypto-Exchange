--Create OrderBook

CREATE TABLE OrderBook (
    OrderBookID int  NOT NULL PRIMARY KEY, 
    MARKET varchar(50)  NOT NULL
);

 
--Create Orders
CREATE TABLE Orders (
    OrderID int NOT NULL PRIMARY KEY,
    CurrentState varchar(50) NOT NULL,
    Quantity numeric,
    Price numeric, 
    StopPrice NUMERIC,
    IOC BIT,
    AON BIT,
    QuantityFilled NUMERIC, 
    QuantityOnMarket NUMERIC,
    FillCost NUMERIC,
    BuySell Bit,
    OrderBookID int NOT NULL,
    FOREIGN KEY (OrderBookID) REFERENCES OrderBook(OrderBookID)
    );
