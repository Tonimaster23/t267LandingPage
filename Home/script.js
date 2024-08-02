var nomeGlobal;
var msgGlobal;

function conferirMensagemWhatsApp() {
  var nome = document.getElementById("nome").value;
  var mensagem = document.getElementById("mensagem").value;
  var confDiv = document.getElementById("rightDiv");

  nomeGlobal = nome;
  msgGlobal = mensagem;

  confDiv.style.display = "flex";
  document.getElementById("confNome").textContent = nome;
  document.getElementById("confMsg").textContent = mensagem;
}

function enviar() {
  var numeroTelefone = "5541999999999";

  var link =
    "https://wa.me/" +
    numeroTelefone +
    "?text=Nome: " +
    nomeGlobal +
    " - " +
    "Mensagem: " +
    msgGlobal;

  window.open(link, "_blank");
}

document.addEventListener('DOMContentLoaded', function() {
      // Obtendo referências diretamente do DOM
      document.querySelector('.zill').addEventListener('mouseover', function() {
        document.getElementById('section03').style.backgroundImage = 'url("/assets/images/dynamic-fog-on-a-dark-background-realistic-atmospheric-video.jpg")';
      });

      document.querySelector('.zill').addEventListener('mouseout', function() {
        document.getElementById('section03').style.backgroundImage = 'url("/assets/images/Cyberpunk.jpg")';
      });
    });

