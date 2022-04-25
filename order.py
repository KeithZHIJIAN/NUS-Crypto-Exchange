from decimal import Decimal


class Order:
    def __init__(
        self,
        orderId: str,
        symbol: str,
        orderType: str,
        buy: bool,
        quantity: int,
        price: Decimal,
        stopPrice: Decimal,
        ownerId: str,
        lastModTime: str,  # timestamp of order last modification
    ) -> None:
        self._orderId = orderId
        self._symbol = symbol
        self._orderType = orderType
        self._buy = buy
        self._quantity = quantity
        self._price = price
        self._stopPrice = stopPrice
        self._ownerId = ownerId
        self._lastModTime = lastModTime

    def isBuy(self) -> bool:
        return self._buy

    def symbol(self) -> str:
        return self._symbol

    def price(self) -> Decimal:
        return self._price

    def stopPrice(self) -> Decimal:
        return self._stopPrice

    def orderId(self) -> str:
        return self._orderId

    def orderType(self) -> str:
        return self._orderType

    def quantity(self) -> int:
        return self._quantity

    def ownerId(self) -> str:
        return self._ownerId

    def __str__(self) -> str:
        side = "buy" if self._buy else "sell"
        return f"{side} {self._quantity}@{self._price} created/modified by {self._ownerId} at {self.lastModTime}"

    def __repr__(self) -> str:
        return self.__str__()

    def modify_quantity(self, new_quantity: int, new_timestamp: str) -> bool:
        self.lastModTime = new_timestamp
        self._quantity = new_quantity
        return True

    def modify_price(self, new_price: Decimal, new_timestamp: str) -> bool:
        self.lastModTime = new_timestamp
        self._price = new_price
        return True
