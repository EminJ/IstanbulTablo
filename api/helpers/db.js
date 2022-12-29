const mongoose = require('mongoose')

module.exports = () => {
  mongoose.set('strictQuery', false);
  mongoose.connect(process.env.SERVER_MONGODB_URL, { useNewUrlParser: true })
  mongoose.connection.on('open', () => {
    console.log('MongoDB : Connected successfully');
  })
  mongoose.connection.on('error', (err) => {
    console.log(`MongoDB ERROR : ${err}`);
  })
}