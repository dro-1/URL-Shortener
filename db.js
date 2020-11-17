const mongoose = require("mongoose");
const MONGO_URI =
  process.env.MONGODB_URI ||
  `mongodb+srv://dro:pword1234@cluster0.ytwpa.mongodb.net/url-shortener?retryWrites=true&w=majority`;

const connector = () => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB Connected");
    })
    .catch(console.log);

  mongoose.connection.on("error", (err) => {
    console.log(`DB Error : ${err.message}`);
  });
};

module.exports = { connector };
