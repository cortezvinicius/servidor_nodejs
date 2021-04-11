const express = require('express');
const http = require('http');
const cors = require('cors');
const socketIo = require('socket.io');

const app = express();

const port = process.env.PORT || 8000;

const server = http.createServer(app);

const io = socketIo(server, {
    cors: {
        origin: "*"

    }
});

app.use(express.json())
app.use(cors());

app.get('/', (req, res)=>
{
    res.sendFile(__dirname + "/index.html");
})

io.on('connection', (socket)=>{
    console.log(`Socket Conectado: ${socket.id}`);
});

server.listen(port, ()=>{
    console.log("conectado")
});