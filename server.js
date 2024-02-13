// don't change the prewritten code
// change the code for 'join' event

import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import { messageModel } from './message.schema.js';

export const app = express();
app.use(cors());

export const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log("Connection made.");

    socket.on("join", async (data) => {

        socket.emit("message", { text: `Welcome, ${data.username}!` });

        socket.broadcast.to(data.room).emit("message", {
            text: `${data.username} has joined the room.`
        });

        messageModel.find({ room: data.room })
            .then(message => {
                console.log("Mmmmm", message)
                socket.emit("previousMessages", message);
            }).catch(err => {
                console.log(err);
            })

        socket.join(data.room);

    });

    socket.on("sendMessage", async (data) => {

        const message = new messageModel({
            username: data.username,
            text: data.message,
            room: data.room
        })

        await message.save();

        // Broadcast the received message to all users in the same room
        io.to(data.room).emit("message", {
            username: data.username,
            text: data.message
        });
    });

    socket.on("disconnect", () => {
        console.log("Connection disconnected.");
    });
});


