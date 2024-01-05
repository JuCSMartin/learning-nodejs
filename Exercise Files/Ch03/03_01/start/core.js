const path = require("path");
const util = require("util");
const v8 = require("v8");

console.log(path.basename(__filename)); // imprime o caminho da pasta que estamos
const dirUploads = path.join(__dirname, "www", "files", "uploads"); // append as strings no caminho
console.log(dirUploads);

util.log(path.basename(__filename)); // informa o path com horas
util.log(v8.getHeapCodeStatistics()); // para saber a memória que o app está usando
