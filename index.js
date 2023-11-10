import net from "node:net"
import dotenv from "dotenv"
dotenv.config()

const options = {
    port: process.env.PORT,
    host: process.env.HOST
}

const clientTCP = net.connect(options);

const sendDataToServer = () =>{
    const args = JSON.stringify(process.argv.splice(2));
    console.log(args);
    clientTCP.write(args);
    clientTCP.end();
}

clientTCP.on("connect",()=>{
    console.log("client connected!");
    sendDataToServer()
})

clientTCP.on("data", (bufferDataServer)=>{
    const data = JSON.parse(bufferDataServer.toString())
    console.log(data);
    clientTCP.end();
})

clientTCP.on("close",()=>{
    console.log("client closed!");
})