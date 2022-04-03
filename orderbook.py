from multimap import MultiMap
from order import Order
from ordertracker import OrderTracker
from decimal import Decimal
from price import Price

MAX_QUANTITY = 4294967295  # UINT32_MAX
MARKET_ORDER_PRICE = 0


class OrderBook:
    def __init__(self, symbol) -> None:
        self._symbol = symbol
        self._asks = MultiMap()
        self._bids = MultiMap()
        self._marketPrice = Decimal(0)

    def marketPrice(self) -> Decimal:
        return self._marketPrice

    def set_market_price(self, price: Decimal) -> None:
        oldMarketPrice = self._marketPrice
        self._marketPrice = price
        # if price > oldMarketPrice or oldMarketPrice == 0:
        #     self.match_order(price)

    # We will use order tracker to process the order, record the history and update the database

    def add_order(self, order: Order) -> None:
        matched = False
        inbound = OrderTracker(order)
        inbound_price = order.price()
        buy = order.isBuy()
        match_history = []

        if buy:
            matched = self.match_order(
                inbound, inbound_price, self._asks, match_history
            )
        else:
            matched = self.match_order(
                inbound, inbound_price, self._bids, match_history
            )

        for order_tracker in match_history:
            # reserved for database update
            pass

        if not inbound.filled():
            if buy:
                self._bids.add(Price(inbound_price, buy), inbound)
            else:
                self._asks.add(Price(inbound_price, buy), inbound)
        return matched

    #  Try to match order at 'price' against 'current' orders
    #  If successful
    #    generate trade(s)
    #    if any current order is complete, remove from 'current' orders

    def match_order(
        self,
        inbound: OrderTracker,
        inbound_price: Decimal,
        current_orders: MultiMap,
        match_history: list,
    ) -> None:
        return self.match_regular_order(
            inbound, inbound_price, current_orders, match_history
        )

    def match_regular_order(
        self,
        inbound: OrderTracker,
        inbound_price: Decimal,
        current_orders: MultiMap,
        match_history: list,
    ) -> None:
        matched = False
        filled_list = []
        openQuantity = inbound.openQuantity()
        for price, order_list in current_orders:
            if not price.matches(inbound_price):
                break
            current_price = price.price()
            # current_price: Price, current_order: OrderTracker
            for current_order in order_list:
                if inbound.filled():
                    break
                current_quantity = current_order.openQuantity()
                # reserved for all or none logic
                if False:
                    pass
                else:
                    traded = self.create_trade(
                        inbound, current_order, inbound_price, current_price
                    )
                    if traded:
                        matched = True
                        match_history.append(current_order)
                        if current_order.filled():
                            filled_list.append((current_price, current_order))
                        openQuantity -= traded
        for (current_price, current_order) in filled_list:
            current_orders.remove(current_price, current_order)
        return matched

    def create_trade(
        self,
        inbound_tracker: OrderTracker,
        current_tracker: OrderTracker,
        inbound_price: Decimal,
        current_price: Decimal,
        max_quantity: int = MAX_QUANTITY,
    ):
        cross_price = current_price
        if cross_price == MARKET_ORDER_PRICE:
            cross_price = inbound_price
        if cross_price == MARKET_ORDER_PRICE:
            cross_price = self._marketPrice
        if cross_price == MARKET_ORDER_PRICE:
            return 0
        fill_qty = min(
            max_quantity,
            min(inbound_tracker.openQuantity(), current_tracker.openQuantity()),
        )
        if fill_qty > 0:
            inbound_tracker.fill(cross_price, fill_qty)
            current_tracker.fill(cross_price, fill_qty)
            self.set_market_price(cross_price)

        # Add the trade to the trade history
        return fill_qty

    def __str__(self) -> str:
        return f"symbol:{self._symbol}\nasks:\n{self._asks}\nbids:\n{self._bids}\n"


# ob = OrderBook("BTCUSD")
# order1 = Order(
#     "0001", "limit", True, 100, Decimal("64021.1"), "user1", "2020-01-01T00:00:00"
# )
# order2 = Order(
#     "0002", "limit", True, 50, Decimal("64020.3"), "user1", "2020-01-01T00:00:00"
# )

# order3 = Order(
#     "0003", "limit", False, 50, Decimal("64020.3"), "user1", "2020-01-01T00:00:00"
# )
# ob.add_order(order1)
# ob.add_order(order2)
# ob.add_order(order3)
# ob.add_order(
#     Order(
#         "0004", "limit", True, 100, Decimal("64020.3"), "user1", "2020-01-01T00:00:00"
#     )
# )
# ob.add_order(
#     Order(
#         "0005", "limit", True, 100, Decimal("64020.3"), "user1", "2020-01-01T00:00:00"
#     )
# )

# print(ob)
