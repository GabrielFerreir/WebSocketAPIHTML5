var socket = new WebSocket("ws://192.168.52.3:5001");
var input = document.querySelector('input');
var lista = document.querySelector('ul');
var nome = prompt('Digite seu nome:')

input.addEventListener('keydown', (e) => {
  if(e.key == "Enter") {
    let dados = {
      name: 'mensagem',
      mensagem: input.value,
      user: nome || 'Sem nome'
    };
    console.log(dados)
    socket.send(JSON.stringify(dados));
  }
});

socket.onopen = (e) => {
  console.log('Socket conectado com sucesso!');
}

socket.onmessage = (e) => {
  console.log(e.data);
  var msg = document.createElement("li");
  var data = JSON.parse(e.data);
  msg.innerHTML = `<b>${data.user}:</b> ${data.mensagem}`;
  lista.appendChild(msg);
  lista.scrollBy(0, 48);
  input.value = '';
}
