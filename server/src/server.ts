import type { Request, Response } from "express";
const express = require("express");
const { createServer } = require("node:http");

const app = express();
const server = createServer(app);

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello world</h1>");
});

server.listen(3001, () => {
  console.log("server running at http://localhost:3001");
});