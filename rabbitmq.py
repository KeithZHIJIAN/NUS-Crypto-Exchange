import pika


def listen_rabbitmq(matchingengine):

    connection = pika.BlockingConnection(pika.ConnectionParameters(host="localhost"))
    channel = connection.channel()

    channel.queue_declare(queue="NUSSwap")

    def callback(ch, method, properties, body):
        matchingengine.apply(body)

    channel.basic_consume(queue="NUSSwap", on_message_callback=callback, auto_ack=True)

    print(" [*] Waiting for messages. To exit press CTRL+C")
    channel.start_consuming()
