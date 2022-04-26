from sortedcontainers import SortedDict
from collections import deque
from price import Price
from ordertracker import OrderTracker


class MultiMap:
    """
    price: price - Price
    orderTracker: A double link list of order trackers of orders with the same price - deque([orderTracker1, orderTracker2, ...])
    """

    def __init__(self) -> None:
        self.d = SortedDict()

    def add(self, price: Price, orderTracker: OrderTracker) -> None:
        if price in self.d:
            self.d[price].append(orderTracker)
        else:
            self.d[price] = deque([orderTracker])

    def get(self, price: Price) -> deque:
        if price in self.d:
            return self.d[price]

    def pop(self) -> list:
        if not self.d:
            raise Exception("Empty MultiMap")
        price, orderTrackers = self.d.peekitem(0)
        orderTracker = orderTrackers.popleft()
        if not orderTrackers:
            self.d.popitem(0)
        return (
            orderTracker.orderId(),
            orderTracker.openQuantity(),
            price,
        )  # price: Price

    def peek(self):
        if self.d:
            return self.d.peekitem(0)

    def remove(self, price: Price, orderTracker: OrderTracker):
        """
        Remove the order tracker from the multimap
        Need to find the original order tracker first and then remove it
        """
        if price in self.d:
            self.d[price].remove(orderTracker)
            if len(self.d[price]) == 0:
                self.d.pop(price)

    def __str__(self):
        res = ""
        for price, orderTrackers in self.d.items():
            for orderTracker in orderTrackers:
                res += f"{orderTracker.orderId()}\t{orderTracker.openQuantity()}\t{price}\n"
        return res

    def __iter__(self):
        return iter(self.d.items())


# from decimal import Decimal

# ot1 = OrderTracker("004", 10)
# mm = MultiMap()
# mm.add(Price(Decimal("1.0"), False), OrderTracker("001", 10))
# mm.add(Price(Decimal("1.0"), False), ot1)
# mm.add(Price(Decimal("1.1"), False), OrderTracker("002", 10))
# mm.add(Price(Decimal("1.1"), False), OrderTracker("003", 10))
# print(mm)
# ot = mm.pop()
# print(ot)
# print(mm)
# print(mm.peekPrice())
# mm.remove(Price(Decimal("1.0"), False), ot1)
# print(mm)
