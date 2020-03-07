import AddLista from "./addlista.js";

export default function initAjax() {
  AddLista();
  const botaoAdicionar = document.querySelector("#buscar-pacientes");
  botaoAdicionar.addEventListener("click", pacienteFetch)
  function pacienteFetch() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function () {
      const erroAjax = document.querySelector("#erro-ajax");

      if (xhr.status == 200) {
        erroAjax.classList.add("invisivel");
        const resposta = xhr.responseText;
        const pacientes = JSON.parse(resposta);

        pacientes.forEach(function (paciente) {
          adicionaPacienteNaTabela(paciente);
        });
      } else {
        erroAjax.classList.remove("invisivel");
      }
    });

    xhr.send();

  };
}
