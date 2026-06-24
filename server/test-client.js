const { io } = require("socket.io-client");

const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log("Connected as:", socket.id);

  socket.emit("joinTable", {
    tableId: "table-1",
    playerName: process.argv[2] || "Test Player",
  });
});

socket.on("tableState", (table) => {
  console.log("New table state:");
  console.log(JSON.stringify(table, null, 2));
});

socket.on("actionHappened", (data) => {
  console.log("Action happened:");
  console.log(data);
});

socket.on("joinError", (data) => {
  console.log(data.message);
});

setTimeout(() => {
  socket.emit("playerAction", {
    tableId: "table-1",
    action: "call",
    amount: 20,
  });
}, 1000);