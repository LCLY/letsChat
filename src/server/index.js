const express = require("express");
const app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);
const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + "/../../build"));

io.on("connection", function(socket) {
    console.log("a user connected");
    socket.on("chat message", function(msg) {
        // console.log("message: " + JSON.stringify(msg));
        console.log(msg);
        io.emit("chat message", msg);
    });
    socket.on("disconnect", function() {
        console.log("user disconnected");
    });
});

http.listen(PORT, function() {
    console.log("listening on *:5000");
});
