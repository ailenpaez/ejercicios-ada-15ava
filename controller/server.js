import net from "node:net";
import dotenv from "dotenv";
import { m1, m2, m3, m4, m5, m6, m7,m9} from "./controller.js";

dotenv.config();

const port = process.env.PORT;

const serverTCP = net.createServer();

const processRequest = (request) => {
  const r = request;
  const module = request[0];
  switch (module) {
    case "m1":
      return m1(Number(r[1]), Number(r[2]));
    case "m2":
      return m2(Number(r[1]));
    case "m3":
      return m3(JSON.parse(r[1]));
    case "m4":
      return m4(r[1]);
    case "m5":
      return m5(r[1])
    case "m6":
      return m6(JSON.parse(r[1]))
    case "m7":
      return m7(Number(r[1]));
    // case "m8":
    //   return m8(JSON.parse(JSON.stringify(r[1])))
    case "m9":
      return m9(JSON.parse(r[1]))}
};

serverTCP.on("connection", (socket) => {
  socket.on("close", () => {
    console.log("Client disconnected!");
  });

  socket.on("data", (bufferDataClient) => {
    const data = JSON.parse(bufferDataClient.toString());
    const response = processRequest(data);
    socket.write(JSON.stringify(response));
  });

  console.log("Client Connected!");
});

serverTCP.listen(port, () => {
  console.log("connection successfull!");
});
