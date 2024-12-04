import { connect } from "mongoose";
import { config } from "dotenv";
config();

const URI = process.env.URI || "";

const databaseConnect = async () => {
  try {
    await connect(URI);
    console.log("Database is successfully connected");
  } catch (err) {
    console.error("Error connecting to database", err);
  }
};

export { databaseConnect };
