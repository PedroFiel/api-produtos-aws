const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/api-produtos-aws';

    console.log('🔄 Tentando conectar ao MongoDB...');
    await mongoose.connect(mongoUri);
    console.log('✅ MongoDB conectado com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao conectar MongoDB:', error.message);
    console.log('⚠️  Servidor continuará rodando, mas endpoints precisarão de banco');
    console.log('💡 Para resolver:');
    console.log('   - Instale MongoDB local: https://www.mongodb.com/try/download/community');
    console.log('   - Ou use MongoDB Atlas: https://cloud.mongodb.com/');
    // Não fazer process.exit(1) para permitir teste dos endpoints mesmo sem banco
  }
};

module.exports = connectDB;