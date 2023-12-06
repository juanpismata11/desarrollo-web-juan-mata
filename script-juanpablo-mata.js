document.getElementById('formularioContacto').addEventListener('submit',
function(event) {
    event.preventDefault();
    var edad=document.getElementById('edad').value;
    var sexo = document.getElementById('sexo').value;
    var educacion = document.getElementById('educacion').value;
    var ocupacion = document.getElementById('ocupacion').value;
    var url = 'resultado-juanpablo-mata.html?edad=' +
    encodeURIComponent(edad) + '&sexo=' +
    encodeURIComponent(sexo) + '&educacion='+
    encodeURIComponent(educacion) + '&ocupacion='+
    encodeURIComponent(ocupacion);
    window.location.href = url;
})