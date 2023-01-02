// Promise é uma função contrutora de promessas. Existem dois resultados possíveis de uma promessa,
// ela pode ser resolvida, com a execução do primeiro argumento, ou rejeitada se o segundo argumento for
//ativado.

const promessa = new Promise(function (resolve, reject) {
  let condicao = true;
  if (condicao) {
    resolve("Estou certo");
  } else {
    reject("Um erro ocorreu.");
  }
});

promessa.then((resolucao) => console.log(resolucao));
//promessa.then(function (resolucao) {
// console.log(resolucao); //Estou certo"
//});

//O poder das Promises está no método then() do seu protótipo.
//O callback deste método só será ativado quando a promise for resolvida.
// O argumenot do callback será o valor passado na função resolve.

