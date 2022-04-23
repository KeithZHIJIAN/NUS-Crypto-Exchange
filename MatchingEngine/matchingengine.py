from orderbook import OrderBook
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
        self._order_books = dict()
        self._orders = dict()
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
        symbol: str,
        orderType: str,
        buy: bool,
        quantity: int,
        price: Decimal,
        stopPrice: Decimal,
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
        id = self.generate_order_id()

        return Order(
            id,
            symbol,
            orderType,
            buy,
            quantity,
            price,
            stopPrice,
            ownerId,
            datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
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
        if msg_list[0] == "ADD":
            self.doAdd(msg_list)
        if msg_list[0] == "CANCEL":
            self.doCancel(msg_list)
        if msg_list[0] == "MODIFY":
            self.doModify(msg_list)

        # if msg_list[0] == "modify":
        #     order = {
        #         "type": msg_list[3],
        #         "side": msg_list[4],
        #         "quantity": Decimal(msg_list[5]),
        #         "price": Decimal(msg_list[6]),
        #         "trade_id": int(msg_list[7]),
        #     }
        #     orderbook = self._order_books[msg_list[1]]
        #     orderbook.modify_order(int(msg_list[2]), order)
        #     print(orderbook)

    def doAdd(self, msg_list):
        """
        Parse a message into a dictionary of order, and apply it to the order book.
        Args:
            msg (str): Message to parse.
        Returns:
            None
        """
        symbol = msg_list[1]

        if symbol not in self._order_books:
            self._order_books[symbol] = OrderBook(symbol)
        orderbook = self._order_books[symbol]

        orderType = msg_list[2]

        if msg_list[3] == "BID":
            buy = True
        elif msg_list[3] == "ASK":
            buy = False
        else:
            print("--Invalid side.")
            # Send error msg back to front end
            return False

        quantity = int(msg_list[4])
        if quantity == 0 or quantity > 1000000000:
            print("--Invalid quantity")
            return False

        price = Decimal(0) if orderType == "MARKET" else Decimal(msg_list[5])
        if price > 1000000000:
            print("--Invalid price")
            return False

        ownerId = int(msg_list[6])

        stopPrice = Decimal(msg_list[7]) if len(msg_list) > 7 else Decimal(0)

        order = self.assemble_order(
            symbol, orderType, buy, quantity, price, stopPrice, ownerId)

        self._orders[order.orderId()] = order
        orderbook.add(order)

        print(orderbook)

    def doCancel(self, msg_list):

        symbol = msg_list[1]

        if symbol not in self._order_books:
            print("--Invalid symbol")
            return

        orderbook = self._order_books[symbol]

        orderId = msg_list[2]
        if orderId in self._orders:
            order = self._orders.pop(orderId)
            orderbook.cancel(order)
            print(orderbook)

    def doModify(self, msg_list):
        """
        -   Modify, Symbol, Order ID, Quantity, Price
            modify ETHUSD 0000000002 0 64000 //change price to 64000 only
            modify ethusd 0000000002 100 0 //change quantity to 100 only
            modify ethusd 0000000002 100 64000 //change quantity to 100 and price to 64000
        """

        symbol = msg_list[1]

        if symbol not in self._order_books:
            print("--Invalid symbol")
            return
        orderbook = self._order_books[symbol]

        orderId = msg_list[2]
        if orderId in self._orders:
            order = self._orders[orderId]
        else:
            print("--Invalid order id")
            return

        quantity = int(msg_list[3])

        if quantity > 1000000000:
            print("--Invalid quantity")
            return False

        price = Decimal(msg_list[4])
        if price > 1000000000:
            print("--Invalid price")
            return
        orderbook.replace(
            order, quantity, price, datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        )

        print(orderbook)
