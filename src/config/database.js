import mongoose from "mongoose";

mongoose
  .connect(
    `mongodb+srv://root:${process.env.DB_PASSWORD}@cluster0.jdm4wxb.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("✅ Successfully connected to the database"))
  .catch((e) => console.log(`⛔️ Error during database connection ${e}`));
