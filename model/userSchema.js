const mongoose = require('mongoose');

const usersModel = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobile : { type: Number, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() },
}, { collection: "users" });
module.exports = UserSchema = mongoose.model("users", usersModel);