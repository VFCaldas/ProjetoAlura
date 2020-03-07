
export default function initImc() {
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
}