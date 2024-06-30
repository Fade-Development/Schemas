// shared-models/guild.js
const { Schema, model } = require("mongoose");

const guildSchema = new Schema({
    guildID: { type: String, required: true },
});

const GuildModel = model("Guild", guildSchema, "Guild");

module.exports = GuildModel;