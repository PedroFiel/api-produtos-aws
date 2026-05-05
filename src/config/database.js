const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error('MONGO_URI não definido no .env');
    }

    await mongoose.connect(mongoUri);
    console.log('MongoDB conectado');
  } catch (error) {
    console.error('Erro ao conectar:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;