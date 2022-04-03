from orderbook import OrderBook
from collections import defaultdict
from decimal import Decimal
from order import Order
from datetime import datetime


class MatchingEngine(object):
    __instance = None

    @classmethod
    def get_instance(cls):
        """creates a singleton instance of MatchingEngine

        Args: None
        Returns:
            MatchingEngine instance
        """
        if MatchingEngine.__instance is None:
            MatchingEngine()
        return MatchingEngine.__instance

    def __init__(self):
        """inits MatchingEngine

        Args: None
        Returns: None
        Raises:
            Exception -> This is a singleton.
        """
        if MatchingEngine.__instance is not None:
            raise Exception("This is a singleton.")

        self._nextOrderIndex = 1
        self.order_books = dict()
        MatchingEngine.__instance = self

    def generate_order_id(self):
        """
        Generate an order id.
        Args:
            None
        Returns:
            str: order id
        """
        res = self._nextOrderIndex
        self._nextOrderIndex += 1
        return str(res).zfill(10)

    def assemble_order(
        self,
        orderType: str,
        buy: bool,
        quantity: int,
        price: Decimal,
        ownerId: str,
    ):
        """
        Assemble an order.
        Args:
            orderType (str): Type of order.
            buy (bool): True if buy order, False if sell order.
            quantity (int): Quantity of order.
            price (Decimal): Price of order.
            ownerId (str): Id of owner of order.
        Returns:
            Order: Order object.
        """

        return Order(
            self.generate_order_id(),
            orderType,
            buy,
            quantity,
            price,
            ownerId,
            # Getting the current date and time
            str(datetime.now()),
        )

    def apply(self, msg):
        """
        Parse a message into a dictionary of order, and apply it to the order book.
        Args:
            msg (str): Message to parse.
        Returns:
            None
        """
        print(" [x] Received %r" % msg)
        msg_list = msg.decode("UTF-8").upper().split()
        if msg_list[3] == "BID":
            buy = True
        elif msg_list[3] == "ASK":
            buy = False
        else:
            print("Error: Invalid side.")
            return
        if msg_list[0] == "ADD":
            order = self.assemble_order(
                orderType=msg_list[2],
                buy=buy,
                quantity=int(msg_list[4]),
                price=Decimal(msg_list[5]),
                ownerId=msg_list[6],
            )
            if msg_list[1] not in self.order_books:
                self.order_books[msg_list[1]] = OrderBook(msg_list[1])
            orderbook = self.order_books[msg_list[1]]
            orderbook.add_order(order)
            print(orderbook)
        # if msg_list[0] == "cancel":
        #     orderbook = self.order_books[msg_list[1]]
        #     orderbook.cancel_order(msg_list[2], int(msg_list[3]))
        #     print(orderbook)
        # if msg_list[0] == "modify":
        #     order = {
        #         "type": msg_list[3],
        #         "side": msg_list[4],
        #         "quantity": Decimal(msg_list[5]),
        #         "price": Decimal(msg_list[6]),
        #         "trade_id": int(msg_list[7]),
        #     }
        #     orderbook = self.order_books[msg_list[1]]
        #     orderbook.modify_order(int(msg_list[2]), order)
        #     print(orderbook)
