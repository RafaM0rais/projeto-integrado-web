// const { createClient } = require("main.js");

$(document).ready(function () {
  $("#signInButton").click(function (event) {
    event.preventDefault();
    window.location.href = "./views/signin.html";
  });

  $("#signInButtonViews").click(function (event) {
    event.preventDefault();
    window.location.href = "./signin.html";
  });

  $("#phone").mask("(00) 0 0000-0000");

  $("#signin").click(function (event) {
    event.preventDefault();

    let fullname = String($("#fullname").val());
    let email = String($("#email").val());
    let password = String($("#password").val());
    let phone = String($("#phone").val().replace(/(\D)/g, ""));

    if (fullname || email || password || phone) {
      let cliente = {
        fullname: fullname,
        email: email,
        password: password,
        cellphone: phone,
      };

      console.log(cliente);

      $.ajax({
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        crossDomain: true,
        data: JSON.stringify(cliente),
        url: "https://projeto-integrado-server.onrender.com/clientes",
      });
    } else {
      $("#signin").val("Preencha o Formulário");
    }
  });
});
