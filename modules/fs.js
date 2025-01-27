const fs = require("fs");
const path = require("path");

//Criar uma pasta
// fs.mkdir(path.join(__dirname, "/teste"), (error) => {
//     if (error){
//         console.log('Erro: ', error)
//     }

//     console.log('Pasta criada com sucesso')
// });

//criar um arquivo

fs.writeFile(
  path.join(__dirname, "/teste", "test.txt"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Arquivo criado com sucesso");
  }
);

//Adicionar escrita a um arquivo

fs.appendFile(
  path.join(__dirname, "/teste", "test.txt"),
  " hello world!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Arquivo modificado com sucesso");
  }
);

//ler arquivo

fs.readFile(
  path.join(__dirname, "/teste", "test.txt"),
  "utf-8",
  (error, data) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log(data);
  }
);
