import express from "express";
import { email_send_post } from "../../controllers/email.js";

const router = express.Router();

//POST request to send an email
router.post("/", email_send_post);

export { router };
