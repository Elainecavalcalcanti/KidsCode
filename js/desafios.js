const correta = 2;

function verificar(correta, clicada) {
  const resultado = document.getElementById("resultado");

  if (clicada === correta) {
    resultado.innerText = "🎉 Muito bem! Você acertou!";
    resultado.style.color = "green";
  } else {
    resultado.innerText = "❌ Ops! Tente novamente.";
    resultado.style.color = "red";
  }
}

function reiniciar() {
  document.getElementById("resultado").innerText = "";
}

function proximoDesafio() {
  alert("Em breve mais desafios!");
}
