import { Kafka } from "kafkajs";

import { handleEmailConsumerMessage } from "./helperFunctions.js";

const kafka = new Kafka({
  clientId: "emailAPI",
  brokers: ["kafka:9092"],
});

export const consumeEmailMessages = async () => {
  const consumer = kafka.consumer({ groupId: "send-email" });

  await consumer.connect();
  await consumer.subscribe({ topic: "send-email", fromBeginning: true });

  await consumer.run({
    eachMessage: handleEmailConsumerMessage,
  });
};
