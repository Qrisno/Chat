const app = require("express")();
const server = require("http").Server(app);
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origins: ["http://localhost:4200"],
  },
});

// TODO: build database for users
io.on("connection", (socket) => {
  socket.on("message", (data) => {
    io.emit("message", data);
  });
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});
