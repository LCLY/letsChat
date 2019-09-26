var path = require("path");
const express = require("express");
const app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);
const PORT = process.env.PORT || 8080;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../../build")));

app.get("/", (req, res, next) => res.sendfile(__dirname + "./index.html"));

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
    console.log("listening on *:8000");
});
