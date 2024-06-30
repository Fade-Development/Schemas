// shared-models/blacklist.js
const { Schema, model } = require("mongoose");

const blacklistSchema = new Schema({
    userId: { type: String, required: true },
    reason: { type: String, required: true },
    duration: { type: String },
});

const BlacklistModel = model("Blacklist", blacklistSchema);

module.exports = BlacklistModel;