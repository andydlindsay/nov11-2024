# W02D03 - Networking with TCP

### To Do
- [x] Discuss networking and the need for protocols
- [x] TCP introduction
- [x] TCP demo

### Networking
* a series of computers connected together
* any computer on the network can talk to any other computer on the network

ISP

### IP
* Internet Protocol
* provide a unique address for every computer on the network
* street address
* IPv4 192.168.8.8
* IPv6 2001:db8:3333:4444:5555:6666:7777:8888 (June 6th)

### Port
* uniquely identifies one running process on your computer
* 65,535 ports to choose from
  * <1000 reserved for other purposes
  * SSH 22
  * HTTP 80
  * HTTPS 443
  * Postgres 5432
  * dev 3000-9000

### Packets
* broken down into same sized packets
* header => origin and destination
* find it's own way to the destination

### TCP
* Transmission Control Protocol
* requires a connection (3-way handshake)
* missing packets are re-sent
* packets are re-ordered on arrival

### UDP
* User Datagram Protocol
* connectionless
* missing packets are lost
* packets arrive in any order

servers => has information
clients => want information

### Event-driven Programming
* the code we write won't run on server start
* only runs in response to particular events occurring

server.on('connection', () => {})
button.on('click', () => {})
form.on('submit', () => {})


console.log() \n
process.stdout.write()  Socket object
light

client for a snek

connection.write("Move: up")
"Move: down"