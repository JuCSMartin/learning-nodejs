const fs = require("fs");

//fs.renameSync("./lib/config.js", ".lib/project-config.js"); // renomear o arquivo

//console.log("Config.js file renamed");

// move um arquivo de um diretorio para o outro
// fs.rename("./lib/notes.md", "./notes.md", function (err) {
//     if (err){
//         throw err;
//     }
//     console.log("Notes markdown moved");
// });

// arquivos sendo removidos

fs.unlinkSync("./lib/project-config.js");

fs.unlink("notes.md", function (err) {
  if (err) {
    throw err;
  }
  console.log("Notes are gone");
});
