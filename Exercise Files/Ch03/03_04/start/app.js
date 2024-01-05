// const myModule = require("./myModule"); //importando o módulo como um todo
// console.log(myModule.anything);
// console.log(myModule.inc());

const {inc, dec, getCount} = require("./myModule"); //importando apenas os dados necessários

inc();
inc();
inc();

console.log(`the count is ${getCount()}`); // imprime o total, já que chamou inc() 3 vezes, resultado 3
