const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = createServer(app);

app.use(cors());
app.use(express.json());

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const tables = {};

app.get("/", (req, res) => {
  res.send("Poker server is running");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/tables", (req, res) => {
  res.json(tables);
});


io.of("/admin").on("connection", (socket) => {
  // admin users future
});

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("joinTable", ({ tableId, playerName }) => {

    if (!tables[tableId]) {
      tables[tableId] = {
        tableId,
        players: [],
        pot: 0,
        communityCards: [],
        phase: "waiting",
      };
    }

  

    const table = tables[tableId];
    
    if(table.players.length < 9){

      table.players.push({
        id: socket.id,
        name: playerName,
        chips: 1000,
        folded: false,
      });

      socket.join(tableId);

      io.to(tableId).emit("tableState", table);

      console.log(`${playerName} joined table ${tableId}`);
    }else{
      socket.emit("joinError", {
        message: "Table is full. Please join another table.",
      });

      console.log(`${playerName} tried to join ${tableId}, but it was full`);
    }
  });

  socket.on("playerAction", ({ tableId, action, amount }) => {
    const table = tables[tableId];

    if (!table) {
      socket.emit("errorMessage", "Table does not exist");
      return;
    }

    console.log(`Player ${socket.id} did ${action} at ${tableId}`);

    io.to(tableId).emit("actionHappened", {
      playerId: socket.id,
      action,
      amount,
    });
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);

    for (const tableId in tables) {
      const table = tables[tableId];

      table.players = table.players.filter((player) => player.id !== socket.id);

      io.to(tableId).emit("tableState", table);

      if (table.players.length === 0) {
        delete tables[tableId];
        console.log(`Deleted empty table ${tableId}`);
      }
    }
  });
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

