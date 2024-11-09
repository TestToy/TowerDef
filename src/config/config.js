import {
  DB1_HOST,
  DB1_NAME,
  DB1_PASSWORD,
  DB1_PORT,
  DB1_USER,
  HOST,
  PORT,
} from "../constans/env.js";
import {
  PACKET_TYPE_LENGTH,
  PAYLOAD_LENGTH,
  SEQUENCE_LENGTH,
  VERSION_LENGTH,
} from "../constans/header.js";

export const config = {
  server: {
    port: PORT,
    host: HOST,
  },
  database: {
    USER_DB: {
      name: DB1_NAME,
      user: DB1_USER,
      password: DB1_PASSWORD,
      host: DB1_HOST,
      port: DB1_PORT,
    },
  },
  header: {
    PACKET_TYPE_LENGTH,
    VERSION_LENGTH,
    SEQUENCE_LENGTH,
    PAYLOAD_LENGTH,
  },
};
