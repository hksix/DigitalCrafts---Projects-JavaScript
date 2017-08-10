// basic Websocket Server
// run node index.js on one terminal
// on a new terminal type wscat -c ws://localhost:8080
// on website go to localhost:8080
// then on dev tools type  let socket = new WebSocket('ws://localhost:8080');
// and socket.onmessage = function(event){console.log(event.data)}; this will receive the JS functions below
// on browser type socket.send ("message");



const ws = require('ws');
const server = new ws.Server({ port: 8080 });

server.on('connection',(socket)=>{
    console.log("someone connected");
    socket.on('message',(msg)=>{
        console.log('They said: ' + msg);
        socket.send('I know you are but what am I')
    });
});
// VM
    // vagrent script allows you to run a linux VM
    // https://www.vagrantup.com/intro/index.html

// AWS
    // AWS EC2 Instances 
    // Creating an instance (the easy way)
    // the root user refers to the "super user"
    // Unrestricted - can access/edit/delete anything on the computer
    // This user can install system software
    // 1024 down are the protected ports - 
    // sudo - super user do

    // apt-get is brew for Ubuntu
    // services - EC2 - AMI 


