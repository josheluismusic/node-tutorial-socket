const { io } = require('../server')

io.on('connection', (client) => {
    
    /*
    client.emit('enviarMensajeServer', {
        usuario: 'admin',
        mensaje: 'Bienvenido a la APP'
    })
    */

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })

    client.on('enviarMensaje', (data, res) => {
        
        console.log(data);

        //client.emit('enviarMensajeServer', data);

        client.broadcast.emit('enviarMensajeServer', data);

        // if(message.usuario) {
        //     res({
        //         message: 'Todo salio bien'
        //     });
        // } else {
        //     res({
        //         message: 'Todo salio MAL'
        //     });
        // }


    });

})