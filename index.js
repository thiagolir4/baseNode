// const { Person } = require("./person");
// const person = new Person("Thiago");
// // require("./modules/path"); importando o path (pega informações conforme pastas e afins)
// require("./modules/fs"); importanto o fs (manipulando arquivos)
// console.log(person.sayMyName());

/* npm init no terminal para baixar o pakage.json 
npm install nodemon --save-dev para instalar o nodemon somente em ambiente de desenvolvimento
para inicializar o nodemon, para ficar em tempo de produção, no terminal usar o comando 
npm run start:dev --- olhar o cript em package.json  
*/

const dotenv = require("dotenv");
const connectToDatabase = require("./src/database/connect");
dotenv.config();

connectToDatabase();
require("./modules/express");
