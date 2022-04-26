from decimal import Decimal
from order import Order


class OrderTracker:
    def __init__(self, order: Order) -> None:
        self._orderId = order.orderId()
        self._openQuantity = order.quantity()
        self._fillCost = Decimal(0)  # to track the executed cost of the order
        self._order = order

    def order(self) -> Order:
        return self._order

    def orderId(self) -> str:
        return self._orderId

    def openQuantity(self) -> int:
        return self._openQuantity

    def filled(self) -> bool:
        return self._openQuantity == 0

    def fill(self, price: Decimal, quantity: int) -> None:
        if self.openQuantity() < quantity:
            print("OrderTracker: fill quantity exceeds open quantity")
            return
        self._fillCost += price * quantity
        self._openQuantity -= quantity

    def change_qty(self, delta: int) -> None:
        if delta < 0 and self._openQuantity < -delta:
            print("OrderTracker: change quantity exceeds open quantity")
            return
        self._openQuantity += delta

    def __str__(self) -> str:
        return f"id:{self._orderId} open quantity:{self._openQuantity}"

    def __repr__(self) -> str:
        return self.__str__()
