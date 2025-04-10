import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority');
    console.log("DB Connected");
  } catch (error) {
    console.error("DB Connection Failed:", error);
    process.exit(1);
  }
};
