// socket.js
import io from "socket.io-client";

const socket = io("https://img-compression-backend.onrender.com", {
    transports: ["polling", "websocket"],
});

export default socket;