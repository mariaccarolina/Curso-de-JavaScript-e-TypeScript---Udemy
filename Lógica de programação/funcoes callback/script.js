function f1() {
  setTimeout(function () {
    console.log("f1");
  }, 500);
}
function f2() {
  setTimeout(function () {
    console.log("f2");
  }, 1000);
}
function f3() {
  setTimeout(function () {
    console.log("f3");
  }, 200);
}

f1();
f2();
f3();
console.log("Olá mundo");

function exibir(num) {
  console.log("O resultado da operação é:" + num);
}

function soma(a, b, callback) {
  const operacao = a + b;
  callback(operacao);
}

function multiplicacao(a, b, callback) {
  const operacao = a * b;
  callback(operacao);
}

soma(5, 5, exibir);
multiplicacao(5, 5, exibir);
