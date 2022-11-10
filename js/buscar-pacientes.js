var botaoBuscarPacientes = document.querySelector("#buscar-pacientes");

botaoBuscarPacientes.addEventListener("click", () => {
   
    xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.send();
    
    xhr.addEventListener("load", () => {
        
        if (xhr.status == 200) {
            
            let pacientes = JSON.parse(xhr.responseText);
    
            pacientes.forEach( (paciente) => {
                adicionaPacienteNaTabela(paciente)
            });

        } else { /* Caso a requisição falhe. */
            console.log("Erro ao buscar os pacientes")
            console.log(xhr.status);

            let erroAjax = document.querySelector(".erro-Ajax")
            erroAjax.classList.remove("invisivel")
        }


    });

});
