import mongoose from "mongoose";

let isconnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isconnected) {
    console.log("Already connected to DB");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "promptopia",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isconnected = true;
    console.log("Connected to DB");
  } catch (err) {
    console.error(err);
  }
};
