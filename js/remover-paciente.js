/* Como usei a declaracao VAR em pacientes no outro arquivo nao preciso declarar pacientes aq dnv */

/* pacientes.forEach( (paciente) => {
  paciente.addEventListener('dblclick', (evento) => {
    evento.target.parentElement.remove()  //Nesse caso eu poderia usar o THIS, no lugar de evento.target.parentElement
                                          //O this, tá atrelado a quem é o dono do evento, que nesse caso é cada paciente
  })
}) */



// OQUE TAVA ACONTECENDO, É QUE ESSE CODIGO NAO ESTAVA PEGANDO OS NOVOS PACIENTES ADICIONADOS, POIS ELE FORAM ADICIONADOS DEPOIS QUE O SCRIPT,
//FOI "LIDO", ENTAO VAMOS ADICIONAR UM ESCUTADOR DE EVENTOS, NO PAI DE TODOS, QUE É A TABELA

const tabelaPacientes = document.querySelector('#tabela-pacientes')

tabelaPacientes.addEventListener('dblclick', (event) => {

  event.target.parentElement.classList.add('fadeOut')

  setTimeout( () => {
    event.target.parentElement.remove()    /* Lemabrando que nesse caso nao posso usar o THIS, pq senao iria remover toda a tabela,*/
  }, 500)                                         /* já que a dnoa do evento é ela */            
})

/* 
Essa funcao utilizada, setTimeout funciona da seguinte forma,
voce passa uma funcao, dentro da chaves coloca oque deve ser executado, e fora da chave mas dentro do parentes
do setTimeout, coloca o tempo que deve ser esperado para oque deve ser executado executar
*/
