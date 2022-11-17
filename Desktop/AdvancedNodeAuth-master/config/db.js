const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(process.env.DATABASE_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  }); 

  console.log("MongoDB Connected");
};
console.log(process.env.DATABASE_CONNECTION);
module.exports = connectDB;
 