var socket = io();

//Escuchar información
socket.on('connect', function () {
    console.log('Conectado al servidor');
});

//Escuchar información
socket.on('disconnect', function () {
    console.log('Perdimos conexion con servidor');
});

//Enviar información
socket.emit('enviarMensaje', {
    usuario: 'jose luis',
    mensaje: 'Hola mundo'
}, function (res) {
    console.log('respuesta server', res);
});


socket.on('enviarMensajeServer', function (msg) {
    console.log(msg);
})
