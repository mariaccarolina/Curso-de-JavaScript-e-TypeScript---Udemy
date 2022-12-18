const pessoa = {
  //objeto
  nome: "Jana",
  sobrenome: "Andrade",
  idade: 24,

  fala() {
    console.log(`${this.nome} ${this.sobrenome} está me chamando para sair`);
  },
};
console.log(pessoa.fala)