function atualizarRelogio() {
  const agora = new Date();
  const horas = agora.getHours().toString().padStart(2, '0');
  const minutos = agora.getMinutes().toString().padStart(2, '0');
  const segundos = agora.getSeconds().toString().padStart(2, '0');
  
  document.getElementById('relogio').textContent = `${horas}:${minutos}:${segundos}`;
}

function atualizarData() {
  const agora = new Date();
  const dia = agora.getDate().toString().padStart(2, '0');
  
  // Meses por extenso
  const meses = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
  ];
  const mes = meses[agora.getMonth()]; // Acessa o mês por extenso
  const ano = agora.getFullYear();

  document.getElementById('data').textContent = `${dia} de ${mes} de ${ano}`;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();
atualizarData(); // Atualiza a data ao carregar

// Mostrar o relógio e a data após 3 segundos
setTimeout(() => {
  document.getElementById('boasVindas').style.display = 'none';
  document.getElementById('relogio').style.display = 'block';
  document.getElementById('data').style.display = 'block';
}, 3000);



  /*
const relogio = document.getElementById("relogio");
let posX = 0, posY = 0;
let velocidadeX = 2, velocidadeY = 2;

function moverRelogio() {
  const larguraTela = window.innerWidth - relogio.clientWidth;
  const alturaTela = window.innerHeight - relogio.clientHeight;

  posX += velocidadeX;
  posY += velocidadeY;

  if (posX <= 0 || posX >= larguraTela) {
    velocidadeX *= -1;
  }
  if ( posY <= 0 || posY >= alturaTela) {
    velocidadeY *= -1;
  }

  relogio.style.position = "absolute";
  relogio.style.left = `${posX}px`;
  relogio.style.top = `${posY}px`;
}

setInterval(moverRelogio, 10);
*/