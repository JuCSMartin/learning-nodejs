const fs = require("fs");

//a função vai ler o arquivo read.me que está dentro da pasta
fs.readFile("./readme.md", "UTF-8", (err, ipsum) => {
  console.log(ipsum);
});

console.log("reading the file..."); //antes de imprimir, vai avisar que está lendo