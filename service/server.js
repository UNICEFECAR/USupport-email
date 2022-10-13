import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import cors from "cors";

import v1 from "#routes/index";
import middleware from "#middlewares/index";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3008;

/*------------- Security Config -------------*/

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());

/*------------- Email Service Endpoints -------------*/

// Example router
app.use("/email/v1/admin", v1.AdminRouter);

/*------------- Error middleware -------------*/

app.use(middleware.errorMiddleware.notFound);
app.use(middleware.errorMiddleware.errorHandler);

app.listen(PORT, () => {
  console.log(`Email Server listening on port ${PORT}`);
});
