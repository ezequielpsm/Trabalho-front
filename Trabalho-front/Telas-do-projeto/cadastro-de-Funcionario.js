const formEl = document.getElementById('form-api');
        const respostaEl = document.getElementById('resposta-api');

        formEl.addEventListener('submit', evento => {
            evento.preventDefault();

            const formData = new FormData(formEl);
            const data = {
                usuario: formData.get('usuario'),
                nome: formData.get('nome'),
                email: formData.get('email'),
                senha: formData.get('senha')
            };
            
            fetch("http://172.16.98.143:8000/core/create-user/", {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(res => res.json())
              .then(data => {
                  if (data.msg) {
                      respostaEl.textContent = data.msg;
                      // Redirecionamento para a página de login após o sucesso do cadastro
                      window.location.href = "tela_de_login.html"; // Altere para o caminho correto da sua página de login
                  } else {
                      respostaEl.textContent = 'Resposta inválida recebida da API';
                  }
              })
              .catch(error => {
                  console.error('Erro:', error);
                  respostaEl.textContent = 'Erro ao enviar requisição para a API';
              });
        });