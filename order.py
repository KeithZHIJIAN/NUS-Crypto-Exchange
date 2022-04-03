from decimal import Decimal


class Order:
    def __init__(
        self,
        orderId: str,
        orderType: str,
        buy: bool,
        quantity: int,
        price: Decimal,
        ownerId: str,
        lastModTime: str,  # timestamp of order last modification
    ) -> None:
        self._orderId = orderId
        self._orderType = orderType
        self._buy = buy
        self._quantity = quantity
        self._price = price
        self._ownerId = ownerId
        self._lastModTime = lastModTime

    def isBuy(self) -> bool:
        return self._buy

    def price(self) -> Decimal:
        return self._price

    def orderId(self) -> str:
        return self._orderId

    def quantity(self) -> int:
        return self._quantity

    def __str__(self) -> str:
        side = "buy" if self._buy else "sell"
        return f"{side} {self.quantity}@{self.price} created/modified by {self._ownerId} at {self.lastModTime}"

    def __repr__(self) -> str:
        return self.__str__()

    def modify_quantity(self, new_quantity: int, new_timestamp: str) -> bool:
        self.lastModTime = new_timestamp
        self.quantity = new_quantity
        return True

    def modify_price(self, new_price: Decimal, new_timestamp: str) -> bool:
        self.lastModTime = new_timestamp
        self.price = new_price
        return True
