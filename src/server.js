import express from "express";
import cors from "cors";
import helmet from "helmet";
import "dotenv/config";
import { errors } from "celebrate";
import cookieParser from "cookie-parser";
import { conectMongoDB } from "./db/connectToMongoDB.js";
import { notFoundHandler } from "./middleware/notFoundHandler.js";
import { errorHandler } from "./middleware/errorHandler.js";
import authRoute from "./routes/authRoute.js"
import diariesRoute from "./routes/diariesRoute.js"
import usersRoute from "./routes/usersRoute.js"
import tasksRoute from "./routes/tasksRoute.js"
import weeksRoute from "./routes/weeksRoute.js"

const PORT = process.env.PORT ?? 3000;

const app = express();

app.use(express.json({ limit: "5mb" }));
app.use(cors({ methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"] }));
app.use(helmet());
app.use(cookieParser());

app.use("/auth", authRoute);
app.use("/users", diariesRoute);
app.use("/tasks", usersRoute);
app.use("/diaries", tasksRoute);
app.use("/weeks", weeksRoute);
app.use("/api", tasksRoute);


app.use(notFoundHandler);
app.use(errors());
app.use(errorHandler);

await conectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});