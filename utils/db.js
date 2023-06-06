const mongoose = require("mongoose");

const DB = async () => {
  try {
    const connection = await mongoose.connect(
      `mongodb+srv://yantramnepal:nuG62AUhWPxQ8VCX@cluster1.rg6r7a9.mongodb.net/?retryWrites=true&w=majority`,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );

    console.log(`Connected to database ${connection.connections[0].name}`);
  } catch (err) {
    console.error(err);
  }
};

module.exports = DB;
