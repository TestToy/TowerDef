import { config } from "../config/config.js";

export const onData = (socket) => (data) => {
  console.log(`socket:***********************${socket}`);
  console.log(`data:***********************${data}`);
  console.log(`데이터 이벤트`);
  const headers = config.header;
  socket.buffer = Buffer.concat([socket.buffer.data]);
  const headerSize = headers.PACKET_TYPE_LENGTH + headers.VERSION_LENGTH;
  +headers.SEQUENCE_LENGTH + headers.PAYLOAD_LENGTH;
  //시작시 대기하는데 버퍼로 받기떄문에 특정한 길이만큼 들어와야함 패킷이 특정 길이이상으로 들어온다면 작업을 시작함
  while (socket.buffer.length > headerSize) {
    // [0][3] [5] [1][.][0][.][0](version) [0][0][0][1] [][][][] / [][][][][]
  }
};
