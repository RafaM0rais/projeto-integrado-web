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

  $("#singin").click(function (event) {
    event.preventDefault();
    let fullname = String($("#fullname").val());
    let email = String($("#email").val());
    let password = String($("#password").val());
    let phone = String($("#phone").val().replace(/(\D)/g, ""));

    $.ajax({
      type: "POST",
      crossDomain: true,
      data: JSON.stringify({
        fullname: fullname,
        email: email,
        password: password,
        phone: phone,
      }),
      url: "https://projeto-integrado-server.onrender.com/clientes",
      success: function (data) {
        console.log(data);
        alert("Usuário cadastrado com sucesso");
      },
      dataType: "json",
      contentType: "application/json",
    });
    createClient(fullname, email, phone);
  });
});
