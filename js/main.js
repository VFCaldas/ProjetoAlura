/* Aula - 1 Trocando o titulo */
const titulo = document.querySelector('.titulo');
titulo.textContent = 'Alura Nutrição';

/* Aula - 2 selecionando os pacientes para calcular IMC */
const pacientes = document.querySelectorAll('.paciente')

for (let i = 0; i < pacientes.length; i++) {
  let paciente = pacientes[i];
  const peso = paciente.querySelector('.info-peso').textContent;
  const altura = paciente.querySelector('.info-altura').textContent;
  let tbImc = paciente.querySelector('.info-imc');

  let validaAltura = true;
  let validaPeso = true;

  if (peso <= 0 || peso > 1000) {
    peso.textContent = "Peso inválido!";
    validaPeso = false;
    paciente.classList.add("paciente-invalido");

  } else if (altura <= 0 || altura >= 3) {
    altura.textContent = "Altura inválida!";
    validaAltura = false;
    paciente.classList.add("paciente-invalido");
  } else if (validaAltura && validaPeso) {
    const imc = Math.floor(peso / (altura * altura));
    tbImc.textContent = imc;
  } else {
    tbImc.textContent = "Altura e/ou peso inválidos!";
  }
}

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

