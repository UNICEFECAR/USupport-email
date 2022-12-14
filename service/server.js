import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";

import v1 from "#routes/index";
import middleware from "#middlewares/index";

import { consumeEmailMessages } from "#utils/kafkaConsumers";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3008;

/*------------- Security Config -------------*/

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

/*------------- Email Service Endpoints -------------*/

// Example router
app.use("/email/v1/admin", v1.AdminRouter);
app.use("/email/v1/system", v1.SystemRouter);
app.use("/email/v1/client", v1.ClientRouter);
app.use("/email/v1/provider", v1.ProviderRouter);

/*------------- Error middleware -------------*/

app.use(middleware.errorMiddleware.notFound);
app.use(middleware.errorMiddleware.errorHandler);

app.listen(PORT, () => {
  console.log(`Email Server listening on port ${PORT}`);

  consumeEmailMessages()
    .then(() => console.log("Kafka Consumer Running..."))
    .catch(console.log);
});
