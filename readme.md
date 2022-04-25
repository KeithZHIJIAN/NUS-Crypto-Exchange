## March 2022

This is the first version of our python matching engine, which only supports limit order that can be partially executed.

The connection between matching engine and rabbitmq is built. The next coming part is to connect it with a persistent database e.g. mongodb/postgresql. In this system, orders are stored as records in the database, and only trackers are used to process data. After each execution of order, the system will store the trade history and modify records in database accordingly.

The we will add market order, aoc, ion features to the system.

If possible, a redis cache will be implemented to shorten the time for data retrieval.

Next semester, the matching will be converted to a JAVA version to apply multi-threading features.

## April 2022
Market order, stop price features are supported. Modify and cancel functionality are also implemented. The database interface is created, but the connection is not yet implemented.
