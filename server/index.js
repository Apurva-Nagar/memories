import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import session from "express-session";
import redis from "redis";
import connectRedis from "connect-redis";
import csrf from "csurf";

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import profileRoutes from "./routes/profile.js";

const app = express();
dotenv.config();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

const RedisStore = connectRedis(session);
const redisClient = redis.createClient();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    store: new RedisStore({ client: redisClient }),
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, path: "/", sameSite: true },
  })
);
// cookie: { secure: true } -> Add in production when using HTTPS
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cookieParser());

app.use(csrf({ cookie: false }));

app.use("/user", userRoutes);
app.use("/posts", postRoutes);
app.use("/profile", profileRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((err) => console.log(err));

mongoose.set("useFindAndModify", false);
