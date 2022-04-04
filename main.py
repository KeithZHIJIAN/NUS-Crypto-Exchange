#!/usr/bin/env python
from matchingengine import MatchingEngine
from rabbitmq import *

import sys, os

"""
Message format:
-   Add, Symbol, Type, Side, Quantity, Price, Trade ID
    add ETHUSD limit ask 100 64000 001
-   Modify, Symbol, Order ID, Type, Side, Quantity, Price, Trade ID
    modify ETHUSD 002 ETHUSD limit ask 100 64000 001
-   Cancel, Symbol, Side, Order ID
    cancel ETHUSD ask 002
"""

if __name__ == "__main__":
    try:
        me = MatchingEngine()
        listen_rabbitmq(me)
    except KeyboardInterrupt:
        print("Interrupted")
        try:
            sys.exit(0)
        except SystemExit:
            os._exit(0)
