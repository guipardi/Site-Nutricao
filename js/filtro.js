const campoFiltro = document.querySelector('#filtrar')

campoFiltro.addEventListener('input', function () {

  let pacientes = document.querySelectorAll(".paciente")

  pacientes.forEach((paciente) => {

    let tdName = paciente.querySelector('.info-nome')

    if (tdName.textContent.toLocaleLowerCase().includes(this.value.toLocaleLowerCase())) { /* Nesse caso poderis usar RegEx também */
      paciente.classList.remove('invisivel')
    } else {
      paciente.classList.add('invisivel')
    }

  })
})
