const fs = require("fs");

let md = `
    This is a New File
    ==================

    ES6 Template Strings are cool. They honor whitespace.

    * Template Strings
    * Node File System
    * Readline CLIs
`;

//cria um arquivo com o nome e o conteúdo informados dentro do diretório que estamos
fs.writeFile("javascript.md", md.trim(), function () {
    console.log("Markdown Created");
});

//append - insere novo conte[udo dentro do arquivo criado
fs.writeFile("javascript.md", md.trim(), function (err) {
    if (err) {
        throw err;
    }
    fs.appendFileSync("javascript.md", "\n\n### Node.js is cool!")
    console.log("Markdown Created");
});