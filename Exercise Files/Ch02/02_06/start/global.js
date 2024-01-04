// const waitTime = 3000; //it means 3 seconds
// console.log(`setting a ${waitTime / 1000} second delay`);
// const timerFinished = () => console.log("done");

// setTimeout(timerFinished, waitTime);

// essa função imprime "setting a 3 second delay",
// aguarda 3 segunda e, então, imprime "done"

// const waitInterval = 500; //half a second
// let currentTime = 0;

// const incTime = () => {
//   currentTime += waitInterval;
//   console.log(`waiting ${currentTime / 1000} seconds`);
// };

// setInterval(incTime, waitInterval);

// a função, dessa forma, imprime infinitamente os segundos com intervalo de 3 segundos
// imprime o "done", porém não para... roda sem ter fim

const waitTime = 3000; //it means 3 seconds
console.log(`setting a ${waitTime / 1000} second delay`);
const timerFinished = () => {
  clearInterval(interval);
  console.log("done");
}

setTimeout(timerFinished, waitTime);

const waitInterval = 500; //half a second
let currentTime = 0;

const incTime = () => {
  currentTime += waitInterval;
  //retirar os comentários das linhas seguintes se quiser deixar mais "chique"
  //o contador ficará atualizando
  // const p = Math.floor((currentTime / waitTime) * 100);
  // process.stdout.clearLine();
  // process.stdout.cursorTo(0);
  // process.stdout.write(`waiting... ${p} `);
  console.log(`waiting ${currentTime / 100} seconds`);
  //comentar a linha acima quando descomentar as linhas acima
};

const interval = setInterval(incTime, waitInterval);