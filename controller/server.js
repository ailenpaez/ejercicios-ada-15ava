import net from "node:net";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;

const serverTCP = net.createServer();

serverTCP.on("connection", (socket) =>{

    socket.on("close", ()=>{
        console.log("Client disconnected!");
    })

    console.log("Client Connected!");
})


serverTCP.listen(port, () =>{
    console.log("connection successfull!");
})