const nome = prompt("Digite seu nome:");
const idade = prompt("Digite sua idade:");
const sonho = prompt("Digite seu sonho:");

const nomeRecebido = document.getElementById("nomePessoal");
const idadeRecebida = document.getElementById("idadeNascimento");
const TextoRecebido = document.getElementById("sonhos");

nomeRecebido.innerHTML = nome;
idadeRecebida.innerHTML = idade;
TextoRecebido.innerHTML = sonho;
