

const status = document.querySelector('#status');
const status2 = document.querySelector('#status2');



 
 
 
 const socket = io();



console.log("socket-io.js loaded");

socket.on('connect', () => {
    console.log("Connected to server");
    status.style.display = "block";
    status2.style.display = "none";
    

}
);

socket.on('disconnect', () => {
    console.log("Disconnected from server");
    status.style.display = "none";
    status2.style.display = "block";
}
);


console.log(socket);




