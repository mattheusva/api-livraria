import mongoose from "mongoose";

mongoose.connect("mongodb+srv://matheus:nostromo78@alura.hawga.mongodb.net/alura-node?");

let db = mongoose.connection;

export default db;