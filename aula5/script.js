/*Exivir no console:
Matheus Martins tem 30 anos, pesa 84 kg, tem 1.8 de altura e seu IMC é 45.....
Matheus Martins nasceu em 1980*/

const nome = "Matheus";
const sobrenome = "Martins";
const idade = 30;
const peso = 84;
const altura = 1.8;

let imc = peso / (altura * altura);
let anoNascimento = 2022 - idade;

console.log(
  nome,
  sobrenome,
  "tem",
  idade,
  "anos,",
  "pesa",
  peso,
  "kg,",
  "tem",
  altura,
  "e seu imc é",
  imc,
  nome,
  sobrenome,
  "nasceu em ",
  anoNascimento
);
