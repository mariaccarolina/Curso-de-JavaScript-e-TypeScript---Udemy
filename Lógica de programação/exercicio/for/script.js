const elementosHtml = [
  { tag: "div", texto: "Tudo é possivel ao que crê!" },
  { tag: "section", texto: "Você é uma desenvolvedora frontend maravilhosa" },
  { tag: "footer", texto: "Vai dar certo" },
];

const container = document.querySelector(".container");
const div = document.createElement("div");

for (let i = 0; i < elementosHtml.length; i++) {
  let { tag, texto } = elementosHtml[i];
  let addHtml = document.createElement(tag);
  addHtml.innerHTML = texto;
  div.appendChild(addHtml);
}
container.appendChild(div);
