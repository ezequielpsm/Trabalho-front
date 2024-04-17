document.getElementById("agendarForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var nomeReuniao = document.getElementById("nome").value;
    var horarioReuniao = document.getElementById("horario").value;
    var dataReuniao = document.getElementById("data").value;
  
    
    var novoAgendamento = document.createElement("li");
    novoAgendamento.textContent = "Nome da Reunião: " + nomeReuniao + " - Horário: " + horarioReuniao + " - Data: " + dataReuniao;
  
   
    var listaAgendamentos = document.getElementById("listaAgendamentos");
    listaAgendamentos.appendChild(novoAgendamento);
  
    
    document.getElementById("nome").value = "";
    document.getElementById("horario").value = "";
  
    
    document.getElementById("confirmacao").style.display = "block";
  });
  