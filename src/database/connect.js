const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejsdicasparadev.pimus.mongodb.net/?retryWrites=true&w=majority&appName=CursoNodejsDicasparadevs`
    );
    console.log("Conexão com banco de dados realizada com sucesso!");
  } catch (error) {
    console.error(
      "Ocorreu um erro ao se conectar com o banco de dados: ",
      error
    );
    process.exit(1); // Encerra o processo caso ocorra erro
  }
};

module.exports = connectToDatabase;
