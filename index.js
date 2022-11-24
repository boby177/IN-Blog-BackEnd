import express from "express";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";

const app = express();

app.use(express.json());
app.use("/api/posts", postRoutes);
app.use("/api/posts", authRoutes);
app.use("/api/posts", userRoutes);

app.listen(8800, () => {
  console.log("Connected to port 8800!");
});
