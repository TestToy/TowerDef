import net from "net";
import { config } from "./config/config.js";
import { onConnection } from "./events/onConnection.js";
const start = config.server;
const server = net.createServer(onConnection);

server.listen(start.port, start.host, () => {
  console.log(`[⭐Server ${start.port} : ${start.host}⭐] `);
});
