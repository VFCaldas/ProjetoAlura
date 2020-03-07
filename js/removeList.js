export default function removeList() {
  const tabela = document.querySelector('#tabela-pacientes');

  function handleRemove(event) {
    // Somente executará nosso código caso o elemento em que clicamos seja um <td>
    if (event.target.tagName == 'TD') {
      event.target.parentNode.classList.add("fadeOut");

      setTimeout(function () {
        event.target.parentNode.remove();
      }, 500);
    }

  }
  tabela.addEventListener('dblclick', handleRemove);

}