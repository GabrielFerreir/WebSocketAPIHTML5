var input = document.querySelector('input');
var lista = document.querySelector('ul');
var nome = prompt('Digite seu nome:')
console.log(input);

input.addEventListener('keydown', (e) => {
  if(e.key == "Enter") {
    let dados = {
      mensagem: input.value,
      user: nome || 'Sem nome'
    };
    console.log(dados)
    socket.send(JSON.stringify(dados));
  }
})

var socket = new WebSocket("ws://192.168.52.3:5001");
console.log(socket);

socket.onopen = (e) => {
  console.log('Socket conectado com sucesso!');
}

socket.onmessage = (e) => {
  var msg = document.createElement("li");
  var data = JSON.parse(e.data);
  msg.innerHTML = `<b>${data.user}:</b> ${data.mensagem}`;
  lista.appendChild(msg);
  lista.scrollBy(0, 48);
  input.value = '';
}
