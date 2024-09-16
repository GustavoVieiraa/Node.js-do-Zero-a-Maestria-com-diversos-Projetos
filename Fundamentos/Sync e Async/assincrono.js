const fs = require("fs");

console.log("Início");

fs.writeLine("arquivo.txt", "oi", function(err) {
    setTimeout(function () {
        console.log("Arquivo criado!");
    }, 1000)
});