# Realtime lakehouse with KAFKA and PRODUCER-CONSUMER

# - Start Kafka

```

docker-compose up -d

docker exec -it kafka /opt/bitnami/kafka/bin/kafka-topics.sh \
--create \
--zookeeper zookeeper:2181 \
--replication-factor 1 \
--partitions 1 \
--topic lakehouse

```

# - Producer Microservice

# - Consumer Microservice
