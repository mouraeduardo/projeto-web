var emailCadastrado = "admin";
var senhaCadastrada = "admin";

function validatior() {
  // pegando o valor do nome pelos names
  var nome = document.getElementById("nome").value;
  var sobrenome = document.getElementById("sobrenome").value;
  var email = document.getElementById("email-login").value;
  var data = document.getElementById("data-de-nascimento").value;
  var endereco = document.getElementById("endereco").value;
  var complemento = document.getElementById("complemento").value;
  var doador = document.getElementById("doador").value;
  var password = document.getElementById("password-login").value;
  var agreement = document.getElementById("agreement").value;

  if (
    nome == "" ||
    sobrenome == "" ||
    email == "" ||
    data == "" ||
    endereco == "" ||
    complemento == "" ||
    doador == "" ||
    password == ""
  ) {
    alert("Preencha todos os campos");
  } 
  
    else {
    alert("Cadastro completo!");
    senhaCadastrada = password;
    emailCadastrado = email;
    localStorage.setItem(emailCadastrado, senhaCadastrada);
    window.location.href = "index.html";
  }


  console.log(nome);
  console.log(sobrenome);
  console.log(email);
  console.log(endereco);
  console.log(endereco);
  console.log(complemento);
  console.log(doador);
  console.log(password);
  console.log(data);
}

function validarLogin() {
  var email = document.getElementById("email").value;
  var senha = document.getElementById("password").value;

  console.log(email)
  console.log(senha)

  if (email == "" || senha == "") {
    alert("Coloque todos os dados para logar");
  } else {


    var senhaArmazenada = localStorage.getItem(email);

    if (senhaArmazenada == null) {
      alert("Não cadastrado");
    }
    else {
      if (senhaArmazenada != senha) {
        alert("Senha incorreta");
      }
      else {
        alert("Entrar");
        window.location.href = "FeedPets.html";
      }
    }
  }

}
