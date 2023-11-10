import net from "node:net";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;

const serverTCP = net.createServer();

serverTCP.on("connection", (socket) =>{
    socket.on("connect", ()=>{
        console.log("Client Connected!");
    })

    socket.on("close", ()=>{
        console.log("Client disconnected!");
    })
})


serverTCP.listen(PORT, () =>{
    console.log("connection successfull!");
})