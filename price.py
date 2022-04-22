from decimal import Decimal

MARKET_ORDER_PRICE = 0


class Price:
    def __init__(self, price: Decimal, buy: bool) -> None:
        self._price = price  # Market Order has a price of MARKET_ORDER_PRICE
        self._buy = buy

    def matches(self, rhs: Decimal) -> bool:
        if self._price == rhs:
            return True
        if self._buy:
            return rhs < self._price or self._price == MARKET_ORDER_PRICE
        return self._price < rhs or rhs == MARKET_ORDER_PRICE

    def __eq__(self, rhs: Decimal) -> bool:
        if isinstance(rhs, Price):
            return self == rhs._price
        elif isinstance(rhs, Decimal):
            return self._price == rhs

    def __ne__(self, rhs: Decimal) -> bool:
        if isinstance(rhs, Price):
            return not self == rhs._price
        elif isinstance(rhs, Decimal):
            return not self._price == rhs

    def __lt__(self, rhs: Decimal) -> bool:
        if isinstance(rhs, Price):
            return self < rhs._price
        elif isinstance(rhs, Decimal):
            if self._price == MARKET_ORDER_PRICE:
                return rhs != MARKET_ORDER_PRICE
            elif rhs == MARKET_ORDER_PRICE:
                return False
            elif self._buy:
                # Buying: Highest prices first.
                return rhs < self._price
            else:
                # Selling: lowest prices first
                return self._price < rhs

    def __gt__(self, rhs: Decimal) -> bool:
        if isinstance(rhs, Price):
            return self > rhs._price
        elif isinstance(rhs, Decimal):
            return self._price != MARKET_ORDER_PRICE and (
                (rhs == MARKET_ORDER_PRICE)
                or ((rhs > self._price) if self._buy else (self._price > rhs))
            )

    def __le__(self, rhs: Decimal) -> bool:
        return self < rhs or self == rhs

    def __ge__(self, rhs: Decimal) -> bool:
        return self > rhs or self == rhs

    def price(self):
        return self._price

    def isBuy(self):
        return self._buy

    def isMarket(self):
        return self._price == MARKET_ORDER_PRICE

    def __str__(self):
        return f"{'Buy' if self.isBuy() else 'Sell'} at {'Market Price' if self.isMarket() else self.price()}"

    def __repr__(self):
        return self.__str__()

    def __hash__(self) -> int:
        return hash(self.price())


# p1 = Price(Decimal("1.0"), True)
# p2 = Price(Decimal("1.1"), True)
# p3 = Price(Decimal("1.0"), True)
# p4 = Price(Decimal("1.2"), True)

# from sortedcontainers import SortedDict

# d = SortedDict()
# d[p1] = [1, 2, 3]
# d[p2] = [4, 5, 6]
# d[p3] = [7, 8, 9]
# d[p4] = [10, 11, 12]
# print(d)
# d.clear()
# p1 = Price(Decimal("1.0"), False)
# p2 = Price(Decimal("1.1"), False)
# p3 = Price(Decimal("1.0"), False)
# p4 = Price(Decimal("1.2"), False)
# d[p1] = [1, 2, 3]
# d[p2] = [4, 5, 6]
# d[p3] = [7, 8, 9]
# d[p4] = [10, 11, 12]
# print(d)
