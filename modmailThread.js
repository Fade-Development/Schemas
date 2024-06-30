// shared-models/modmailThread.js
const { Schema, model } = require("mongoose");

const modmailThreadSchema = new Schema({
    userId: { type: String, required: true },
    threadChannelId: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
});

const ModmailThreadModel = model("ModmailThread", modmailThreadSchema);

module.exports = ModmailThreadModel;