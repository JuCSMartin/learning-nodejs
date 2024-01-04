const path = require("path");

console.log(__dirname); //imprime o endereço do diretório
console.log(__filename); //imprime o nome do arquivo

console.log(`The file name is ${path.basename(__filename)}`);

for (let key in global){
    console.log(key);
}