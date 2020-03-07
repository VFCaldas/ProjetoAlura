export default function AddLista() {
  /* Adicionar novo paciente na tabel */
  const botaoSubmit = document.querySelector("#adicionar-paciente");

  /* Função de callback no event listener */
  function addBotao(event) {
    event.preventDefault();
    const form = document.querySelector("#form-adiciona");

    const nome = form.nome.value;
    const peso = form.peso.value;
    const altura = form.altura.value;
    const gordura = form.gordura.value;

    const pacienteTr = document.createElement("tr");

    const nomeTd = document.createElement("td");
    const pesoTd = document.createElement("td");
    const alturaTd = document.createElement("td");
    const gorduraTd = document.createElement("td");
    const tbImc = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    const tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
  }

  botaoSubmit.addEventListener("click", addBotao);
}