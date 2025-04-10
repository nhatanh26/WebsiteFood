import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Cấu hình dotenv để đọc biến môi trường
dotenv.config();

// Xử lý __dirname trong ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Khởi tạo app
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Kết nối database
connectDB();

// API routes
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Route cho hình ảnh (uploads)
app.use("/images", express.static(path.join(__dirname, "uploads")));

// Test endpoint
app.get("/", (req, res) => {
  res.send("API is working ✅");
});

// Khởi động server
app.listen(port, () => {
  console.log(`🚀 Server started on http://localhost:${port}`);
});
