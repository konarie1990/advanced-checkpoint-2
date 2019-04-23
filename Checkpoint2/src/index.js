import express from "express";
import mongoose from "mongoose";
const app = express();

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://ACAmongoDB:password1234@roncluster-otskm.mongodb.net/test?retryWrites=true"
);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
