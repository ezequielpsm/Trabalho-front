document.getElementById("agendarForm").addEventListener("submit", function (event) {
  event.preventDefault();
  var nomeReuniao = document.getElementById("nome").value;
  var horarioReuniao = document.getElementById("hora").value;
  var dataReuniao = document.getElementById("data").value;
  var email = document.getElementById("emails").value;
  


  var novoAgendamento = document.createElement("ul");
  novoAgendamento.textContent = "Nome da Reunião (Treinamento): " + nomeReuniao + " - Horário: " + horarioReuniao + " - Data: " + dataReuniao + " \nParticipantes: " + email + ", " + "."  ;


  var listaAgendamentos = document.getElementById("listaAgendamentos");
  listaAgendamentos.appendChild(novoAgendamento);


  // document.getElementById("nome").value = "";
  // document.getElementById("hora").value = "";
  // document.getElementById("data").value = "";
  // document.getElementById("emails").value = "";


  // document.getElementById("confirmacao").style.display = "block";

});

const formEl = document.getElementById('agendarForm');
const respostaEl = document.getElementById('resposta-api');

formEl.addEventListener('submit', evento => {
  evento.preventDefault();

  const formData = new FormData(formEl);
  const data = {
    nome: formData.get('nome'),
    data: formData.get('data'),
    hora: formData.get('hora'),
    emails: formData.get('emails'),
    
  };

  fetch("http://172.16.98.143:8000/core/create-meeting/", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => {
    if (!res.ok) {
      return res.json().then(error => Promise.reject(error));
    }
    return res.json();
  }).then(data => {
    if (data.msg) {
      respostaEl.textContent = data.msg;

      //window.location.href = "tela_de_login.html"; 
    } else {
      respostaEl.textContent = 'Resposta inválida recebida da API';
    }
  }).catch(error => {
    console.error('Erro:', error);
    if (error.msg) {
      respostaEl.textContent = error.msg;
    } else {
      respostaEl.textContent = 'Erro ao enviar para a API';
    }
  });
});

