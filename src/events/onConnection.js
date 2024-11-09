import { onData } from "./onData.js";
import { onEnd } from "./onEnd.js";
import { onError } from "./onError.js";

export const onConnection = (socket) => {
  console.log(`클라 연결됨 : ${socket.remoteAddress} : ${socket.remotePort}`);

  socket.buffer = Buffer.alloc(0); //빈 버퍼 /데이터를 담을 버퍼

  socket.on("data", onData(socket));

  socket.on("end", onEnd());

  socket.on("error", onError(err));
};
