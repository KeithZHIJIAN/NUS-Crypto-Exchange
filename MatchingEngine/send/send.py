#!/usr/bin/env python
import pika

connection = pika.BlockingConnection(pika.ConnectionParameters(host="localhost"))
channel = connection.channel()

channel.queue_declare(queue="hello")

while True:
    message = input()
    if message == "exit":
        break
    channel.basic_publish(exchange="", routing_key="hello", body=message)

connection.close()
