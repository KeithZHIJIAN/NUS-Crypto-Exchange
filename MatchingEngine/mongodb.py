from pymongo import MongoClient
from decimal import Decimal


def connectDatabase():
    client = MongoClient("localhost", 27017, maxPoolSize=50)
    return client["NUSSwap"]


def db_create_order(collection, id, symbol, side, quantity, price, userId):
    query = {
        "id": id,
        "symbol": symbol,
        "side": side,
        "quantity": quantity,
        "openQuantity": quantity,
        "price": str(price),
        "userId": userId,
        "filledCost": 0
    }
    result = collection.insert_one(query)
    return result


def db_delete_order(collection, id):
    query = {"id": id}
    result = collection.delete_one(query)
    return result


def db_update_order_price(collection, id, new_price):
    query = {"id": id}
    if collection.count_documents(query) > 0:
        collection.update_one(query, {"$set": {"price": str(new_price)}})
    else:
        print("order id does not exist")


def db_update_order_quantity(collection, id, size_delta):
    query = {"id": id}
    if collection.count_documents(query) > 0:
        result = collection.find_one(query)
        old_quantity = result["quantity"]
        old_open_quantity = result["openQuantity"]
        collection.update_one(
            query, {"$set": {"quantity": old_quantity + size_delta, "openQuantity": old_open_quantity + size_delta}})
    else:
        print("order id does not exist")


def db_fill_order(collection, id, fill_qty, cross_price):
    query = {"id": id}
    if collection.count_documents(query) > 0:
        result = collection.find_one(query)
        old_open_quantity = result["openQuantity"]
        old_filled_cost = Decimal(result["filledCost"])
        fill_cost = fill_qty * cross_price
        collection.update_one(
            query, {"$set": {
                "openQuantity": old_open_quantity - fill_qty,
                "filledCost": str(old_filled_cost + fill_cost)}})
    else:
        print("order id does not exist")


def db_update_market_price(collection, symbol, new_price):
    query = {"symbol": symbol}
    if collection.count_documents(query) > 0:
        collection.update_one(query, {"$set": {"price": str(new_price)}})
    else:
        print("symbol does not exist")
