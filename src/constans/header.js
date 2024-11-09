//패킷 최소길이 = packetType+ versionLength +sequence +payloadLength = 2+1+4+4=11최대값     /payload ,version = 가변값
// | --- | --- | --- |
// | packetType | ushort | 패킷 타입 (2바이트) |
// | versionLength | ubyte | 버전 길이 (1바이트) |
// | version | string | 버전 (문자열) |
// | sequence | uint32 | 패킷 번호 (4바이트) |
// | payloadLength | uint32 | 데이터 길이 (4바이트) |
// | payload | bytes | 실제 데이터 |

export const PACKET_TYPE_LENGTH = 2;
export const VERSION_LENGTH = 1;
export const SEQUENCE_LENGTH = 4;
export const PAYLOAD_LENGTH = 4;
