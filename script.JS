function atualizarRelogio() {
    const agora = new Date();
    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');
  
  
    document.getElementById('relogio').textContent = `${horas}:${minutos}:${segundos}`;
  }
  
  setInterval(atualizarRelogio, 1000);
  atualizarRelogio();
  
  const relogio = document.getElementById("relogio");
  let posX = 0, posY = 0;
  let velocidadeX = 3, velocidadeY = 3;
  
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