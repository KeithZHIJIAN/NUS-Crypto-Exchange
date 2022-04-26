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


def db_fill_order(db, orderId, fill_qty, cross_price, userId, symbol):
    # update order record
    query = {"id": orderId}
    if db['orders'].count_documents(query) > 0:
        result = db['orders'].find_one(query)
        old_open_quantity = result["openQuantity"]
        old_filled_cost = Decimal(result["filledCost"])
        isBuy = result['side'] == 'buy'
        fill_cost = fill_qty * cross_price
        db['orders'].update_one(
            query, {"$set": {
                "openQuantity": old_open_quantity - fill_qty,
                "filledCost": str(old_filled_cost + fill_cost)}})
    else:
        print("order id does not exist")
        return

    # update user balance
    query = {'id': userId}
    if db['users'].count_documents(query) > 0:
        old_balance = db_get_user_balance(db, userId)
        db['users'].update_one(query, {'$set': {
            "balance": str(old_balance - fill_cost if isBuy else old_balance + fill_cost)
        }})
    else:
        print("user id does not exist")
        return

    # update user asset
    query = {'userId': userId, 'symbol': symbol}
    if db['wallet'].count_documents(query) > 0:
        old_quantity = db_get_user_asset(db, userId, symbol)
        if isBuy:
            db['wallet'].update_one(
                query, {'$set': {"quantity": old_quantity + fill_qty}})
        else:
            if old_quantity - fill_qty > 0:
                db['wallet'].update_one(
                    query, {'$set': {"quantity": old_quantity - fill_qty}})
            else:
                db['wallet'].delete_one({"symbol": symbol})
    else:
        assetId = db['types'].find_one({'symbol': symbol})['id']
        if isBuy:
            db['wallet'].insert_one(
                {'id': assetId, 'symbol': symbol, 'quantity': fill_qty, 'userId': userId})
        else:
            print(f'user does not possess {symbol}')
            return


def db_update_market_price(collection, symbol, new_price):
    query = {"symbol": symbol}
    if collection.count_documents(query) > 0:
        collection.update_one(query, {"$set": {"price": str(new_price)}})
    else:
        print("symbol does not exist")


def db_get_user_balance(db, id):
    query = {'id': id}
    if db['users'].count_documents(query) > 0:
        return Decimal(db['users'].find_one(query)['balance'])
    else:
        print("user not found")
        return -1


def db_get_user_asset(db, userId, symbol):
    query = {'userId': userId, "symbol": symbol}
    if db['wallet'].count_documents(query) > 0:
        return db['wallet'].find_one(query)['quantity']
    else:
        print(f"user does not possess {symbol}")
        return -1
