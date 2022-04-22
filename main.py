#!/usr/bin/env python
from matchingengine import MatchingEngine
from rabbitmq import *

import sys, os

"""
Message format:
-   Add, Symbol, Type, Side, Quantity, Price, Trade ID, Stop Price (Optional)
    add ETHUSD limit ask 100 64000 001 (60000)
    add ethusd market ask 100 0 002 (60000)
    

-   Modify, Symbol, Order ID, Quantity, Price
    modify ETHUSD 0000000002 0 64000 //change price to 64000 only
    modify ethusd 0000000002 100 0 //change quantity to 100 only
    modify ethusd 0000000002 100 64000 //change quantity to 100 and price to 64000


-   Cancel, Symbol, Order ID
    cancel ETHUSD 0000000001
"""

# The front end will send valid order msg to the matching engine

if __name__ == "__main__":
    try:
        me = MatchingEngine.get_instance()
        listen_rabbitmq(me)
    except KeyboardInterrupt:
        print("Interrupted")
        try:
            sys.exit(0)
        except SystemExit:
            os._exit(0)
