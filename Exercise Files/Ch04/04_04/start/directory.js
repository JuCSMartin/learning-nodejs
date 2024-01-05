const fs = require("fs");

// verifica se o diretório existe e, caso negativo, cria o novo diretório com as instruções passadas aqui

if(fs.existsSync("your-files-here")){
    console.log("Already there!")
} else {
    fs.mkdir("your-files-here", function(err) {
        if (err) {
            console.log(`ERROR? ${err}`);
        } else {
            console.log("directory created");
        }
    });
}

