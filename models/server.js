const express = require('express');
const cors = require('cors');






class Server {

    constructor() {
        this.app    = express();
        this.port   = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io     = require('socket.io')(this.server);

        this.paths = {
            
        }


        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();

        // Sockets
        this.socketConfig();
    }

  

    middlewares() {

        // CORS
        this.app.use( cors() );

     
        // Directorio Público
        this.app.use( express.static('public') );  

    }

    routes() {       
    
    }

     socketConfig() {
         this.io.on('connection', client => {
             console.log('Cliente conectado');

                client.on('disconnect', () => {
                    console.log('Cliente desconectado');
                }
            );
            
        });
     }


    listen() {
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en -puerto ', this.port);
        });

   
    }
    




}




module.exports = Server;