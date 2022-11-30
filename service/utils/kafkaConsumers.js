import { Kafka } from "kafkajs";

import { handleEmailConsumerMessage } from "./helperFunctions.js";

const kafka = new Kafka({
  clientId: "emailAPI",
  brokers: ["kafka:9092"],
});

const consumer = kafka.consumer({ groupId: "email-service-group" });

export const consumeEmailMessages = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "send-email", fromBeginning: false });

  await consumer.run({
    eachMessage: handleEmailConsumerMessage,
  });
};
