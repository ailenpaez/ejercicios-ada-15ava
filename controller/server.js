import net from "node:net";
import dotenv from "dotenv";
import{m1} from "./controller.js"
dotenv.config();

const port = process.env.PORT;

const serverTCP = net.createServer();

const processRequest = (request) =>{
}

serverTCP.on("connection", (socket) =>{

    socket.on("close", ()=>{
        console.log("Client disconnected!");
    })

    socket.on("data", (bufferDataClient)=>{
    const data = JSON.parse(bufferDataClient.toString())
    const response = processRequest()
    socket.write(JSON.stringify(response))
    })

    console.log("Client Connected!");
})


serverTCP.listen(port, () =>{
    console.log("connection successfull!");
})